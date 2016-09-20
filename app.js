/**
 * Created by fvalka on 20.09.2016.
 */
(function () {
    'use strict';

    angular.module('LunchCheck',[]).
        controller('LunchCheckController', LunchCheckController);

    // protects the code from minification
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.checkIfTooMuch = function () {
            var foodInApp = $scope.food;

            if(foodInApp === undefined || foodInApp == '') {
                $scope.message = 'Please enter data first';
                return;
            }

            var arrayOfFood = splitCsv(foodInApp);

            if(arrayOfFood.length > 3) {
                $scope.message = 'Too much!';
            } else {
                $scope.message = 'Enjoy!';
            }
        };

        function splitCsv(string) {
            return string.split(',');
        }

    };

})();