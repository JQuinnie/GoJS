const _ = require('lodash');
const chance = require('chance').Chance();

const mockPlanId = chance.string({ alpha: true, length: 20 });

const memberOne = [{
  membershipId: '53~12345-asdf',
  memberResourceId: chance.character({ alpha: true, symbol: true, length: 10 }),
  indexId: '1',
  firstName: chance.first({ gender: 'female' }),
  lastName: chance.last(),
  dateOfBirth: chance.birthday({ string: true }),
  gender: 'F',
  planId: mockPlanId,
  relationshipToSubscriber: 'Self',
}];

const memberDependent = [
  {
    membershipId: '51~67890-hjkl',
    memberResourceId: chance.character({ alpha: true, symbol: true, length: 10 }),
    indexId: '1',
    firstName: chance.first({ gender: 'female' }),
    lastName: chance.last(),
    dateOfBirth: chance.birthday({ string: true }),
    gender: 'F',
    planId: mockPlanId,
    relationshipToSubscriber: 'Self',
  },
  {
    membershipId: '51~67890-hjkl',
    memberResourceId: chance.character({ alpha: true, symbol: true, length: 10 }),
    indexId: '2',
    firstName: chance.first({ gender: 'female' }),
    lastName: chance.last(),
    dateOfBirth: chance.birthday({ string: true }),
    gender: 'M',
    planId: mockPlanId,
    relationshipToSubscriber: 'Child',
  },
];

const memberTwo = [{
  planId: mockPlanId,
  memberPreferences: { channels: [Array], programs: [Array] },
  memberContactDetails:
    {
      lastAccessTimeStamp: null,
      email: {
        emailAddress: chance.email({ domain: 'gmail.com' }),
      },
      phoneNumbers: [
        {
          phone: chance.phone({ formatted: false }).slice(3, 10),
          phoneExtNumber: '',
          areacode: '314',
        },
      ],
    },
}];

const isEqual = _(memberOne).intersectionBy(memberTwo, 'planId').map('planId').value();
console.log(`Two members with the same plan id: ${isEqual}`);

const isFilter = _.filter(memberTwo, { planId: mockPlanId });
console.log(`Filter a member with a specific plan id: ${JSON.stringify(isFilter)}`);

const isFind = _.find(memberDependent, item => item.membershipId === '51~67890-hjkl');
console.log(`Find a member's planId using a specific membershipId: ${isFind.planId}`);

const isUniq = _.uniq(_.map(memberDependent, 'planId'));
console.log(`Find the unique (only appears once) planId of member: ${isUniq}`);

const isGet = _.get(memberTwo, '[0].memberContactDetails.email.emailAddress');
console.log(`Get from a collection the specified object: ${isGet}`);
