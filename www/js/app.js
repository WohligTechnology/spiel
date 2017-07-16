// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var adminUrl = "http://wohlig.io/api/";
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {


    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      window.open = cordova.InAppBrowser.open;
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

      .state('tab.profileDetail', {
        url: '/leaderboard-detail/:id',
        views: {
          'tab-leaderboard': {
            templateUrl: 'templates/profile-detail.html',
            controller: 'ProfileDetailCtrl'
          }
        }
      })
      .state('tab.profile', {
        url: '/profile',
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

  })
  .filter('designations', function () {
    // In the return function, we must pass in a single parameter which will be the data we will work on.
    // We have the ability to support multiple other parameters that can be passed into the filter optionally
    return function (input) {
      var sorted = _.sortBy(input, function (n) {
        return moment(n.timestamp).unix() * -1;
      });
      var names = _.map(sorted, "designation.name");
      return _.join(names, ", ");
      // Do filter work here
    };

  })
  .filter('dobShow', function () {
    // In the return function, we must pass in a single parameter which will be the data we will work on.
    // We have the ability to support multiple other parameters that can be passed into the filter optionally
    return function (input) {
      var output = moment(input).format("Do MMM");
      return output;
      // Do filter work here
    };

  })
  .filter('skillStatusIcon', function () {
    // In the return function, we must pass in a single parameter which will be the data we will work on.
    // We have the ability to support multiple other parameters that can be passed into the filter optionally
    return function (input, isSameUser) {
      var classArr = ["ion-ios-plus-outline positive",
        "ion-ios-checkmark-outline balanced",
        "ion-ios-glasses-outline royal",
        "ion-ios-close-outline stable"
      ];
      var num = 3;
      if (input == "Approved") {
        num = 1;
      } else if (input == "Pending" && isSameUser) {
        num = 2;
      } else if (isSameUser) {
        num = 0;
      }
      return classArr[num];
    };

  })



;
