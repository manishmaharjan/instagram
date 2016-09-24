angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
// controller logic here

})

.controller('HomeCtrl', function($scope, Posts) {
// controller logic here
$scope.postsctrlscope = Posts.all();
// $scope.remove = function(post){
//   Posts.remove(post);
// };
})

.controller('PostsCtrl', function($scope, $stateParams, Posts){
  $scope.postscope = Posts.get($stateParams.postId);
})

.controller('SearchCtrl', function($scope) {
// controller logic here

})



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chatsctrlscope = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chatscope = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
