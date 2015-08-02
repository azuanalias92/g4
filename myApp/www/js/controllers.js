angular.module('starter.controllers', [])



 .controller('MainController', [ '$scope', function($scope) {
        $scope.toggleMenu = function() {
            $scope.sideMenuController.toggleLeft();
        }
    }])

    .controller('EntryPageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Entry Page';

        $scope.signIn = function() {
            $state.go('main.home');
        }
    }])

    .controller('HomePageController', [ '$scope', '$state', function($scope, $state) {
        $scope.navTitle = 'Home Page';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])


