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
  // const exportImage = () => {
  //   const blocklyBlockCanvas = document.querySelector(".blocklyBlockCanvas");
  //   console.log(blocklyBlockCanvas);
  //   let file = null;
  //   if (blocklyBlockCanvas) {
  //     // blocklyCursor 요소가 존재하는 경우
  //     domtoimage
  //       .toBlob(blocklyBlockCanvas)
  //       // .then((blob) => {
  //       //   file = new File([blob], "image.png", { type: "image/png" });
  //       //   console.log(file);
  //       // })
  //       .then(function (blob) {
  //         FileSaver.saveAs(blob, "blocklyCursor.png");
  //       })
  //       .catch(function (error) {
  //         console.error("이미지 캡처 중 오류 발생:", error);
  //       });
  //   } else {
  //     console.log('클래스 "blocklyCursor"를 가진 SVG 요소가 존재하지 않습니다.');
  //   }
  //   return file;
  // };

  //블록코드만 svg로 다운
  // const exportImage = () => {
  //   const blocklyBlockCanvas = document.querySelector(".blocklyBlockCanvas");

  //   console.log(blocklyBlockCanvas);

  //   let blob = null;
  //   if (blocklyBlockCanvas) {
  //     const clonedSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  //     clonedSVG.appendChild(blocklyBlockCanvas.cloneNode(true));
  //     const svgXML = new XMLSerializer().serializeToString(clonedSVG);
  //     // Blob 생성
  //     blob = new Blob([svgXML], { type: "image/svg+xml" });
  //     const url = URL.createObjectURL(blob);
  //     const img = document.createElement("img");
  //     img.src = url;
  //     document.body.appendChild(img);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "myImage.svg"; // 다운로드될 파일 이름
  //     a.style.display = "none"; // 화면에 표시되지 않도록 함
  //     document.body.appendChild(a);
  //     a.click();
  //     URL.revokeObjectURL(url);
  //   } else {
  //     console.log('클래스 "blocklyCursor"를 가진 SVG 요소가 존재하지 않습니다.');
  //   }
  //   console.log(blob)
  //   return blob;
  // };

  const exportImage = () => {
    const blocklyBlockCanvas = document.querySelector(".blocklyBlockCanvas");

    console.log(blocklyBlockCanvas);

    let file = null;
    if (blocklyBlockCanvas) {
      const clonedSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      clonedSVG.appendChild(blocklyBlockCanvas.cloneNode(true));
      const svgXML = new XMLSerializer().serializeToString(clonedSVG);

      // var parser = new DOMParser();
      // var svgDoc = parser.parseFromString(svgXML, "image/svg+xml");
      // var svgElement = svgDoc.documentElement;
      // // SVG 요소의 경계 상자 가져오기
      // var bbox = svgElement.getBBox();

      // // 너비와 높이 가져오기
      // var originalWidth = bbox.width;
      // var originalHeight = bbox.height;

      // console.log("원래 너비: " + originalWidth);
      // console.log("원래 높이: " + originalHeight);

      let totalWidth = 0;
      let totalHeight = 0;
      
      blocklyBlockCanvas.querySelectorAll('rect, circle').forEach((element) => {
        totalWidth += element.getBBox().width;
        totalHeight += element.getBBox().height;
      });

      console.log(`그룹의 가로 크기: ${totalWidth}`);
      console.log(`그룹의 세로 크기: ${totalHeight}`);

      // Blob 생성
      let blob = new Blob([svgXML], { type: "image/svg+xml" });

      convertBlobToImage(blob, (image) => {
        let canvas = document.createElement("canvas");
        canvas.width = image.width * 2;
        canvas.height = image.height * 2;
        console.log("사진 너비: " + canvas.width);
        console.log("사진 높이: " + canvas.height);
        let ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);

        // const url = URL.createObjectURL(blob);
        // const img = document.createElement("img");
        // img.src = url;
        // document.body.appendChild(img);
        // const a = document.createElement("a");

        // const imageWidth = img.width;
        // const imageHeight = img.height;

        // console.log(`이미지의 너비: ${imageWidth}px`);
        // console.log(`이미지의 높이: ${imageHeight}px`);

        // Canvas에서 PNG 이미지로 저장
        canvas.toBlob(function (pngBlob) {
          let url = URL.createObjectURL(pngBlob);

          // PNG 이미지를 다운로드할 수 있는 링크 생성
          let a = document.createElement("a");
          a.href = url;
          a.download = "image.png";
          a.click();
          console.log(a)
          // 더 이상 사용하지 않는 URL 객체 해제
          URL.revokeObjectURL(url);
        }, "image/png");
      });
    } else {
      console.log('클래스 "blocklyCursor"를 가진 SVG 요소가 존재하지 않습니다.');
    }
    console.log(file);
    return file;
  };

  const convertBlobToImage = (blob: Blob, callback: any) => {
    var img = new Image();
    img.onload = function () {
      callback(img);
    };
    img.src = URL.createObjectURL(blob);
    console.log(img);
  };

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
        props.writeTacticImg(exportImage);
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
      <button onClick={() => exportImage()}>이미지</button>
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
