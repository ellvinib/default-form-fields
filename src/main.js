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
                  "defaultFieldTypes"
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
  
 /*module.run([
      'frFieldConfig',
      'defaultFieldTypes',
      'defaultTinkWrappers',
      function run(frFieldConfig, defaultFieldTypes,defaultTinkWrappers) {
          // initialize default form types and wrappers
          frFieldConfig.setType(defaultFieldTypes.get());
          frFieldConfig.setTempWrapper(defaultTinkWrappers.get());
      }
  ]);
    module.service('defaultFieldTypes', [
        'fieldTypeText',
        function frFieldTypesService(fieldTypeText) {

            var types = [];
            var thisArguments = arguments;
            
           
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
        module.service('defaultTinkWrappers', [
            function frWrappersService() {

                function initializeWrappers() {
                    return [
                        {
                            name: 'tinkFieldWrapper',
                            templateUrl: 'templates/tinkWrapper.html',
                        }
                    ];
                }

                return {
                    get: initializeWrappers
                };
            }
        ]);*/

})(window.angular, window._);