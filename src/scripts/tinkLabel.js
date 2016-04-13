(function(ng) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
    module.service('fieldTypeLabel', [
        function frLabelTypeTextService() {
            return {
                name: "tinkLabel",
                label: 'Tink label',
                templateUrl: 'templates/tinkLabel.html',
                wrapper:['frFieldWrapper'],
                viewWrapper:['frViewField'],
                optionTemplate:'templates/options/tinkLabel.html'
            };
        }
    ]);
})(window.angular);
