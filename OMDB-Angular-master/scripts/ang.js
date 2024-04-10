// console.log("Angular Loaded");

// var app = angular.module('omdb', []);

// app.controller('MovieController', function($scope, $http){
//   this.movieSearch = '';
//   this.formAction = function() {
//     $http.get('https://www.omdbapi.com/?i=tt3896198&apikey=d0b1a674' + this.movieSearch + '&y=&r=json').
//       then(function(response){
//         $scope.movies = response.data.Search
//     });
//   };
//   this.movieSelect = function(imdbID){
//     $http.get('https://www.omdbapi.com/?i=tt3896198&apikey=d0b1a674' + imdbID + '&y=&plot=short&r=json').
//       then(function(data){
//         console.log(data.data);
//         $scope.movie = data.data;
//       });
//   };

// })
console.log("Angular Loaded");

var app = angular.module('omdb', []);

app.controller('MovieController', function($scope, $http){
  this.movieSearch = '';
  this.apiKey = ''; 
  
  this.formAction = function() {
    console.log("Form action called");
    $http.get('https://www.omdbapi.com/?apikey=' + this.apiKey + '&s=' + this.movieSearch + '&y=&r=json').
      then(function(response){
        console.log("Search response:", response.data);
        $scope.movieCtrl.movies = response.data.Search;
    });
  };

  this.movieSelect = function(imdbID){
    console.log("Movie selected:", imdbID);
    $http.get('https://www.omdbapi.com/?apikey=' + this.apiKey + '&i=' + imdbID + '&y=&plot=short&r=json').
      then(function(data){
        console.log("Movie details:", data.data);
        $scope.movieCtrl.movie = data.data;
      });
  };
});

