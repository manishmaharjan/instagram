//angular.module('starter.services', [])
var insta = angular.module('starter.services', []);

insta.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chatsvar = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },
{
  id: 5,
    name: 'Test user',
    lastText: 'test user!',
    face: 'img/perry.png'
  }

  ];

  return {
    all: function() {
      return chatsvar;
    },
    remove: function(chat) {
      chatsvar.splice(chatsvar.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chatsvar.length; i++) {
        if (chatsvar[i].id === parseInt(chatId)) {
          return chatsvar[i];
        }
      }
      return null;
    }
  };
});


 insta.factory('Posts', function(){
    var postsvar = [{
      id:0,
      name: "John Doe",
      lastText: 'Beautiful bird sitting behind my window',
      pic:'img/bird.jpg',
      face: 'img/ben.png'
    },{
      id:1,
      name: 'Issac Newton',
      lastText:'A man may imagine things that are false, but he can only understand things that are true. ',
      face:'img/issacnewton.jpg',
      pic:'img/issacnewtonpost.jpg'
    },{
      id:2,
      name: 'Steve Jobs',
      lastText:'My iphone is best',
      face:'img/stevejobs.jpg',
      pic:'img/stevejobsiphone.jpg'
    },{
      id:3,
      name: 'Albert Einstein',
      lastText:'If you cannot explain it simply, you do not understand it well enough',
      face:'img/alberteinstein.jpg',
      pic:'img/alberteinsteinpost.jpg'
    }];
    return {
      all: function(){
        return postsvar;
      },
      get:function(postId) {
        for (var i=0; i < postsvar.length; i++) {
          if(postsvar[i].id === parseInt(postId)){
            return postsvar[i];
          }
        }
        return null;
      }
    };
  });