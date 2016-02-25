require('babel-core/register');
require('css-modules-require-hook/preset');

var env = process.env.NODE_ENV || 'prod'

if(env === 'prod'){
	var app = require("./serverProd.js");
} else {
	var app = require("./serverDev.js");
}
