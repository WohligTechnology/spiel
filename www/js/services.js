angular.module('starter.services', [])

  .factory('Skill', function ($state, $http) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data

    var user = $.jStorage.get("user");
    return {
      getUserSkill: function (data, callback) {
        if (data === "") {
          data = undefined;
        }
        $http.post(adminUrl + "user/getDetails", {
          _accessToken: user.accessToken,
          user: data
        }).then(function (data) {
          if (data.status == 200) {
            data = data.data;
            var retVal = {};
            retVal.user = data.data.user;
            _.each(data.data.requestedSkill, function (n) {
              var skillNo = _.findIndex(data.data.skill, function (m) {
                return m._id == n.skill;
              });
              if (skillNo >= 0) {
                data.data.skill[skillNo].approvalStatus = n.approvalStatus;
              }
            });
            retVal.skills = _.groupBy(data.data.skill, "skillCategory.name");
            callback(retVal);
          } else {
            //show some alert
          }
        });
      },
      login: function (data, callback) {
        $http.post(adminUrl + "user/Login", data).then(function (data) {
          if (data.status == 200) {
            callback(data.data);
          } else {
            //show some alert
          }
        });
      },
      getLeaderboard: function (callback) {
        $http.post(adminUrl + "user/getUserList", {
          _accessToken: user.accessToken
        }).then(function (data) {
          if (data.status == 200) {
            callback(data.data);
          } else {
            //show some alert
          }
        });
      },
      getUser: function () {
        if (!user) {
          $state.go("login");
        } else if (user.accessLevel == "Pending") {
          $state.go("verification");
        }
        return user;
      },
      setUser: function (data) {
        user = data;
        user = $.jStorage.set("user", user);
      },
      getDesignations: function (callback) {
        $http.post(adminUrl + "designation/search", {
          _accessToken: user.accessToken
        }).then(function (data) {
          if (data.status == 200) {
            callback(data.data);
          } else {
            //show some alert
          }
        });
      },
      getDesignation: function (data, callback) {
        $http.post(adminUrl + "designation/getOne", {
          _accessToken: user.accessToken,
          _id: data
        }).then(function (data) {
          if (data.status == 200) {
            callback(data.data);
          } else {
            //show some alert
          }
        });
      },
      requestSkill: function (skill, reasonForRequest, callback) {
        $http.post(adminUrl + "requestSkill/save", {
          _accessToken: user.accessToken,
          skill: skill,
          reasonForRequest: reasonForRequest,
          user: user._id
        }).then(function (data) {
          if (data.status == 200) {
            callback(data.data);
          } else {
            //show some alert
          }
        });
      }
    };
  });
