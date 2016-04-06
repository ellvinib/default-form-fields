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
                templateUrl:'templates/addOptionsTemplate.html',
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
                      /* if(!$scope.ngModel){
                           $scope.ngModel = [];
                       }*/
                      $scope.ngModel.push({key:'',label:''});
                   }   
                }]
            };
        }
    ]);
})(window.angular);
