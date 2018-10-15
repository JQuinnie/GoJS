const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const authController = require('../../controllers/auth.controller');

describe('AuthController', function() {
  // set up for autonomous testing
  beforeEach('this function is setting up Roles', function settingUpRoles() {
    console.log('Running before each');
    authController.setRoles(['user']);
  });

  describe('isAuthorized', function() {
    it('should return false if not authorized', function() {
      let isAuth = authController.isAuthorized('admin');
      expect(isAuth).to.be.false;
    });
    it('should return true if authorized', function() {
      authController.setRoles(['user', 'admin']);
      let isAuth = authController.isAuthorized('admin');
      isAuth.should.be.true;
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
