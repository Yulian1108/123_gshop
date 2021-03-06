import ajax from './ajax'
//获取地址信息（根据经纬串）
export const reqAddress = (geohash) => ajax('/position/${geohash}')

//获取miste食品分类列表
export const reqCategorys = () => ajax('/index_category')

//获取miste商铺列表（根据经纬度）
export const reqShops = ({ latitude, longitude }) => ajax('/shops', { latitude, longitude })

//账号密码登录
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', { name, pwd, captcha }, 'POST')

//获取短信验证码
export const reqSendCode = phone => ajax('/api/sendcode', { phone })

//手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', { phone, code }, 'POST')

//获取用户信息（根据会话）
export const reqUser = () => ajax('/api/userinfo')

//请求登出
export const reqLogout = () => ajax('/api/logout')