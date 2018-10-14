const assert = require('assert');

const authController = require('../../controllers/auth.controller');

describe('AuthController', function() {
  // set up for autonomous testing
  beforeEach('this function is setting up Roles', function settingUpRoles() {
    console.log('Running before each');
    authController.setRoles(['user']);
  });

  describe('isAuthorized', function() {
    it('should return false if not authorized', function() {
      assert.equal(false, authController.isAuthorized('admin'));
    });
    it('should return true if authorized', function() {
      authController.setRoles(['user', 'admin']);
      assert.equal(true, authController.isAuthorized('admin'));
    });
    it('should not allow a GET if not authorized');
    it('should allow GET if authorized');
  });

  describe('isAuthorizedAsync', function() {
    it('should return false if not authorized', function(done) {
      authController.isAuthorizedAsync('admin', isAuth => {
        assert.equal(false, isAuth);
        done();
      });
    });
  });
});
