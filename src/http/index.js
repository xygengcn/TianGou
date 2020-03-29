var http = {
    url: {
        // add: 'http://localhost/admin.php?act=add',
        // all: 'http://localhost/admin.php?act=all'
        add: './admin/admin.php?act=add',
        all: './admin/admin.php?act=all'
    }
};
http.get = function (url) {
    return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest;
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }
        }
        xhr.send();
    })
}
http.post = function (url, data) {
    var param = '';
    for (let item in data) {
        param += item + '=' + data[item] + '&';
    }
    return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest;
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }
        }
        xhr.send(param);
    })
}
export default function (Vue, opt) {
    Vue.prototype.$http = http
}