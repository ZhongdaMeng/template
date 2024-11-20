import http from '@/utils/http'

// 登录
export const login = (data) => {
    return http({
        url: '/commonLogin',
        method: 'post',
        data: data
    })
}

// 获取用户详细信息
export function getInfo() {
    return http({
        url: '/getInfo',
        method: 'get'
    })
}
// 获取验证码
export function getCodeImg() {
    return request({
        url: '/captchaImage',
        headers: {
            isToken: false
        },
        method: 'get',
        timeout: 20000
    })
}