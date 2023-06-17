var mysql = require('mysql');


var rdsUrl = 'database-1-instance-1.csx3nn4lh5ul.us-east-1.rds.amazonaws.com';
var password =  '1234567890';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
