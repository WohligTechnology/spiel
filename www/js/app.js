// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.backButton.icon('ion-ios-arrow-left');
    $ionicConfigProvider.backButton.text('');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: "LoginCtrl"
      })
      .state('verification', {
        url: '/verification',
        templateUrl: 'templates/verification.html',
        controller: "VerificationCtrl"
      })

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.leaderboard', {
        url: '/leaderboard',
        views: {
          'tab-leaderboard': {
            templateUrl: 'templates/tab-leaderboard.html',
            controller: 'LeaderboardCtrl'
          }
        }
      })

      .state('tab.profile', {
        url: '/profile/:id',
        views: {
          'tab-profile': {
            templateUrl: 'templates/tab-profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })
      .state('tab.designation', {
        url: '/designation',
        views: {
          'tab-designation': {
            templateUrl: 'templates/tab-designation.html',
            controller: 'DesignationCtrl'
          }
        }
      })
      .state('tab.designation-detail', {
        url: '/designation/:id',
        views: {
          'tab-designation': {
            templateUrl: 'templates/tab-designation-detail.html',
            controller: 'DesignationDetailCtrl'
          }
        }
      })

      .state('tab.notification', {
        url: '/notification',
        views: {
          'tab-notification': {
            templateUrl: 'templates/tab-notification.html',
            controller: 'NotificationCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/leaderboard');

  });
