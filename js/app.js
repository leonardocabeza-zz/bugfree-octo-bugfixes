(function () {
	var app = angular.module('search-artist', ['angular-loading-bar']);

	app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		cfpLoadingBarProvider.includeSpinner = true;
	}]);	

	app.controller('artistCtrl', ['$http', function($http){
		var artist = this;
		artist.items = [];
		artist.query = "";

		this.search = function (query) {
			$http.get(
				'https://api.spotify.com/v1/search?q='+artist.query+'&type=artist'
			).success(function(data) {
				artist.items = data.artists.items;
			});
		};		
	}]);
})();
