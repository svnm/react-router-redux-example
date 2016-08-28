var express = require('express');
var router = express.Router();

router.route('/npmPackage').get(require('./routes/npmPackage'));
router.route('/npmPackages').get(require('./routes/npmPackages'));

module.exports = router;
