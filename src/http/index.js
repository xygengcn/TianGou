import axios from "axios";
var http = {
    // baseURL: 'http://test.cn/admin/admin.php'
    baseURL: 'http://tg.xygeng.cn/admin/admin.php'
};
http.get = function (act, data) {
    return new Promise((resolve, reject) => {
        axios.get(this.baseURL, {
                params: {
                    act: act,
                    data: data
                }
            }).then(function (res) {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            });
    })
}
http.post = function (act, data) {
    let postData = new FormData();
    postData.append('act', act);
    for (let item in data) {
        if (typeof data[item] == 'string') {
            postData.append(item, data[item]);
        } else {
            postData.append(item, JSON.stringify(data[item]));
        }
    };
    return new Promise((resolve, reject) => {
        axios.post(this.baseURL, postData).then(function (res) {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            });
    })
}
export default function (Vue, opt) {
    Vue.prototype.$http = http
}