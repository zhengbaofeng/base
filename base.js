function formatDate(t) {//格式化时间戳
    var time = new Date(t);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hour = time.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    var minute = time.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    var second = time.getSeconds();
    if (second < 10) {
        second = '0' + second;
    }
    return year + "-" + month + "-" + date;
}
function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
/*
	var Request = new Object();
	Request = GetRequest();
	var invite = Request['invite'];
*/