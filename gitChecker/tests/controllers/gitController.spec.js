const chaiAsPromised = require('chai-as-promised');
const chai = require('chai');

const sinon = require('sinon');
const PassThrough = require('stream').PassThrough;
const http = require('https');
const rewire = require('rewire');

const GitCtrl = rewire('../../controllers/gitController');
const gitController = GitCtrl();

chai.use(chaiAsPromised);
chai.should();

describe('GitController', () => {
  let getUser = {};
  beforeEach(function () {
    const gitService = GitCtrl.__get__('gitService');
    getUser = sinon.spy(gitService, 'getUser');
    GitCtrl.__set__('gitService', gitService);

    this.request = sinon.stub(http, 'request');
    const gitJson = { login: 'jonathanfmills' };
    const repoJson = { name: 'testRepo' };

    this.gitResponse = new PassThrough();
    this.gitResponse.write(JSON.stringify(gitJson));
    this.gitResponse.end();

    this.repoResponse = new PassThrough();
    this.repoResponse.write(JSON.stringify(gitJson));
    this.repoResponse.end();

    this.request
      .onFirstCall()
      .callsArgWith(1, this.gitResponse)
      .returns(new PassThrough())
      .onSecondCall()
      .callsArgWith(1, this.repoResponse)
      .returns(new PassThrough());
  });

  it.only('should get a user and repos', function (done) {
    this.timeout(10000);

    const res = { json: test };
    const req = { params: { userId: 'jonathanfmills' } };

    gitController.userGet(req, res);

    function test(user) {
      user.login.should.equal('jonathanfmills');
      console.log(getUser.getCall(0).args);
      done();
    }
  });

  afterEach(() => {
    http.request.restore();
  });
});
