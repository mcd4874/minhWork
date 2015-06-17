/**
 * Created by minh on 6/16/2015.
 */
/** support for just product*/
(function(){
    var app=angular.module('store-product',[]);

    //create custume element directive to load information from a separate html into our main html
    app.directive('productDescription',function(){
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        } ;

    });

    //create custome attribute directive to load information
    app.directive('productSpecs',function(){
        return {
            restrict:'A',
            templateUrl:"product-specs.html"
        }

    });

    //create custome element directive to load information
    app.directive('productReview',function(){
        return {
            restrict:'E',
            templateUrl:"product-review.html"
        } ;
    });

    //create custome element directive with ng-controller to load information
    app.directive('productPane',function(){
        return {
            restrict:'E',
            templateUrl:'product-pane.html',
            controller:function(){
                this.tab=1;
                this.selectTab=function(Tab){
                    this.tab=Tab;
                };
                this.isTab=function(checkTab){
                    return this.tab===checkTab;
                };
            },
            controllerAs:'pane'
        }

    });
})();