//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	
	callback(null, "Hello from ec2 action");
}

exports.lab = task