import axios from 'axios'


const myaxios = axios.create({
    baseURL: 'http://192.168.1.61:8888/api/private/v1/',
    timeout: 1000,
});


// 添加请求拦截器
myaxios.interceptors.request.use(function (config) {
    if (localStorage.getItem('token')) {
        config.headers.Authorization = window.localStorage.getItem('token')
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myaxios.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    return res.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myaxios