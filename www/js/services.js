angular.module('starter.services', [])

  .factory('Skill', function ($state, $http) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data

    var user = $.jStorage.get("user");
    return {
      getUserSkill: function (data) {
        $http.post(adminUrl + "user/getDetails", {
          _accessToken: user.accessToken,
          user: data
        }).then(function (data) {
          if (data.status == 200) {
            callback(data.data);
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
      }
    };
  });
