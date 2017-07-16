angular.module('starter.controllers', ['ionic'])

  .controller('LoginCtrl', function ($scope, Skill, $state) {
    $scope.form = {};
    $scope.login = function () {
      Skill.login($scope.form, function (data) {
        console.log("Data", data);
        if (data.value) {
          Skill.setUser(data.data);
          console.log("Success");
          if (data.data.accessLevel !== "Pending") {
            $state.go("tab.leaderboard");
          } else {
            $state.go("verification");
          }
        }
      })
    }
  })
  .controller('VerificationCtrl', function ($scope, Skill, $state) {
    var form = {
      accessToken: $.jStorage.get("user").accessToken
    }
    $scope.refresh = function () {
      Skill.login(form, function (data) {
        if (data.value) {
          Skill.setUser(data.data);
          if (data.data.accessLevel !== "Pending") {
            $state.go("tab.leaderboard");
          } else {
            $state.go("verification");
          }
        }
      })
    }
  })
  .controller('LeaderboardCtrl', function ($scope, Skill) {
    Skill.getLeaderboard(function (data) {
      $scope.userlist = data.data;
    });
    $scope.user = Skill.getUser();
    // $scope.userlist = [{
    //     firstname: 'Bhargav',
    //     lastname: 'Purohit',
    //     currentLevel: "Fresher"
    //   },
    //   {
    //     firstname: 'Ashish',
    //     lastname: 'Zanwar',
    //     currentLevel: "Full Stack"
    //   },
    //   {
    //     firstname: 'Sanket',
    //     lastname: 'Deshmukh',
    //     currentLevel: "Full Stack"
    //   }
    // ];
  })
  .controller('ProfileCtrl', function ($scope, $ionicPopup, Skill) {
    $scope.user = Skill.getUser();
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
  .controller('DesignationCtrl', function ($scope, Skill) {
    $scope.user = Skill.getUser();
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
  .controller('DesignationDetailCtrl', function ($scope, Skill) {
    $scope.user = Skill.getUser();
  })
  .controller('NotificationCtrl', function ($scope, Skill) {
    $scope.user = Skill.getUser();
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
