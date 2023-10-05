/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import Blockly from "blockly/core";
import React, { useState } from "react";
import "./BlocklyComponent.css";
import { useEffect, useRef } from "react";
import "./index";
import { pythonGenerator } from "blockly/python";
import locale from "blockly/msg/ko";
import "blockly/blocks";
import { Block, Category, Field, Shadow, Value } from ".";
import { Order } from "blockly/javascript";
import { workspaceCommentOption } from "blockly/core/contextmenu";

import domtoimage from "dom-to-image";
import * as FileSaver from "file-saver";
import {
  BlocklyArea,
  BlocklyDiv,
  BlocklyWrapper,
  CollapseToolBoxButton,
} from "./BlocklyComponent.style";

import { guideBlocks } from "./blocks/guideblocks";

Blockly.setLocale(locale);

export interface CustomVariableBlockGroup {
  defArray: any[];
  settingArray: any[];
  getArray: any[];
}

function BlocklyComponent(props: any) {
  const [array, setArray] = useState<any>([]);
  const [defArray, setDefArray] = useState<any>([]);
  const [settingArray, setSettingArray] = useState<any>([]);
  const [getArray, setGetArray] = useState<any>([]);
  const [cnt, setCnt] = useState<number>(0);
  //도구상자 열고 닫기
  const [toolboxCollapsed, setToolboxCollapsed] = useState<boolean>(true);
  // const [test, setest] = useState<any>(undefined);
  const blocklyDiv = useRef();
  const blocklyArea = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();
  const generateCode = () => {
    var code = pythonGenerator.workspaceToCode(primaryWorkspace.current);
    // var code = JSON.stringify(pythonGenerator.workspaceToCode(primaryWorkspace.current)).replace(/^"(.*)"$/, '$1');
    console.log(code);
  };

  const generateVar = () => {
    console.log("generateVar");
    const tmp = prompt("변수명(10자 이하 영어만 입력해주세요)", "");
    if (tmp === null || !/^[a-zA-Z]+$/.test(tmp) || tmp.length > 10) {
      alert("올바른 영어 입력이 아닙니다.");
      return;
    }
    // else {
    //   alert("올바른 영어 입력입니다.");
    // }

    const def = "custom_value_def_" + tmp;
    const set = "custom_value_set_" + tmp;
    const get = "custom_value_get_" + tmp;
    const data = "custom_value_" + tmp;

    //def
    Blockly.Blocks[def] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable(tmp), def)
          .appendField(" 변수 선언");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setColour(360);
        this.setTooltip("");
        this.setHelpUrl("");
      },
    };
    pythonGenerator.forBlock[def] = function (block: any, generator: any) {
      // var field = block.getFieldValue(def);/
      var code = data + " = 0\n";
      return code;
    };

    //set
    Blockly.Blocks[set] = {
      init: function () {
        this.appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable(tmp), set)
          .appendField("의 값을 ");
        this.appendValueInput("Number").setCheck("Number");
        this.appendDummyInput().appendField("으로 설정");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(360);
        this.setTooltip("");
        this.setHelpUrl("");
      },
    };
    pythonGenerator.forBlock[set] = function (block: any, generator: any) {
      // var field = block.getFieldValue(set);
      var number_value = generator.valueToCode(block, "Number", Order.NONE).toString();
      var code = data + " = " + number_value + "\n";
      return code;
    };

    //get
    Blockly.Blocks[get] = {
      init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable(tmp), get);
        this.setOutput(true, "Number");
        this.setColour(360);
        this.setTooltip("");
        this.setHelpUrl("");
      },
    };
    pythonGenerator.forBlock[get] = function (block: any, generator: any) {
      // var field = block.getFieldValue(get);
      var code = data;
      return [code, Order.NONE];
    };

    setCnt(cnt + 1);
    let newArray1 = defArray;
    newArray1.push(def);
    setDefArray(newArray1);
    let newArray2 = settingArray;
    newArray2.push(set);
    setSettingArray(newArray2);
    let newArray3 = getArray;
    newArray3.push(get);
    setGetArray(newArray3);
    console.log("generateVar");

    console.log(defArray);
    console.log(settingArray);
    console.log(getArray);
  };

  const reset = () => {
    setCnt(0);
    setDefArray([]);
    setSettingArray([]);
    setGetArray([]);
    Blockly.Events.disable();
    if (primaryWorkspace.current != undefined) {
      primaryWorkspace.current.clear();
    }
    Blockly.Events.enable();
    console.log("reset");
  };

  //사용자 지정 변수 배열 3개 포함, local에 임시로
  const save = () => {
    if (primaryWorkspace.current != undefined) {
      const state = Blockly.serialization.workspaces.save(primaryWorkspace.current);
      console.log("bloooooooooooooooooooooooock");
      console.log(state);
      localStorage.setItem("data", JSON.stringify(state));
      localStorage.setItem("defblocks", JSON.stringify(defArray));
      localStorage.setItem("setblocks", JSON.stringify(settingArray));
      localStorage.setItem("getblocks", JSON.stringify(getArray));
    }
    console.log("save");
  };
  //사용자 지정 변수 배열 3개 포함, local에 임시로
  const load = (
    isTest: boolean,
    blockcode?: any,
    defblocks?: any,
    setblocks?: any,
    getblocks?: any
  ) => {
    reset();
    console.log("load- start--------------------");
    console.log(isTest);
    console.log(blockcode);
    console.log(defblocks);
    console.log(setblocks);
    console.log(getblocks);
    console.log("load- end--------------------");
    if (primaryWorkspace.current != undefined) {
      const tmp = !isTest ? blockcode : JSON.parse(localStorage.getItem("data"));
      const defblocksTmp = !isTest ? defblocks : JSON.parse(localStorage.getItem("defblocks"));
      const settingblocksTmp = !isTest ? setblocks : JSON.parse(localStorage.getItem("setblocks"));
      const getblocksTmp = !isTest ? getblocks : JSON.parse(localStorage.getItem("getblocks"));

      if (tmp != undefined) {
        if (
          defblocksTmp !== undefined &&
          settingblocksTmp != undefined &&
          getblocksTmp != undefined
        ) {
          const defblocks = defblocksTmp;
          const settingblocks = settingblocksTmp;
          const getblocks = getblocksTmp;
          // const defblocks = JSON.parse(defblocksTmp);
          // const settingblocks = JSON.parse(settingblocksTmp);
          // const getblocks = JSON.parse(getblocksTmp);
          console.log(defblocks);
          console.log(settingblocks);
          console.log(getblocks);
          defblocks.forEach((def: string) => {
            let value = def.substring("custom_value_def_".length);
            const data = "custom_value_" + value;
            //def
            Blockly.Blocks[def] = {
              init: function () {
                this.appendDummyInput()
                  .appendField(new Blockly.FieldLabelSerializable(value), def)
                  .appendField(" 변수 선언");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(360);
                this.setColour(360);
                this.setTooltip("");
                this.setHelpUrl("");
              },
            };
            pythonGenerator.forBlock[def] = function (block: any, generator: any) {
              // var field = block.getFieldValue(def);/
              var code = data + " = 0\n";
              return code;
            };
          });

          settingblocks.forEach((set: string) => {
            let value = set.substring("custom_value_set_".length);
            const data = "custom_value_" + value;
            //set
            Blockly.Blocks[set] = {
              init: function () {
                this.appendDummyInput()
                  .appendField(new Blockly.FieldLabelSerializable(value), set)
                  .appendField("의 값을 ");
                this.appendValueInput("Number").setCheck("Number");
                this.appendDummyInput().appendField("으로 설정");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(360);
                this.setTooltip("");
                this.setHelpUrl("");
              },
            };
            pythonGenerator.forBlock[set] = function (block: any, generator: any) {
              // var field = block.getFieldValue(set);
              var number_value = generator.valueToCode(block, "Number", Order.NONE).toString();
              var code = data + " = " + number_value + "\n";
              return code;
            };
          });

          getblocks.forEach((get: string) => {
            let value = get.substring("custom_value_get_".length);
            const data = "custom_value_" + value;
            //get
            Blockly.Blocks[get] = {
              init: function () {
                this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable(value), get);
                this.setOutput(true, "Number");
                this.setColour(360);
                this.setTooltip("");
                this.setHelpUrl("");
              },
            };
            pythonGenerator.forBlock[get] = function (block: any, generator: any) {
              // var field = block.getFieldValue(get);
              var code = data;
              return [code, Order.NONE];
            };
          });

          console.log(defblocks);
          console.log(settingblocks);
          console.log(getblocks);
          setCnt(getblocks.length);
          setDefArray(defblocks);
          setSettingArray(settingblocks);
          setGetArray(getblocks);
        }
        const state = tmp;
        Blockly.serialization.workspaces.load(state, primaryWorkspace.current);
      }
    }
    console.log("load");
  };

  /**
   * Convert an SVG datauri into a PNG datauri.
   * @param {string} data SVG datauri.
   * @param {number} width Image width.
   * @param {number} height Image height.
   * @param {!Function} callback Callback.
   */
  // const svgToPng_ = (data, width, height) => {
  //   var canvas = document.createElement("canvas");
  //   var context = canvas.getContext("2d");
  //   var img = new Image();

  //   var pixelDensity = 10;
  //   var dataUri;
  //   canvas.width = width * pixelDensity;
  //   canvas.height = height * pixelDensity;
  //   img.onload = function () {
  //     context.drawImage(img, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
  //     try {
  //       dataUri = canvas.toDataURL("image/png");
  //       // console.log("dataUri")
  //       // console.log(dataUri)
  //       // setest(dataUri)
  //     } catch (err) {
  //       console.warn("Error converting the workspace svg to a png");
  //     }
  //   };
  //   img.src = data;
  //   // setest(data)
  //   return data;
  // };

  /**
   * Create an SVG of the blocks on the workspace.
   * @param {!Blockly.WorkspaceSvg} workspace The workspace.
   * @param {!Function} callback Callback.
   * @param {string=} customCss Custom CSS to append to the SVG.
   */
  const workspaceToSvg_ = (workspace, customCss) => {
    // Go through all text areas and set their value.
    var textAreas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textAreas.length; i++) {
      textAreas[i].innerHTML = textAreas[i].value;
    }

    var bBox = workspace.getBlocksBoundingBox();
    var x = bBox.x || bBox.left;
    var y = bBox.y || bBox.top;
    var width = bBox.width || bBox.right - x;
    var height = bBox.height || bBox.bottom - y;

    var blockCanvas = workspace.getCanvas();
    var clone = blockCanvas.cloneNode(true);
    clone.removeAttribute("transform");

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.appendChild(clone);
    svg.setAttribute("viewBox", x + " " + y + " " + width + " " + height);

    svg.setAttribute(
      "class",
      "blocklySvg " +
        (workspace.options.renderer || "geras") +
        "-renderer " +
        (workspace.getTheme ? workspace.getTheme().name + "-theme" : "")
    );
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("style", "background-color: transparent");

    var css = [].slice
      .call(document.head.querySelectorAll("style"))
      .filter(function (el) {
        return /\.blocklySvg/.test(el.innerText) || el.id.indexOf("blockly-") === 0;
      })
      .map(function (el) {
        return el.innerText;
      })
      .join("\n");
    var style = document.createElement("style");
    style.innerHTML = css + "\n" + customCss;
    svg.insertBefore(style, svg.firstChild);

    var svgAsXML = new XMLSerializer().serializeToString(svg);
    // svgAsXML = svgAsXML.replace(/&nbsp/g, "&#160");
    // var data = "data:image/svg+xml," + encodeURIComponent(svgAsXML);
    // return data;
    // return svgToPng_(data, width, height);
    const svgBlob = new Blob([svgAsXML], { type: 'image/svg+xml' });
    const svgFile = new File([svgBlob], 'tmp.svg', { type: 'image/svg+xml' });
    return svgFile;
  };

  const exportImageAsPNG = () => {
    if (primaryWorkspace.current != undefined) {
      let file = workspaceToSvg_(primaryWorkspace.current, "");
      console.log(file);
      return file;
    } else {
      console.log("false");
      return null;
    }
  };
  // const exportImageAsPNG = () => {
  //   if (primaryWorkspace.current != undefined) {
  //     let file = workspaceToSvg_(primaryWorkspace.current, function (datauri) {
  //       var a = document.createElement('a');
  //       a.download = 'screenshot.png';
  //       a.target = '_self';
  //       a.href = datauri;
  //       document.body.appendChild(a);
  //       console.log(a)
  //       a.click();
  //       a.parentNode.removeChild(a);
  //     }, "");
  //     console.log(file)
  //     return file;
  //   }
  //   else {
  //     console.log("false")
  //     return null
  //   }
  // }

  //사용자 변수 추가
  useEffect(() => {
    // console.log(primaryWorkspace.current);
    if (primaryWorkspace.current != undefined) {
      primaryWorkspace.current.registerButtonCallback("generateblock", generateVar);
      primaryWorkspace.current.updateToolbox(toolbox.current);
      primaryWorkspace.current.getFlyout().hide();
    }
  }, [cnt]);

  //블록 코드 있는지 여부 확인 + 저장
  useEffect(() => {
    if (!props.codeCheck) {
      if (primaryWorkspace.current != undefined) {
        props.writeTacticJsonCode(
          JSON.stringify({
            tacticCode: Blockly.serialization.workspaces.save(primaryWorkspace.current),
            defArray: defArray,
            settingArray: settingArray,
            getArray: getArray,
          })
        );
        // .replace(/\s/g, '\\u0020').replace(/\n/g, '\\n')
        props.writeTacticPythonCode(pythonGenerator.workspaceToCode(primaryWorkspace.current));
        props.writeTacticImg(exportImageAsPNG);
        // CustomVariableBlockGroup
        // props.writeCustomVariableBlockGroup({
        //   defArray: JSON.stringify(defArray),
        //   settingArray: JSON.stringify(settingArray),
        //   getArray: JSON.stringify(getArray),
        // });
      }
      save();
      props.setCodeCheckTrue();
      console.log(props.codeCheck);
      console.log("codeCheck low component");
    }
  }, [props.codeCheck]);

  // if (props.tacticId != null)

  // (blockcode?:any, defblocks?:any, setblocks?:any, getblocks?:any)
  //전략 id 있는지 확인 === 불러온 전략인지 확인 + 코드 불러오기
  useEffect(() => {
    console.log(props)
    if (props.tacticId != null && props.tacticJsonCode !== undefined) {
      load(
        false,
        props.tacticJsonCode.tacticCode,
        props.tacticJsonCode.defArray,
        props.tacticJsonCode.settingArray,
        props.tacticJsonCode.getArray
      );
    }
  }, [props.tacticId, props.tacticJsonCode]);

  //도구상자 열고 닫기 기능
  useEffect(() => {
    if (primaryWorkspace.current !== undefined) {
      if (!toolboxCollapsed) {
        primaryWorkspace.current.getToolbox().setVisible(false);
        primaryWorkspace.current.getFlyout().hide();
      } else {
        primaryWorkspace.current.getToolbox().setVisible(true);
        primaryWorkspace.current.updateToolbox(toolbox.current);
      }
    }
  }, [toolboxCollapsed]);

  // Returns an array of objects.
  var coloursFlyoutCallback = function (workspace) {
    var blockList = [];
    blockList.push({});

    return blockList;
  };

  //블록리 화면 동적 주입
  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    if (primaryWorkspace.current === undefined && blocklyDiv.current !== undefined) {
      const blocklyArea = document.getElementById("blocklyArea");
      primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox.current,
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true,
        },
        trashcan: true,
      });

      const onresize = function (e) {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        let element = blocklyArea;
        let x = 0;
        let y = 0;
        do {
          x += element.offsetLeft;
          y += element.offsetTop;
          element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        if (blocklyDiv.current !== null) {
          blocklyDiv.current.style.left = 0;
          blocklyDiv.current.style.top = 0;
          // blocklyDiv.style.left = x + "px";
          // blocklyDiv.style.top = y + "px";
          blocklyDiv.current.style.width = blocklyArea.offsetWidth + "px";
          blocklyDiv.current.style.height = blocklyArea.offsetHeight + "px";
          Blockly.svgResize(primaryWorkspace.current);
        }
      };
      window.addEventListener("resize", onresize, false);
      window.addEventListener("click", onresize, false);
      onresize();
      // primaryWorkspace.current = Blockly.inject(
      //   blocklyDiv.current,
      //   //  { toolbox }
      //   {
      //     toolbox: toolbox.current,
      //     // ...rest
      //   }
      // );
    }
    if (initialXml) {
      console.log("제발ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ");
      console.log(initialXml);
      Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(initialXml), primaryWorkspace.current);
    }

    primaryWorkspace.current.registerButtonCallback("generateblock", generateVar);

    // Associates the function with the string 'COLOUR_PALETTE'
    primaryWorkspace.current.registerToolboxCategoryCallback("guide", coloursFlyoutCallback);
    // var category = primaryWorkspace.current.getToolbox().getToolboxItems()[6];
    // category.updateFlyoutContents(guideBlocks[0]);

    // console.log(array, cnt, toolbox.current, primaryWorkspace.current);
  }, [primaryWorkspace, toolbox, blocklyDiv, blocklyArea, props]);

  const collapseToolbox = () => {
    if (toolboxCollapsed) setToolboxCollapsed(false);
    else setToolboxCollapsed(true);
  };

  return (
    <BlocklyWrapper>
      <BlocklyArea ref={blocklyArea} id="blocklyArea"></BlocklyArea>
      <CollapseToolBoxButton onClick={collapseToolbox} $toolboxCollapsed={toolboxCollapsed}>
        {toolboxCollapsed ? "도구상자 닫기" : "도구상자 열기"}
      </CollapseToolBoxButton>
      {/* 아래는 임시 버튼 */}
      {/* <CollapseToolBoxButton
        style={{ left: "528px", width: "100px" }}
        $toolboxCollapsed={toolboxCollapsed}
        onClick={generateCode}
      >
        Convert
      </CollapseToolBoxButton> */}
      <CollapseToolBoxButton
        style={{ left: "128px", width: "100px" }}
        $toolboxCollapsed={toolboxCollapsed}
        onClick={generateVar}
      >
        Generate
      </CollapseToolBoxButton>
      <CollapseToolBoxButton
        style={{ left: "228px", width: "100px" }}
        $toolboxCollapsed={toolboxCollapsed}
        onClick={reset}
      >
        reset
      </CollapseToolBoxButton>
      <CollapseToolBoxButton
        style={{ left: "328px", width: "100px" }}
        $toolboxCollapsed={toolboxCollapsed}
        onClick={save}
      >
        save
      </CollapseToolBoxButton>
      <CollapseToolBoxButton
        style={{ left: "428px", width: "100px" }}
        $toolboxCollapsed={toolboxCollapsed}
        onClick={() => load(true)}
      >
        load
      </CollapseToolBoxButton>
      {/* <CollapseToolBoxButton
        style={{ left: "628px", width: "100px" }}
        $toolboxCollapsed={toolboxCollapsed}
        onClick={() => exportImageAsPNG()}
      >
        이미지
      </CollapseToolBoxButton> */}

      {/* <div style={{width:"98%", height:"98%"}} id="blocklyArea"></div> */}
      <BlocklyDiv ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: "none" }} ref={toolbox}>
        <Category name="조건" categorystyle="logic_category">
          <Block type="controls_if" />
          <Block type="controls_ifelse" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="logic_boolean" />
          {/* <Block type="logic_ternary" /> */}
        </Category>

        <Category name="반복" categorystyle="loop_category">
          <Block type="controls_repeat_ext" />
          <Block type="controls_whileUntil" />
          <Block type="controls_for" />
          <Block type="controls_forEach" />
          {/* <Block type="controls_flow_statements" /> */}
        </Category>

        <Category name="수식" categorystyle="math_category">
          <Block type="math_number" />
          <Block type="math_percent" />
          <Block type="math_arithmetic" />
          <Block type="math_single" />
          <Block type="math_trig" />
          <Block type="math_constant" />
          <Block type="math_number_property" />
          <Block type="math_round" />
          <Block type="math_on_list" />
          {/* <Block type="math_modulo" />
          <Block type="math_constrain" />
          <Block type="math_random_int" />
          <Block type="math_random_float" /> */}
        </Category>

        {/* <Category name="Lists" categorystyle="list_category">
          <Block type="lists_create_with" />
          <Block type="lists_repeat" />
          <Block type="lists_length" />
          <Block type="lists_isEmpty" />
          <Block type="lists_indexOf" />
        </Category> */}

        {/* <Category name="Functions" categorystyle="procedure_category" custom="PROCEDURE"></Category> */}

        <Category name="매매" colour="300">
          {/* <Block type="call_function" /> */}
          {/* <Block type="once_volume" >
            <Value name="NAME">
              <Shadow type="math_number">
                <Field name="NUM">0</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="once_open" >
            <Value name="NAME">
              <Shadow type="math_number">
                <Field name="NUM">0</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="once_close" >
            <Value name="NAME">
              <Shadow type="math_number">
                <Field name="NUM">0</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="once_high" >
            <Value name="NAME">
              <Shadow type="math_number">
                <Field name="NUM">0</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="once_low" >
            <Value name="NAME">
              <Shadow type="math_number">
                <Field name="NUM">0</Field>
              </Shadow>
            </Value>
          </Block> */}

          <Block type="sell">
            <Value name="NAME">
              <Shadow type="cnt_per_reserve">
                <Value name="NAME">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
              </Shadow>
            </Value>
          </Block>
          <Block type="buy">
            <Value name="NAME">
              <Shadow type="cnt_per_asset">
                <Value name="NAME">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
              </Shadow>
            </Value>
          </Block>
          <Block type="stay" />

          <Block type="minmaxavg_select" />
          <Block type="ochlv_value" />
          <Block type="date_scope" />
          <Block type="term_scope" />

          {/* <Block type="calculate_rsi" >
            <Value name="OCHL">
              <Shadow type="ochlv_value">
                <Field name="FIELDNAME">open</Field>
              </Shadow>
            </Value>
          </Block> */}
          {/* <Block type="dict_get" /> */}
          {/* <Block type="dict_get_literal" /> */}
          {/* <Block type="dicts_create_with" /> */}
          {/* <Block type="dict_keys" /> */}
        </Category>

        <Category name="변수" colour="360">
          <Block type="cnt_per_reserve">
            <Value name="NAME">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="cnt_per_asset">
            <Value name="NAME">
              <Shadow type="math_number">
                <Field name="NUM">1</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="cur_data">
            <Value name="OCHL">
              <Shadow type="ochlv_value" />
            </Value>
          </Block>
          <Block type="calculate_scope_data">
            <Value name="SCOPE">
              <Shadow type="date_scope" />
            </Value>
            <Value name="OCHL">
              <Shadow type="ochlv_value" />
            </Value>
            <Value name="HLA">
              <Shadow type="minmaxavg_select" />
            </Value>
          </Block>

          <Block type="calculate_scope_data">
            <Value name="SCOPE">
              <Shadow type="term_scope" />
            </Value>
            <Value name="OCHL">
              <Shadow type="ochlv_value" />
            </Value>
            <Value name="HLA">
              <Shadow type="minmaxavg_select" />
            </Value>
          </Block>

          <Block type="specific_date_data">
            <Value name="OCHL">
              <Shadow type="ochlv_value" />
            </Value>
          </Block>
          <Block type="specific_term_data">
            <Value name="OCHL">
              <Shadow type="ochlv_value" />
            </Value>
          </Block>
        </Category>
        <Category name="사용자지정" colour="#832626">
          <button text="사용자 변수 생성" callbackkey="generateblock"></button>
          {defArray.map((item, index) => {
            return <Block key={index} type={item} />;
          })}
          {settingArray.map((item, index) => {
            return <Block key={index} type={item} />;
          })}
          {getArray.map((item, index) => {
            return <Block key={index} type={item} />;
          })}
        </Category>
        <Category name="가이드 블록" colour="#ffee04" custom="guide"></Category>
      </div>
    </BlocklyWrapper>
  );
}

export default BlocklyComponent;
