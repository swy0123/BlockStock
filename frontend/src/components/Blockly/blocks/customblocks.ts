/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";
import "../index";
import "../fields/BlocklyReactField";

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.

// 함수호출 문자
Blockly.Blocks["call_function"] = {
  init: function () {
    this.appendValueInput("ITEM").setCheck(null);
    this.appendDummyInput().appendField("넣어서");
    this.appendValueInput("NAME").setCheck(null);
    this.appendDummyInput().appendField("실행");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//once_volume
Blockly.Blocks["once_volume"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable("번째 거래량"),
      "NAME"
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//once_open
Blockly.Blocks["once_open"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable("n번째 시가"),
      "NAME"
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
//once_close
Blockly.Blocks["once_close"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable("번째 종가"),
      "NAME"
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
//once_high
Blockly.Blocks["once_high"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable("번째 고가"),
      "NAME"
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
//once_low
Blockly.Blocks["once_low"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
    this.appendDummyInput().appendField(
      new Blockly.FieldLabelSerializable("번째 저가"),
      "NAME"
    );
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};


// pandas_diff - 이름만 바뀜
Blockly.Blocks["pandas_diff"] = {
  init: function () {
    this.appendValueInput("ITEM").setCheck(null);
    this.appendDummyInput().appendField("넣어서");
    this.appendValueInput("NAME").setCheck(null);
    this.appendDummyInput().appendField("실행");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//------------------------------------------------------------

Blockly.Blocks['sell'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("주 만큼 매도하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['buy'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("주 만큼 매수하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("유지하기"), "STAY");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
