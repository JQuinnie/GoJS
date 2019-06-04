const async = require('async');
const Octokit = require('@octokit/rest');

const octokit = new Octokit({
  userAgent: 'octokit/rest.js v1.2.3',
  baseUrl: 'https://api.github.com',
});

const getUser = (username, callback) => {
  octokit.users.getByUsername({ username })
    .then(
      (result) => {
        callback(undefined, result.data.avatar_url);
      },
    )
    .catch(callback);
};

// do multiple things in order
async.waterfall([
  // return function that accepts a function and returns a function that accept a callback
  async.apply(getUser, 'airbnb'),
  // second function will append the url to the img tag
  function wrapAvatarInHtml(avatarUrl, callback) {
    const avatarWithHtml = `<img src="${avatarUrl}"/>`;
    callback(null, avatarWithHtml);
  },
], (err, result) => {
  // this function called once all the function in the stack has been executed
  // if there is an error, then handle it
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});
