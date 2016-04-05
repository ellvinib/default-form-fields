(function(ng) {
    'use strict';
  var module;
  try {
    module = angular.module('defaultFields');
  } catch (e) {
    module = angular.module('defaultFields', ['formRenderer.form']);
  }
    module.service('fieldTypeText', [
        function frFieldTypeTextService() {
            return {
                name: "text",
                templateUrl: 'templates/text.html',
                //wrapper:['frField'],
                //viewWrapper:['frViewField']
            };
        }
    ]);
})(window.angular);
