
var Job=require('cron').CronJob;
//秒 分 时 天 月 星期  要有空格
var job=new Job("* * * * * *",function () {
    console.log(new Date().toLocaleString());
})
job.start();