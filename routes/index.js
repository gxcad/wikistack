const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');
const models = require('../models');
const Page = models.Page;

module.exports = router;


router.get('/', function(req, res) {
  Page.findAll({

  }).then(function(pages) {
    res.render('index', {pages: pages});

  })
});
router.use('/wiki', wikiRouter);
router.use('/users', userRouter);
