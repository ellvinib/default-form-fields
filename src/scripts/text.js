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
                name: "textShort",
                templateUrl: 'templates/text.html',
                //wrapper:['frField'],
                //viewWrapper:['frViewField']
            };
        }
    ]);
})(window.angular);
