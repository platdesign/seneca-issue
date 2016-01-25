'use strict';

var seneca = require('seneca');

var service = seneca();

service.add({
    role: 'foo',
    cmd: 'bar'
}, function(args, cb) {
    console.log(args.name, Date.now(), args.meta$.id);
    cb(null, { test:123, name: args.name });
} )


service.listen({
    type: 'tcp',
    port: 12345,
    host: '0.0.0.0'
});
