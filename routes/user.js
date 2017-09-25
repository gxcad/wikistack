const express = require('express');
const router = express.Router();
const model = require('../models');
const User = model.User;
const Page = model.Page;

module.exports = router;

router.get('/', function(req, res, next){
  User.findAll({})
  .then(function(users){
    res.render('users', {users: users});
  }).catch(next);
});

router.get('/:id', function(req, res, next){
  Page.findAll({
    where: {
      AuthorId: req.params.id
    }
  }).then(function(pages){
    res.render('singleuser', {pages: pages})
  })
})
