var debug = require('./debug');
var loggerA = debug('logger:a');

loggerA('loggerA');
var loggerB = debug('logger:b');

loggerB('loggerB');


//set DEBUG=xxx; 设置环境变量   set key=val
//process.env.key  读取环境变量
console.log(process.env.PATH);

function hha () {
    process.env.DEBUG
}
