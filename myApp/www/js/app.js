// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider)
{

 $stateProvider
            .state('index', {
                url : '/index',
                templateUrl : 'index.html',
                controller : 'EntryPageController'
            })

            .state('main', {
                url : '/main',
                templateUrl : 'mainContainer.html',
                abstract : true,
                controller : 'MainController'
            })

             .state('main.profile', {
                url: '/profile',
                views: {
                    'main': {
                        templateUrl: 'profile.html',
                        controller : 'HomePageController'
                    }
                }
            })
              .state('main.redeem', {
                url: '/redeem',
                views: {
                    'main': {
                        templateUrl: 'redeem.html',
                        controller : 'HomePageController'
                    }
                }
            })
            .state('main.chacomplete', {
                url: '/chacomplete',
                views: {
                    'main': {
                        templateUrl: 'chacomplete.html',
                        controller : 'HomePageController'
                    }
                }
            })
        .state('main.leaderboard', {
                url: '/leaderboard',
                views: {
                    'main': {
                        templateUrl: 'leaderboard.html',
                        controller : 'HomePageController'
                    }
                }
            })
            .state('main.home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'home.html',
                        controller : 'HomePageController'
                    }
                }
            })

          


  $urlRouterProvider.otherwise("/index");


 

  

  $stateProvider.state('sha',
  {
    url:'/sha',
    templateUrl: 'sha.html'
  })

$stateProvider.state('index2',
  {
    url:'/index2',
    templateUrl: 'index2.html'
  })



})




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
       $scope.tasks = [
  {title: 'Penang'},
  {title: 'Pay bills'},
  {title: 'Pay bills'},
  {title: 'Pay bills'},
  {title: 'Pay bills'},
  {title: 'Pay bills'},
  {title: 'Pay bills'},
  {title: 'Pay bills'},
  {title: 'Pay bills'}

  ]
        $scope.navTitle = 'Menu';

        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tap: function(e) {
                $scope.toggleMenu();
            }
        }];
    }])



