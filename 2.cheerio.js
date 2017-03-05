var cheerio=require('cheerio');
var html=require('./html');
var $=cheerio.load(html);
var novels=[];
$('.keyword .list-title').each(function (index,item) {
    console.log(item);
    let $this=$(item);
    let novel={
        name:$this.text(),
        url:$this.attr('href'),
    }
    novels.push(novel);
})