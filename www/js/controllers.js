angular.module('starter.controllers', [])

  .controller('LoginCtrl', function ($scope) {})
  .controller('VerificationCtrl', function ($scope) {})
  .controller('LeaderboardCtrl', function ($scope) {
    $scope.userlist = [{
        firstname: 'Bhargav',
        lastname: 'Purohit',
        currentLevel: "Fresher"
      },
      {
        firstname: 'Ashish',
        lastname: 'Zanwar',
        currentLevel: "Full Stack"
      },
      {
        firstname: 'Sanket',
        lastname: 'Deshmukh',
        currentLevel: "Full Stack"
      }
    ];
  })
  .controller('ProfileCtrl', function ($scope) {
    $scope.user = {
      firstName: "Sanket",
      lastName: "Deshmukh",
      currentLevel: "Full Stack Developer"
    };
  })
  .controller('DesignationCtrl', function ($scope) {
    $scope.designations = [{
      name: "Beginner"
    }, {
      name: "Full Stack Developer"
    }, {
      name: "Backend Developer"
    }, {
      name: "Frontend Developer"
    }, {
      name: "Frontend Expert"
    }, {
      name: "Backend Expert"
    }];
  })
  .controller('DesignationDetailCtrl', function ($scope) {

  })
  .controller('NotificationCtrl', function ($scope) {
    $scope.notifications = [{
      text: "Your skill for Git is approved"
    }, {
      text: "Your skill for Backend UI is approved"
    }, {
      text: "Your skill for Frontend UI is approved"
    }, {
      text: "Your skill for Git Publising is approved"
    }];
  })

;
