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
// Blockly.Blocks["call_function"] = {
//   init: function () {
//     this.appendValueInput("ITEM").setCheck(null);
//     this.appendDummyInput().appendField("넣어서");
//     this.appendValueInput("NAME").setCheck(null);
//     this.appendDummyInput().appendField("실행");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };


//------------------------------------------------------------

Blockly.Blocks["sell"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(['count', 'Number']);
    this.appendDummyInput().appendField("주 만큼 매도하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["buy"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(['count', 'Number']);
    this.appendDummyInput().appendField("주 만큼 매수하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["stay"] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("유지하기"), "STAY");
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// ----------------------

Blockly.Blocks["minmaxavg_select"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["최고", "max"],
        ["최저", "min"],
        ["평균", "avg"],
        ["RSI", "rsi"],
      ]),
      "FIELDNAME"
    );
    this.setOutput(true, 'indicators');
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["ochlv_value"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["시가", "2"],
        ["고가", "3"],
        ["저가", "4"],
        ["종가", "5"],
        ["거래량", "volume"],
      ]),
      "FIELDNAME"
    );
    this.setOutput(true, 'ochlv');
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//최근 n일의 [시고저종]의 [최대최소평균rsi]
Blockly.Blocks["calculate_scope_data"] = {
  init: function () {
    this.appendValueInput("SCOPE").setCheck('scope');
    this.appendDummyInput().appendField("중 ");
    this.appendValueInput("OCHL").setCheck('ochlv');
    this.appendDummyInput().appendField("의 ");
    this.appendValueInput("HLA").setCheck('indicators');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//최근 n일
Blockly.Blocks["date_scope"] = {
  init: function () {
    var validator = function (newValue) {
      if (newValue > 100) newValue = 100;
      return newValue;
    };
    this.appendDummyInput()
      .appendField("최근 ")
      .appendField(new Blockly.FieldTextInput("1", validator), "DATE")
      .appendField("일 ");
    this.setOutput(true, 'scope');
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
//최근 주기의 n번째 까지
Blockly.Blocks["term_scope"] = {
  init: function () {
    var validator = function (newValue) {
      if (newValue > 100) newValue = 100;
      return newValue;
    };
    this.appendDummyInput()
      .appendField("최근 주기의 ")
      .appendField(new Blockly.FieldTextInput("1", validator), "DATE")
      .appendField("번째 까지 ");
    this.setOutput(true, 'scope');
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["cur_data"] = {
  init: function () {
    this.appendValueInput("OCHL")
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable("현재 날짜의"), "OCHL");
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//현재 보유량의 %
Blockly.Blocks["cnt_per_reserve"] = {
  init: function () {
    this.appendDummyInput().appendField("현재 보유량의 ");
    this.appendValueInput("NAME").setCheck("Number");
    this.appendDummyInput().appendField("%");
    this.setInputsInline(true);
    this.setOutput(true, 'count');
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
//현재 자산의 %
Blockly.Blocks["cnt_per_asset"] = {
  init: function () {
    this.appendDummyInput().appendField("현재 자산의 ");
    this.appendValueInput("NAME").setCheck("Number");
    this.appendDummyInput().appendField("%");
    this.setInputsInline(true);
    this.setOutput(true, 'count');
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};


// //once_volume
// Blockly.Blocks["once_volume"] = {
//   init: function () {
//     this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
//     this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("번째 거래량"), "NAME");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// //once_open
// Blockly.Blocks["once_open"] = {
//   init: function () {
//     this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
//     this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("n번째 시가"), "NAME");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };
// //once_close
// Blockly.Blocks["once_close"] = {
//   init: function () {
//     this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
//     this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("번째 종가"), "NAME");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };
// //once_high
// Blockly.Blocks["once_high"] = {
//   init: function () {
//     this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
//     this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("번째 고가"), "NAME");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };
// //once_low
// Blockly.Blocks["once_low"] = {
//   init: function () {
//     this.appendValueInput("NAME").setCheck("Number").appendField("data의 ");
//     this.appendDummyInput().appendField(new Blockly.FieldLabelSerializable("번째 저가"), "NAME");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// pandas_diff - 이름만 바뀜
// Blockly.Blocks["pandas_diff"] = {
//   init: function () {
//     this.appendValueInput("ITEM").setCheck(null);
//     this.appendDummyInput().appendField("넣어서");
//     this.appendValueInput("NAME").setCheck(null);
//     this.appendDummyInput().appendField("실행");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

//rsi 드롭다운 지표로 추가
// Blockly.Blocks["calculate_rsi"] = {
//   init: function () {
//     var validator = function (newValue) {
//       if (newValue > 100) newValue = 100;
//       return newValue;
//     };

//     this.appendDummyInput()
//       .appendField("[RSI] ")
//       .appendField(new Blockly.FieldTextInput("1", validator), "DATE")
//       .appendField("일 ");
//     this.appendValueInput("OCHL").setCheck(null);
//     this.appendDummyInput().appendField("의 rsi 지표");
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };
