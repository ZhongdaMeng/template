import axios from 'axios';
import { localStorageGet, localStorageClear } from './localstorage.js'
import router from "@/router";

const http = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // 基础URL
    timeout: 10000, // 请求超时时间
    // 其他配置...
});

const token = localStorageGet('token') === null ? "" : localStorageGet('token');

// 请求拦截器
http.interceptors.request.use(
    config => {
        // 添加token 
        config.headers['Authorization'] = 'Bearer' + token;
        return config;
    },
    error => {
        // 请求错误处理
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    response => {
        switch (response.data.code) {
            case 0:
                return response.data;
            case 200:
                return response.data;
            case 400:
                ElMessage.error('错误的请求');
                return Promise.reject(response.data.msg);
            case 401:
                ElMessage.error('登录失效！')
                router.replace({ name: 'login' })
                localStorageClear()
                break;
            case 404:
                ElMessage.error(response.data.msg);
                return Promise.reject(response.data.msg);
            case 429:
                ElMessage.error('请求过多，先休息一下吧');
                return Promise.reject(response.data.msg);
            case 500:
                ElMessage.error('服务器打瞌睡了');
                return Promise.reject(response.data.msg);
            default:
                ElMessage.error(response.data.msg);
                return Promise.reject(response.data.msg);
        }
    },
    error => {
        // 响应错误处理
        return Promise.reject(error);
    }
);

export default http;

