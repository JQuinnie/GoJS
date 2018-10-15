const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const PassThrough = require('stream').PassThrough;
const http = require('https');

const gitService = require('../../services/gitService')();

chai.use(chaiAsPromised);
chai.should();

describe('GitService', () => {
  beforeEach(function () {
    this.request = sinon.stub(http, 'request');
  });

  it('should get a user and repos', function () {
    this.timeout(10000);
    const gitJson = { login: 'jonathanfmills' };
    const repoJson = { name: 'testRepo' };

    const gitResponse = new PassThrough();
    gitResponse.write(JSON.stringify(gitJson));
    gitResponse.end();

    const repoResponse = new PassThrough();
    repoResponse.write(JSON.stringify(gitJson));
    repoResponse.end();

    const req1 = new PassThrough();
    const req2 = new PassThrough();
    this.request
      .onFirstCall()
      .callsArgWith(1, gitResponse)
      .returns(req1)
      .onSecondCall()
      .callsArgWith(1, repoResponse)
      .returns(req2);

    const req = this.request;
    return gitService.getUser('jonathanfmills').then((user) => {
      console.log(req.getCall(0).args[0]);
      user.login.should.equal('jonathanfmills');
      user.should.have.property('repos');
    });
  });

  afterEach(() => {
    http.request.restore();
  });
});
