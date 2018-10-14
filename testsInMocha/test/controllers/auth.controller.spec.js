const assert = require('assert');

const authController = require('../../controllers/auth.controller');

describe('AuthController', function() {
  describe('isAuthorized', function() {
    it('should return false if not authorized', function() {
      assert.equal(false, authController.isAuthorized(['user'], 'admin'));
    });
    it('should return true if authorized', function() {
      assert.equal(
        true,
        authController.isAuthorized(['user', 'admin'], 'admin')
      );
    });
  });

  describe('isAuthorizedAsync', function() {
    it('should return false if not authorized', function(done) {
      this.timeout(2500);
      authController.isAuthorizedAsync(['user'], 'admin', isAuth => {
        assert.equal(false, isAuth);
        done();
      });
    });
  });
});
