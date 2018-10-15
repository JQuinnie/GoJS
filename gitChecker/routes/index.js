const express = require('express');

const router = express.Router();
const gitController = require('../controllers/gitController')();
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/git/:userId', gitController.userGet);

module.exports = router;
