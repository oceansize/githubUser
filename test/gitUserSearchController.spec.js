describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

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
        console.log("here be the searchResult console log: " + ctrl.searchResult.items[0]["login"]);
        console.log("here be the console log: " + items[0]["login"]);
        expect(ctrl.searchResult.items[0]["login"]).toEqual(items[0]["login"]);
      });
    });
  });

