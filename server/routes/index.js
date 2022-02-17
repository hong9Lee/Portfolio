const approot = require('app-root-path');
const express = require('express');
const router = express.Router();

router.get('/*', (req, res, next) => {
  console.log("************")
  if (req.path.split('/')[1] === 'static') return next();
  res.sendFile(approot + '/build/index.html');
});

module.exports = router;
