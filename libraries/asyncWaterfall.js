const async = require('async');
const Octokit = require('@octokit/rest');

const octokit = new Octokit({
  userAgent: 'octokit/rest.js v1.2.3',
  baseUrl: 'https://api.github.com',
});

// do multiple things in order
async.waterfall([
  // first function will get the url from github
  async function getUserAvatar(callback) {
    // octokit.users.getByUsername({ username: 'airbnb' }, (err, res) => {
    //   if (err) {
    //     // null is because cant return anything
    //     callback(err, null);
    //   }
    //   const avatarUrl = res.items[0].avatar_url;
    //   // null to error, then return avatarUrl to 2nd function
    //   callback(null, avatarUrl);
    // });
    const getUserName = await octokit.users.getByUsername({ username: 'airbnb' });
    const avatarUrl = getUserName.data.avatar_url;
    return avatarUrl;
  },
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
