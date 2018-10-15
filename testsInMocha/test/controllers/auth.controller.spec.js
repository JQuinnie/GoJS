const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
chai.use(chaiAsPromised); // middleware
chai.should(); // append it onto the end

const authController = require('../../controllers/auth.controller');

describe('AuthController', function() {
  // set up for autonomous testing
  beforeEach('this function is setting up Roles', function settingUpRoles() {
    console.log('Running before each');
    // authController.setRoles(['user']);
  });

  describe('isAuthorized', function() {
    let user = {};

    beforeEach(function() {
      user = {
        roles: ['user'],
        isAuthorized: function(neededRole) {
          return this.roles.indexOf(neededRole) >= 0;
        }
      };
      // let us watch a different function
      sinon.spy(user, 'isAuthorized');
      authController.setUser(user);
    });

    it('should return false if not authorized', function() {
      let isAuth = authController.isAuthorized('admin');
      user.isAuthorized.calledOnce.should.be.true;
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

  describe('isAuthorizedPromise', function() {
    it('should return false if not authorized', function() {
      return authController.isAuthorizedPromise('admin').should.eventually.be
        .false;
    });
  });

  describe.only('getIndex', function() {
    let user = {};
    beforeEach(function() {
      user = {
        roles: ['user'],
        isAuthorized: function(neededRole) {
          return this.roles.indexOf(neededRole) >= 0;
        }
      };
      // // let us watch a different function
      // sinon.spy(user, 'isAuthorized');
      // authController.setUser(user);
    });

    it('should render index if authorized', function() {
      // stub will completely replace the isAuthorized function above
      let isAuth = sinon.stub(user, 'isAuthorized').returns(true);
      let req = { user: user };
      let res = {
        // fake function with spys
        render: sinon.spy()
      };
      authController.getIndex(req, res);
      isAuth.calledOnce.should.be.true;
      res.render.calledOnce.should.be.true;
      res.render.firstCall.args[0].should.equal('index');
    });
  });
});
