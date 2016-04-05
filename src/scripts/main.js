(function(ng, _) {
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
  module.run([
      'frFieldConfig',
      'defaultFieldTypes',
      function run(frFieldConfig, defaultFieldTypes) {
          // initialize default form types and wrappers
          frFieldConfig.setType(defaultFieldTypes.get());
          //frFieldConfig.setTempWrapper(frWrappers.get());

      }
  ]);


    'use strict';
    module.service('defaultFieldTypes', [
        'fieldTypeText',
        function frFieldTypesService(fieldTypeText) {

            var types = [];
            var thisArguments = arguments;
            
             /**
              * @function
              * @name  initializeTypes ------------------------------
              * @description - initialize default field types
              * @return {Array} - all field types 
              */
            function initializeTypes() {
                _.forEach(thisArguments, function(type, index) {
                    // first item === frFieldConfig
                    
                    types.push(type);
                });
                return types;
            }

            return {
                get: initializeTypes
            };
        }
    ]);
})(window.angular, window._);