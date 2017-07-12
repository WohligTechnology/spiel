angular.module('starter.controllers', [])

  .controller('LoginCtrl', function ($scope) {})
  .controller('VerificationCtrl', function ($scope) {})
  .controller('DashCtrl', function ($scope) {})
  .controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })
  .controller('LeaderboardCtrl', function ($scope, Chats) {
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
  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })
  .controller('ListCtrl', function ($scope, $stateParams, Chats) {
    $scope.task = [{
        heading: "Frontend",
        tasks: ["uitask1", "uitask2", "uitask3", "uitask4", "uitask5", "uitask6", "uitask7"]
      },
      {
        heading: "Integration",
        tasks: ["integration1", "integration2", "integration3", "integration4", "integration5", "integration6", "integration7"]
      },
      {
        heading: "Backend",
        tasks: ["backend1", "backend2", "backend3", "backend4", "backend5", "backend6", "backend7"]
      }
    ];

    $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
    };
  })
  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
