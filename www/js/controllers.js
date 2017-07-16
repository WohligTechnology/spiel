angular.module('starter.controllers', ['ionic'])

  .controller('LoginCtrl', function ($scope) {

    // var ref = cordova.InAppBrowser.open(adminurl + "user/googleLogin", "_blank", {
    //   location: "no",
    //   hidden: "no",
    //   toolbar: "yes"
    // });



  })
  .controller('VerificationCtrl', function ($scope) {

  })
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
  .controller('ProfileCtrl', function ($scope, $ionicPopup) {
    $scope.user = {
      firstName: "Sanket",
      lastName: "Deshmukh",
      currentLevel: "Full Stack Developer"
    };

    $scope.popupForm = {
      requestReason: ""
    };

    $scope.createRequestSkill = function () {
      var myPopup = $ionicPopup.show({
        template: '<textarea ng-model="popupForm.requestReason" style="padding:10px;resize:none;" rows="4" cols="50" placeholder="Please enter your details for your request"></textarea>',
        title: 'Skill Moderation Requested',
        scope: $scope,
        buttons: [{
            text: 'Cancel',
            onTap: function (e) {
              $scope.popupForm = {
                requestReason: ""
              };
            }
          },
          {
            text: 'Request',
            type: 'button-positive',
            onTap: function (e) {
              if ($scope.popupForm.requestReason === "") {
                e.preventDefault();
              } else {
                $scope.popupForm = {
                  requestReason: ""
                };
              }
            }
          }
        ]
      });
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
