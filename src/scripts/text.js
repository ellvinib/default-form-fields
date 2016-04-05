(function(ng) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
    module.service('fieldTypeText', [
        function frFieldTypeTextService() {
            return {
                name: "tinkText",
                templateUrl: 'templates/tinkText.html',
                wrapper:['tinkFieldWrapper'],
                viewWrapper:['frViewField'],
                optionTemplate:'templates/options/tinkText.html'
            };
        }
    ]);
})(window.angular);
