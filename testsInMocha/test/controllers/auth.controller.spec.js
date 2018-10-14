const assert = require('assert');

const authController = require('../../controllers/auth.controller');

describe('AuthController', function() {
  describe('isAuthorized', function() {
    it('should return false if not authorized', function() {
      authController.setRoles(['user']);
      assert.equal(false, authController.isAuthorized('admin'));
    });
    it('should return true if authorized', function() {
      authController.setRoles(['user', 'admin']);
      assert.equal(true, authController.isAuthorized('admin'));
    });
  });

  describe('isAuthorizedAsync', function() {
    it('should return false if not authorized', function(done) {
      authController.setRoles(['user']);
      authController.isAuthorizedAsync('admin', isAuth => {
        assert.equal(false, isAuth);
        done();
      });
    });
  });
});
