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
                wrapper:['frField'],
                viewWrapper:['frViewField']
            };
        }
    ]);
})(window.angular);
;(function(ng, _) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
  module.run([
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
        ]);

})(window.angular, window._);;angular.module('defaultFields').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/tinkText.html',
    "<div class=fr-field-state-read-wrapper data-ng-show=!field.state.editMode> {{ngModelInit}} {{field.to.unit}}\n" +
    "<a data-ng-click=field.toggleEditMode() data-ng-if=field.state.showEditButton href=\"\">wijzigen</a> </div> <div class=fr-field-state-write-wrapper data-ng-show=field.state.editMode> <div data-ng-class=\"{'fr-field-input-group': field.to.unit}\"> <input fr-validation validation=field.validation id=\"{{ field.attrs.id }}\" name=\"{{ field.attrs.name }}\" class=fr-control data-ng-model=ngModel placeholder=\"{{ field.attrs.placeholder }}\" data-ng-disabled=\"field.state.disabled\">\n" +
    "<span ng-if=field.to.unit class=fr-field-unit ng-bind-html=field.to.unit></span> </div> <a href=\"\" ng-click=field.toggleEditMode() data-ng-if=field.state.showEditButton>annuleren</a> </div>"
  );


  $templateCache.put('templates/tinkWrapper.html',
    "<div class=form-group> <label data-ng-show=\"field.to.label.length > 0 && field.to.displayLabel\" data-ng-class=\"{required: field.validation.required != undefined && field.validation.required}\" for=\"{{ field.attrs.id }}\">{{field.to.label}}</label> <span class=fr-toggle-extraInfo data-ng-if=\"field.to.extraInfo.length > 0\"> <a data-ng-click=\"options.state.extraInfoCollapsed = !options.state.extraInfoCollapsed\"> {{ options.state.extraInfoCollapsed ? 'Hulp nodig?' : 'Sluiten' }} </a> </span> <fr-transclude></fr-transclude> <span class=help-block>A block of help text that breaks onto a new line and may extend beyond one line. Tip: use <code>.help-block</code>.</span> </div> <div fr-messages=field.validation.error></div> <small data-ng-show=\"field.to.shortDescription.length > 0 && field.state.editMode\" data-ng-bind=field.to.shortDescription></small> <div class=fr-extraInfo data-ng-show=\"field.to.extraInfo.length > 0 && !options.state.extraInfoCollapsed\" data-ng-bind-html=field.to.extraInfo></div>"
  );

}]);
