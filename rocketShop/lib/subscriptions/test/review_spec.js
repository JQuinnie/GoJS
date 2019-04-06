const assert = require('assert');
const ReviewProcess = require('../processes/review');
const MembershipApplication = require('../models/membership_application');

// features is review process
describe('The Review Process', () => {
  // this is describing a scenario
  describe('Receiving a valid application', () => {
    let decision;

    before((done) => {
      validApp = new MembershipApplication({
        first: 'Test',
        last: 'User',
        email: 'test@test.com',
        age: 30,
        height: 66,
        weight: 180,
      });

      const review = new ReviewProcess();
      review.processApplication(validApp, (err, result) => {
        decision = result;
        done();
      });
    });

    // this is a behavior of the application
    it('returns success', () => {
      assert(decision.sucess, decision.message);
    });
  });
});
