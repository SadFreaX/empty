"use strict";
var data;

$.views.converters({
  toString: function(val) {
    return val ? "male" : "300";
  },
  toBool: function(val) {
    return val === "male";
  }
});

var DataManager = {
  buffer: {},
  defaultData: {
    editMode: true,
    counters: { chechbox: 1, radio: 1 },
    steps: [new InitValues.Step()]
  },
  load: function(key) {
    data = JSON.parse(localStorage.getItem(key));
    if (data === null) data = DataManager.defaultData;
    $.link.step("#result", data, handlers);
  },
  save: function(key) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  clear: function(key) {
    localStorage.removeItem(key);
  },
  reset: function() {
    data = JSON.parse(JSON.stringify(DataManager.defaultData));
    $.link.step("#result", data, handlers);
  },
  removeField: function(stepNum) {
    $.observable(data.steps[stepNum].fields).remove(0, 1);
  },
  insertField: function(stepNum, arrayToInsert) {
    $.observable(data.steps[stepNum].fields).insert(arrayToInsert);
  },
  insertFieldFirst: function(stepNum, arrayToInsert) {
    $.observable(data.steps[stepNum].fields).insert(0, arrayToInsert);
  },
  insertOption: function(stepNum, fieldNum, arrayToInsert) {
    $.observable(data.steps[stepNum].fields[fieldNum].options).insert(
      arrayToInsert
    );
  },
  removeStep: function(stepNum) {
    $.observable(data.steps).remove(stepNum);
  },
  insertStep: function(position, arrayToInsert) {
    $.observable(data.steps).insert(position, arrayToInsert);
  },
  insertStepLast: function(arrayToInsert) {
    $.observable(data.steps).insert(arrayToInsert);
  },
  setBuffer: function(id, value) {
    DataManager.buffer[id] = value;
  },
  getBuffer: function(id) {
    return DataManager.buffer[id];
  },
  clearBuffer: function(id) {
    delete DataManager.buffer[id];
  }
};

$(document).load(function() {});
