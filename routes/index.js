/* jshint strict: false */

var express = require('express'),
    router = express.Router(),
    path = require('path');

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
  // res.render('index', {
  //   title: 'Document Builder'
  // });
  res.sendFile(path.resolve('views/index.html'));
});

module.exports = router;
