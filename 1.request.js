var request = require('request');
var url = 'http://top.baidu.com/buzz?b=7&c=10&fr=topcategory_c10'
var iconv = require('iconv-lite')
var fs=require('fs');
request({url, encoding: null}, function (err, response, body) {
    body = iconv.decode(body, 'gbk');
    fs.writeFile('./baidu.html',body,function (err,result) {
        console.log(result);
    });

});
