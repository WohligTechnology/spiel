angular.module('starter.services', [])

  .factory('Skill', function ($state) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data

    var user = $.jStorage.get("user");
    return {
      getUserSkill: function () {

      },
      getLeaderBoard: function () {

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
