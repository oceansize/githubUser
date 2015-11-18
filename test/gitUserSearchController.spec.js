describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller, $rootScope) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchTerm).toBeUndefined();
    expect(ctrl.searchResult).toBeUndefined();
  });

  describe('when searching for a user', function() {

    var httpBackend;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
      .when("GET", "https://api.github.com/search/users?q=roidriscoll")
      .respond(
        { items: items }
      );
    }));

    var items = [
      {
        "login": "roidriscoll",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2243253?v=3&s=460",
        "html_url": "https://github.com/roidriscoll"
      },
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
      ];

      it('displays search results', function() {
        ctrl.searchTerm = "roidriscoll";
        ctrl.doSearch();
        httpBackend.flush();
        expect(ctrl.searchResult.items).toEqual(items);
      });
    });
  });

