(function(ng) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
    module.service('tinkDropdownField', [
        function frFieldTypeTextService() {
            return {
                name: "tinkDropdownField",
                label: 'Tink dropdown',
                templateUrl: 'templates/tinkDropDown.html',
                wrapper:['tinkFieldWrapper'],
                viewWrapper:['frViewField'],
                optionTemplate:'templates/options/tinkDropDown.html'
            };
        }
    ]);
})(window.angular);
