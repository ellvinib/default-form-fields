(function(ng, _) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
  
  module.service('defaultFields', [function() {
      return{
          getFields:function(){
              return [
                  "fieldTypeText",
                  "tinkDropdownField",
                  "fieldTypeLabel"
              ]
          },
          getWrappers:function(){
              return [
                        {
                            name: 'tinkFieldWrapper',
                            templateUrl: 'templates/tinkWrapper.html',
                        }
              ]
          }
      }
  }])
})(window.angular, window._);