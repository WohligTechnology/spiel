angular.module('starter.controllers', ['ionic'])

  .controller('LoginCtrl', function ($scope, Skill, $state) {
    $scope.form = {};
    $scope.login = function () {
      Skill.login($scope.form, function (data) {
        console.log("Data", data);
        if (data.value) {
          Skill.setUser(data.data);
          $state.go("tab.leaderboard");
        }
      });
    };
  })
  .controller('VerificationCtrl', function ($scope, Skill) {

  })
  .controller('LeaderboardCtrl', function ($scope, Skill) {
    Skill.getLeaderboard(function (data) {
      $scope.userlist = data.data;
    });
    $scope.user = Skill.getUser();
  })
  .controller('ProfileCtrl', function ($scope, $ionicPopup, Skill, $stateParams) {
    if ($stateParams.id === "" || !$stateParams.id) {
      $scope.myProfile = true;
    }
    Skill.getUserSkill($stateParams.id, function (data) {
      $scope.user = data.data.user;
      $scope.skills = _.groupBy(data.data.skill, "skillCategory.name");
    });

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
