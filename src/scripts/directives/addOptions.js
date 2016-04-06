(function(ng) {
    'use strict';
  var module;
  try {
    module = ng.module('defaultFields');
  } catch (e) {
    module = ng.module('defaultFields', ['formRenderer.form']);
  }
    module.directive('addOptions', [
        function addOptionsDirective() {
            return {
                restrict:'E',
                templateUrl:'addOptionsTemplate.html',
                require:'ngModel',
                controllerAs:'ctrl',
                scope:{
                  ngModel:'=',
                  rerender:'&'
                },
                link:function($scope,$element,$attr){                    
                },
                controller:["$scope",function($scope){
                   this.addOption= function(){
                      $scope.ngModel.push({key:'',label:''});
                   }   
                }]
            };
        }
    ]);
})(window.angular);
