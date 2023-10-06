/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import Blockly from 'blockly/core';
import { Order } from "blockly/javascript";
import {pythonGenerator} from 'blockly/python';
import { atom } from 'recoil';

//  //함수 호출
//  pythonGenerator.forBlock['call_function'] = function(block:any, generator:any) {
//   var value_item = generator.valueToCode(block, 'ITEM', Order.NONE).toString();
//   var value_name = generator.valueToCode(block, 'NAME', Order.NONE).toString();
//   // var value_item = block.getFieldValue('ITEM');
//   // var value_name = block.getFieldValue('NAME');
//   var code = value_name+'('+value_item+')';
//   return [code, Order.NONE];
// };

// // ["Open", "Close", "High", "Low", "Volume"]
// //once_open
// pythonGenerator.forBlock['once_open'] = function(block:any, generator:any) {
//   var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
//   var field_name = block.getFieldValue('NAME');
//   var code = 'data['+value_name+'][0]';
//   return [code, Order.NONE];
// };

// //once_close
// pythonGenerator.forBlock['once_close'] = function(block:any, generator:any) {
//   var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
//   var field_name = block.getFieldValue('NAME');
//   var code = 'data['+value_name+'][1]';
//   return [code, Order.NONE];
// };

// //once_high
// pythonGenerator.forBlock['once_high'] = function(block:any, generator:any) {
//   var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
//   var field_name = block.getFieldValue('NAME');
//   var code = 'data['+value_name+'][2]';
//   return [code, Order.NONE];
// };

// //once_low
// pythonGenerator.forBlock['once_low'] = function(block:any, generator:any) {
//   var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
//   var field_name = block.getFieldValue('NAME');
//   var code = 'data['+value_name+'][3]';
//   return [code, Order.NONE];
// };

// //once_volume
// pythonGenerator.forBlock['once_volume'] = function(block:any, generator:any) {
//   var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
//   var field_name = block.getFieldValue('NAME');
//   var code = 'data['+value_name+'][4]';
//   return [code, Order.NONE];
// };

// pythonGenerator.forBlock['sell'] = function(block:any, generator:any) {
//   var field_name = block.getFieldValue('NAME');
//   // TODO: Assemble python into code variable.
//   var code = 'sell()\n';
//   return code;
// };

pythonGenerator.forBlock['sell'] = function(block:any, generator:any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var code = 'sell('+value_name+')\n';
  return code;
};


pythonGenerator.forBlock['buy'] = function(block:any, generator:any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var code = 'buy('+value_name+')\n';
  return code;
};


pythonGenerator.forBlock['stay'] = function(block:any, generator:any) {
  var field_name = block.getFieldValue('NAME');
  var code = 'stay()\n';
  return code;
};


pythonGenerator.forBlock['minmaxavg_select'] = function(block:any, generator:any) {
  var field_name = block.getFieldValue('FIELDNAME');
  // var value_name = generator.valueToCode(block, 'FIELDNAME', Order.NONE);
  var code = field_name;
  return [code, Order.ATOMIC];
};
pythonGenerator.forBlock['ochlv_value'] = function(block:any, generator:any) {
  var field_name = block.getFieldValue('FIELDNAME');
  // var value_name = generator.valueToCode(block, 'FIELDNAME', Order.NONE);
  var code = field_name;
  return [code, Order.ATOMIC];
};

pythonGenerator.forBlock['calculate_scope_data'] = function(block:any, generator:any) {
  // const MAX_LENGTH = 100;
  // var value_date = generator.valueToCode(block, 'DATE', Order.NONE).toString();
  // var value_date =  block.getFieldValue('DATE');
  var value_scope = generator.valueToCode(block, 'SCOPE', Order.NONE).toString();
  var value_ochl = generator.valueToCode(block, 'OCHL', Order.NONE).toString();
  var value_hla = generator.valueToCode(block, 'HLA', Order.NONE).toString();
  // TODO: Assemble python into code variable.
  var code = 'get_recent_indicators('+value_scope+', '+value_ochl+', '+value_hla+')';
  return [code, Order.ATOMIC];
};


pythonGenerator.forBlock['date_scope'] = function(block:any, generator:any) {
  // const MAX_LENGTH = 100;
  // var value_date = generator.valueToCode(block, 'DATE', Order.NONE).toString();
  var value_date =  block.getFieldValue('DATE');
  var code = '\"date\", '+value_date;
  return [code, Order.NONE];
};

pythonGenerator.forBlock['term_scope'] = function(block:any, generator:any) {
  // const MAX_LENGTH = 100;
  // var value_date = generator.valueToCode(block, 'DATE', Order.NONE).toString();
  var value_date =  block.getFieldValue('DATE');
  var code = '\"term\", '+value_date;
  return [code, Order.NONE];
};


pythonGenerator.forBlock['cur_data'] = function(block:any, generator:any) {
  var value_name = generator.valueToCode(block, 'OCHL', Order.NONE).toString();
  // TODO: Assemble python into code variable.
  var code = 'cur_data('+value_name+')';
  return [code, Order.NONE];
};

pythonGenerator.forBlock['now_cnt'] = function(block:any, generator:any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.NONE).toString();
  // TODO: Assemble python into code variable.
  var code = 'now_repeat_cnt';
  return [code, Order.NONE];
};

//현재 자산의 %
pythonGenerator.forBlock['cnt_per_asset'] = function(block:any, generator:any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.NONE).toString();
  // TODO: Assemble python into code variable.
  var code = 'asset('+value_name+')';
  return [code, Order.NONE];
};


//현재 보유량의 %
pythonGenerator.forBlock['cnt_per_reserve'] = function(block:any, generator:any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.NONE).toString();
  // TODO: Assemble python into code variable.
  var code = 'reserve('+value_name+')';
  return [code, Order.NONE];
};

//past_day_data[n][m]
pythonGenerator.forBlock['specific_date_data'] = function(block:any, generator:any) {
  var value_ochl = generator.valueToCode(block, 'OCHL', Order.NONE).toString();
  var value_date =  block.getFieldValue('DATE');
  // TODO: Assemble python into code variable.
  var code = 'past_day_data[-'+value_date+']['+value_ochl+']';
  return [code, Order.NONE];
};

//past_data[n][m]
pythonGenerator.forBlock['specific_term_data'] = function(block:any, generator:any) {
  var value_ochl = generator.valueToCode(block, 'OCHL', Order.NONE).toString();
  var value_date =  block.getFieldValue('Number');
  // TODO: Assemble python into code variable.
  var code = 'past_data[-'+value_date+']['+value_ochl+']';
  return [code, Order.NONE];
};

//past_data[n][m]
pythonGenerator.forBlock['math_percent'] = function(block:any, generator:any) {
  var percent_value =  block.getFieldValue('percent');
  var number_value = generator.valueToCode(block, 'Number', Order.NONE).toString();
  // TODO: Assemble python into code variable.
  var code = '('+number_value+'*'+percent_value+'/100)';
  return [code, Order.NONE];
};

//rsi 드롭다운 지표로 추가
// pythonGenerator.forBlock['calculate_rsi'] = function(block:any, generator:any) {
//   var value_date =  block.getFieldValue('DATE');
//   var value_ochl = generator.valueToCode(block, 'OCHL', Order.NONE).toString();
//   // TODO: Assemble python into code variable.
//   var code = 'rsi('+value_date+'+i, \"'+value_ochl+'\")';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Order.NONE];
// };