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
                label: 'Tink text',
                templateUrl: 'templates/tinkText.html',
                wrapper:['tinkFieldWrapper'],
                viewWrapper:['frViewField'],
                optionTemplate:'templates/options/tinkText.html'
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
  
  module.service('defaultFields', [function() {
      return{
          getFields:function(){
              return [
                  "fieldTypeText"
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

})(window.angular, window._);;angular.module('defaultFields').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/options/tinkText.html',
    " <div class=form-group> <label for=question>Question</label> <textarea ng-change=ctrl.rerender() ng-model-options=\"{ updateOn: 'blur' }\" id=question ng-model=field.field placeholder=question rows=2></textarea> </div>  <div class=form-group> <label for=placeholder>placeholder</label> <input ng-change=ctrl.rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.placeholder id=placeholder> </div>  <div class=form-group> <label for=description>Description</label> <textarea ng-change=ctrl.rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.shortDescription id=description placeholder=description rows=2></textarea> </div>  <div class=form-group> <label for=extraInfo>Extra information</label> <textarea ng-change=ctrl.rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=\" field.extraInfo\" id=extraInfo placeholder=extraInfo rows=2></textarea> </div>  <div class=checkbox> <input ng-change=ctrl.rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.shortDescription type=checkbox id=Required name=Required checked> <label for=Required>Required</label> </div>  <div class=form-group> <input ng-change=ctrl.rerender() ng-model-options=\"{ updateOn: 'blur' }\" ng-model=field.extraOptions.extraInfo id=extra name=extra> <label for=extra>extra</label> </div>"
  );


  $templateCache.put('templates/tinkText.html',
    "<div class=fr-field-state-read-wrapper data-ng-show=!field.state.editMode> {{ngModelInit}} {{field.to.unit}}\n" +
    "<a data-ng-click=field.toggleEditMode() data-ng-if=field.state.showEditButton href=\"\">wijzigen</a> </div> <div class=fr-field-state-write-wrapper data-ng-show=field.state.editMode> <div data-ng-class=\"{'fr-field-input-group': field.to.unit}\"> <input fr-validation validation=field.validation id=\"{{ field.attrs.id }}\" name=\"{{ field.attrs.name }}\" class=fr-control data-ng-model=ngModel placeholder=\"{{ field.attrs.placeholder }}\" data-ng-disabled=\"field.state.disabled\">\n" +
    "<span ng-if=field.to.unit class=fr-field-unit ng-bind-html=field.to.unit></span> </div> <a href=\"\" ng-click=field.toggleEditMode() data-ng-if=field.state.showEditButton>annuleren</a> </div>"
  );


  $templateCache.put('templates/tinkWrapper.html',
    "<div class=form-group> <label data-ng-show=\"field.to.label.length > 0 && field.to.displayLabel\" data-ng-class=\"{required: field.validation.required != undefined && field.validation.required}\" for=\"{{ field.attrs.id }}\">{{field.to.label}}</label> <span class=fr-toggle-extraInfo data-ng-if=\"field.to.extraInfo.length > 0\"> <a data-ng-click=\"options.state.extraInfoCollapsed = !options.state.extraInfoCollapsed\"> {{ options.state.extraInfoCollapsed ? 'Hulp nodig?' : 'Sluiten' }} </a> </span> <fr-transclude></fr-transclude> <span class=help-block>{{field.spec.extraOptions.extraInfo}}</span> </div> <div fr-messages=field.validation.error></div> <small data-ng-show=\"field.to.shortDescription.length > 0 && field.state.editMode\" data-ng-bind=field.to.shortDescription></small> <div class=fr-extraInfo data-ng-show=\"field.to.extraInfo.length > 0 && !options.state.extraInfoCollapsed\" data-ng-bind-html=field.to.extraInfo></div>"
  );

}]);
