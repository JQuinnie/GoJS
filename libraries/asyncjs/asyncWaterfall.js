const async = require('async');
const Octokit = require('@octokit/rest');

const octokit = new Octokit({
  userAgent: 'octokit/rest.js v1.2.3',
  baseUrl: 'https://api.github.com',
});

// do multiple things in order
async.waterfall([
  // first function will get the url from github
  // because the call to github is a callback, we have to use then/catch
  (callback) => {
    octokit.users.getByUsername({ username: 'airbnb' })
      .then(
        (result) => {
          callback(null, result.data.avatar_url);
        },
      )
      .catch(callback);
  },
  // example of the above using async / await
  // async function getUserAvatar(callback) {
  //   const getUserName = await octokit.users.getByUsername({ username: 'airbnb' });
  //   const avatarUrl = getUserName.data.avatar_url;
  //   return avatarUrl;
  // },
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
