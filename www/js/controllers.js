angular.module('starter.controllers', ['ionic'])

  .controller('LoginCtrl', function ($scope, Skill, $state) {
    $scope.form = {};
    $scope.login = function () {
      Skill.login($scope.form, function (data) {
        console.log("Data", data);
        if (data.value) {
          Skill.setUser(data.data);
          if (data.data.accessLevel !== "Pending") {
            $state.go("tab.leaderboard");
          } else {
            $state.go("verification");
          }
        }
      });
    };
  })
  .controller('VerificationCtrl', function ($scope, Skill, $state) {
    var form = {
      accessToken: $.jStorage.get("user").accessToken
    };
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
      });
    };
  })
  .controller('LeaderboardCtrl', function ($scope, Skill) {
    $scope.user = Skill.getUser();
    Skill.getLeaderboard(function (data) {
      $scope.userlist = data.data;
    });

  })
  .controller('ProfileCtrl', function ($scope, $ionicPopup, Skill, $stateParams) {
    $scope.user = Skill.getUser();
    if ($stateParams.id === "" || !$stateParams.id || $stateParams.id == Skill.getUser()._id) {
      $scope.myProfile = true;
    }

    function refresh() {
      Skill.getUserSkill($stateParams.id, function (data) {
        _.assign($scope, data);
      });
    }
    refresh();


    function requestSkill(skill, reason) {
      skill.approvalStatus = "Pending";
      Skill.requestSkill(skill, reason, function (data) {
        refresh();
      });
    }

    $scope.popupForm = {
      requestReason: ""
    };
    $scope.createRequestSkill = function (skill) {
      if (skill.approvalStatus != "Pending" && skill.approvalStatus != "Approved") {

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
                  requestSkill(skill._id, $scope.popupForm.requestReason);
                  $scope.popupForm = {
                    requestReason: ""
                  };
                }
              }
            }
          ]
        });
      }

    };

  })
  .controller('ProfileDetailCtrl', function ($scope, $ionicPopup, Skill, $stateParams) {
    $scope.user = Skill.getUser();
    Skill.getUserSkill($stateParams.id, function (data) {
      _.assign($scope, data);
    });
  })
  .controller('DesignationCtrl', function ($scope, Skill) {
    $scope.user = Skill.getUser();
    Skill.getDesignations(function (data) {
      $scope.designations = data.data.results;
    });
  })
  .controller('DesignationDetailCtrl', function ($scope, $stateParams, Skill) {
    $scope.user = Skill.getUser();
    Skill.getDesignation($stateParams.id, function (data) {
      $scope.designation = data.data;
      console.log(data.data.neededSkill);
      $scope.skills = _.groupBy(data.data.neededSkill, "skillCategory.name");
    });
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
