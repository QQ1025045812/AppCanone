/**
 * 获取年月日
*/
function getDays(){
    var date=new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var date = date.getDate();
    date=(date<=9?"0":"")+date;
    var result = year+'-'+month+'-'+date;
    return result;
};
/**
 * 获取时分秒
*/
function getSeconds(){
    var date=new Date;
    var hour = date.getHours();
    var minute = date.getMinutes();
    minute=(minute<=9?"0":"")+minute;
    var second = date.getSeconds();
    second=(second<=9?"0":"")+second;
    var result =hour+':'+minute+':'+second;
    return result;
};