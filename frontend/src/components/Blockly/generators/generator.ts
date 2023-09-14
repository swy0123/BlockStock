/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import Blockly from 'blockly/core';
import { Order } from "blockly/javascript";
import {pythonGenerator} from 'blockly/python';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!

 //함수 호출
 pythonGenerator.forBlock['call_function'] = function(block, generator) {
  var value_item = generator.valueToCode(block, 'ITEM', Order.NONE).toString();
  var value_name = generator.valueToCode(block, 'NAME', Order.NONE).toString();
  // var value_item = block.getFieldValue('ITEM');
  // var value_name = block.getFieldValue('NAME');
  // TODO: Assemble python into code variable.
  var code = value_name+'('+value_item+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

// ["Open", "Close", "High", "Low", "Volume"]
//once_open
pythonGenerator.forBlock['once_open'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var field_name = block.getFieldValue('NAME');
  // TODO: Assemble python into code variable.
  var code = 'data['+value_name+'][0]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

//once_close
pythonGenerator.forBlock['once_close'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var field_name = block.getFieldValue('NAME');
  // TODO: Assemble python into code variable.
  var code = 'data['+value_name+'][1]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

//once_high
pythonGenerator.forBlock['once_high'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var field_name = block.getFieldValue('NAME');
  // TODO: Assemble python into code variable.
  var code = 'data['+value_name+'][2]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

//once_low
pythonGenerator.forBlock['once_low'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var field_name = block.getFieldValue('NAME');
  // TODO: Assemble python into code variable.
  var code = 'data['+value_name+'][3]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

//once_volume
pythonGenerator.forBlock['once_volume'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var field_name = block.getFieldValue('NAME');
  // TODO: Assemble python into code variable.
  var code = 'data['+value_name+'][4]';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

// pythonGenerator.forBlock['sell'] = function(block, generator) {
//   var field_name = block.getFieldValue('NAME');
//   // TODO: Assemble python into code variable.
//   var code = 'sell()\n';
//   return code;
// };

pythonGenerator.forBlock['sell'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 'sell('+value_name+')\n';
  return code;
};


pythonGenerator.forBlock['buy'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 'buy('+value_name+')\n';
  return code;
};


pythonGenerator.forBlock['stay'] = function(block, generator) {
  var field_name = block.getFieldValue('NAME');
  // TODO: Assemble python into code variable.
  var code = 'stay()\n';
  return code;
};


pythonGenerator.forBlock['minmaxavg_select'] = function(block, generator) {
  var field_name = block.getFieldValue('FIELDNAME');
  // var value_name = generator.valueToCode(block, 'FIELDNAME', Order.NONE);
  // TODO: Assemble python into code variable.
  var code = field_name;
  return [code, Order.NONE];
};
pythonGenerator.forBlock['ochlv_value'] = function(block, generator) {
  var field_name = block.getFieldValue('FIELDNAME');
  // var value_name = generator.valueToCode(block, 'FIELDNAME', Order.NONE);
  // TODO: Assemble python into code variable.
  var code = field_name;
  return [code, Order.NONE];
};

pythonGenerator.forBlock['calculate_data'] = function(block, generator) {
  // const MAX_LENGTH = 100;
  // var value_date = generator.valueToCode(block, 'DATE', Order.NONE).toString();
  var value_date =  block.getFieldValue('DATE');
  // if (value_date > MAX_LENGTH) {
  //   value_date = MAX_LENGTH;
  // }
  // value_date = value_date.toString();
  var value_ochl = generator.valueToCode(block, 'OCHL', Order.NONE).toString();
  var value_hla = generator.valueToCode(block, 'HLA', Order.NONE).toString();
  // TODO: Assemble python into code variable.
  var code = 'func('+value_date+'+i, \"'+value_ochl+'\", \"'+value_hla+'\")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

pythonGenerator.forBlock['cur_data'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'OCHL', Order.NONE).toString();
  // TODO: Assemble python into code variable.
  var code = 'curData(i, \"'+value_name+"\")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};