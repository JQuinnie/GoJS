const gitService = require('../services/gitService')();

module.exports = function () {
  const userGet = function (req, res) {
    const userId = req.params.userId;

    gitService.getUser(userId).then((user) => {
      res.json(user);
    });
  };
  return {
    userGet,
  };
};
