'use strict';

var seneca = require('seneca');

var service = seneca();

service.client({
    type: 'tcp',
    port: 12345,
    host: '0.0.0.0',
    pin: 'role:foo'
});


service.act({
    role: 'foo',
    cmd: 'bar',
    name: 'tobi',
}, function(err, res) {
    console.log(res, Date.now());
});
