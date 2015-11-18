githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  self.searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {
    self.searchResult = self.searchResource.get(
      { q: self.searchTerm }
   );
  };

}]);

