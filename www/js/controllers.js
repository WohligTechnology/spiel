angular.module('starter.controllers', [])

  .controller('LoginCtrl', function ($scope) {})
  .controller('VerificationCtrl', function ($scope) {})
  .controller('LeaderboardCtrl', function ($scope) {
    $scope.userlist = [{
        firstname: 'Bhargav',
        lastname: 'Purohit',
        rating: 3,
        currentLevel: "Fresher"
      },
      {
        firstname: 'Ashish',
        lastname: 'Zanwar',
        rating: 4,
        currentLevel: "Full Stack"
      }
    ];
  })
  .controller('ProfileCtrl', function ($scope) {})
  .controller('DesignationCtrl', function ($scope) {})
  .controller('NotificationCtrl', function ($scope) {})

;
