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

Blockly.setLocale(locale);

function BlocklyComponent(props: any) {
  const [array, setArray] = useState<any>([]);
  const [cnt, setCnt] = useState<number>(0);
  // const [test, setest] = useState<any>(undefined);
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  const generateCode = () => {
    var code = pythonGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };

  const generateVar = () => {
    const tmp = prompt("insert value", "");
    const type = tmp != null ? tmp : "";
    Blockly.Blocks[type] = {
      init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable(type), type);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
      },
    };
    pythonGenerator.forBlock[type] = function (block: any, generator: any) {
      var field = block.getFieldValue(type);
      // TODO: Assemble python into code variable.
      var code = field;
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Order.NONE];
    };
    setCnt(cnt + 1);
    let newArray = array;
    newArray.push(type);
    setArray(newArray);
    console.log("generateVar");

    console.log(array);
  };

  const reset = () => {
    setCnt(0);
    setArray([]);
    Blockly.Events.disable();
    if (primaryWorkspace.current != undefined) {
      primaryWorkspace.current.clear();
    }
    Blockly.Events.enable();
    console.log("reset");
  };

  const save = () => {
    if (primaryWorkspace.current != undefined) {
      const state = Blockly.serialization.workspaces.save(primaryWorkspace.current);
      localStorage.setItem("data", JSON.stringify(state));
      localStorage.setItem("blocks", JSON.stringify(array));
    }
    console.log("save");
  };
  const load = () => {
    if (primaryWorkspace.current != undefined) {
      const tmp = localStorage.getItem("data");
      const blocksTmp = localStorage.getItem("blocks");

      if (tmp != null) {
        if (blocksTmp !== null) {
          const blocks = JSON.parse(blocksTmp);
          blocks.forEach((type: string) => {
            Blockly.Blocks[type] = {
              init: function () {
                this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable(type), type);
                this.setOutput(true, null);
                this.setColour(230);
                this.setTooltip("");
                this.setHelpUrl("");
              },
            };
            pythonGenerator.forBlock[type] = function (block, generator) {
              var field = block.getFieldValue(type);
              // TODO: Assemble python into code variable.
              var code = field;
              // TODO: Change ORDER_NONE to the correct strength.
              return [code, Order.NONE];
            };
          });

          setCnt(blocks.length);
          setArray(blocks);
        }
        const state = JSON.parse(tmp);
        Blockly.serialization.workspaces.load(state, primaryWorkspace.current);
      }
    }
    console.log("load");
  };

  //전체 블록 화면 창 이미지 캡쳐
  // const exportImageAsPNG = () => {
  //   const blocklyBlockCanvas = document.querySelector("#blocklyDiv");
  //   console.log(blocklyBlockCanvas);
  //   let file = null;
  //   if (blocklyBlockCanvas) {
  //     // blocklyCursor 요소가 존재하는 경우
  //     domtoimage
  //       .toBlob(blocklyBlockCanvas)
  //       .then((blob) => {
  //         file = new File([blob], "image.png", { type: "image/png" });
  //         console.log(file);
  //       })
  //       // .then(function (blob) {
  //       //   FileSaver.saveAs(blob, "blocklyCursor.png");
  //       // })
  //       .catch(function (error) {
  //         console.error("이미지 캡처 중 오류 발생:", error);
  //       });
  //   } else {
  //     console.log('클래스 "blocklyCursor"를 가진 SVG 요소가 존재하지 않습니다.');
  //   }
  //   return file;
  // };


  /**
   * Convert an SVG datauri into a PNG datauri.
   * @param {string} data SVG datauri.
   * @param {number} width Image width.
   * @param {number} height Image height.
   * @param {!Function} callback Callback.
   */
  const svgToPng_ = (data, width, height) => {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var img = new Image();

    var pixelDensity = 10;
    var dataUri;
    canvas.width = width * pixelDensity;
    canvas.height = height * pixelDensity;
    img.onload = function () {
      context.drawImage(
        img, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      try {
        dataUri = canvas.toDataURL('image/png');
        // console.log("dataUri")
        // console.log(dataUri)
        // setest(dataUri)
      } catch (err) {
        console.warn('Error converting the workspace svg to a png');
      }
    };
    img.src = data;
    // setest(data)
   return data;
  }

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
    clone.removeAttribute('transform');

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.appendChild(clone);
    svg.setAttribute('viewBox',
      x + ' ' + y + ' ' + width + ' ' + height);

    svg.setAttribute('class', 'blocklySvg ' +
      (workspace.options.renderer || 'geras') + '-renderer ' +
      (workspace.getTheme ? workspace.getTheme().name + '-theme' : ''));
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute("style", 'background-color: transparent');

    var css = [].slice.call(document.head.querySelectorAll('style'))
      .filter(function (el) {
        return /\.blocklySvg/.test(el.innerText) ||
          (el.id.indexOf('blockly-') === 0);
      }).map(function (el) {
        return el.innerText;
      }).join('\n');
    var style = document.createElement('style');
    style.innerHTML = css + '\n' + customCss;
    svg.insertBefore(style, svg.firstChild);

    var svgAsXML = (new XMLSerializer).serializeToString(svg);
    svgAsXML = svgAsXML.replace(/&nbsp/g, '&#160');
    var data = 'data:image/svg+xml,' + encodeURIComponent(svgAsXML);

    return svgToPng_(data, width, height);

  }


  const exportImageAsPNG = () => {
    if (primaryWorkspace.current != undefined) {
      let file = workspaceToSvg_(primaryWorkspace.current, "");
      // console.log(file)
      return file;
    }
    else {
      console.log("false")
      return null
    }
  }
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

  useEffect(() => {
    // console.log(primaryWorkspace.current);
    if (primaryWorkspace.current != undefined) {
      primaryWorkspace.current.updateToolbox(toolbox.current);
      primaryWorkspace.current.getFlyout().hide();
    }
  }, [cnt]);

  useEffect(() => {
    if (!props.codeCheck) {
      if (primaryWorkspace.current != undefined) {
        props.writeTacticJsonCode(Blockly.serialization.workspaces.save(primaryWorkspace.current));
        props.writeTacticPythonCode(pythonGenerator.workspaceToCode(primaryWorkspace.current));
        props.writeTacticImg(exportImageAsPNG);
      }
      props.setCodeCheckTrue();
      console.log(props.codeCheck);
      console.log("codeCheck low component");
    }
  }, [props.codeCheck]);

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    if (primaryWorkspace.current === undefined) {
      primaryWorkspace.current = Blockly.inject(
        blocklyDiv.current,
        //  { toolbox }
        {
          toolbox: toolbox.current,
          // ...rest
        }
      );
    }
    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(initialXml), primaryWorkspace.current);
    }
    // console.log(array, cnt, toolbox.current, primaryWorkspace.current);
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <div>
      <button onClick={generateCode}>Convert</button>
      <button onClick={generateVar}>Generate</button>
      <button onClick={reset}>reset</button>
      <button onClick={save}>save</button>
      <button onClick={load}>load</button>
      <button onClick={() => exportImageAsPNG()}>이미지</button>
      {/* <div style={{height:"100px"}}>
        파일출력 테스트
        {test!==undefined ? <img src={test}/>:<></>}
      </div> */}
      <div ref={blocklyDiv} id="blocklyDiv" />
      {/* <div id='blocklyBlockCanvas'></div> */}
      <div style={{ display: "none" }} ref={toolbox}>
        <Category name="Logic" categorystyle="logic_category" >
          <Block type="controls_if" />
          <Block type="controls_ifelse" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="logic_boolean" />
          {/* <Block type="logic_ternary" /> */}
        </Category>

        <Category name="Loops" categorystyle="loop_category">
          <Block type="controls_repeat_ext" />
          <Block type="controls_whileUntil" />
          <Block type="controls_for" />
          <Block type="controls_forEach" />
          {/* <Block type="controls_flow_statements" /> */}
        </Category>

        <Category name="Math" categorystyle="math_category">
          <Block type="math_number" />
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

        <Category name="Lists" categorystyle="list_category">
          <Block type="lists_create_with" />
          <Block type="lists_repeat" />
          <Block type="lists_length" />
          <Block type="lists_isEmpty" />
          <Block type="lists_indexOf" />
          {/* <Block type="lists_getIndex" />
          <Block type="lists_setIndex" />
          <Block type="lists_getSublist" />
          <Block type="lists_split" />
          <Block type="lists_sort" />
          <Block type="lists_reverse" /> */}
        </Category>

        {/* <Category name="Functions" categorystyle="procedure_category" custom="PROCEDURE"></Category> */}

        <Category name="Trading" colour="300">
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

        <Category name="Variables" colour="360">
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
        </Category>
        {/* <Category name="Custom" colour="#832626">
          {array.map((item, index) => {
            return <Block key={index} type={item} />;
          })}
        </Category> */}
      </div>
    </div>
  );
}

export default BlocklyComponent;
