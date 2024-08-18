//响应状态码
enum ResponseCodeEnum {
    //已登录
    OK = '200',
    // 未登录
    UN_LOGIN_ERROR = 'A0001',
    // 无效token
    UN_VALID_TOKEN_ERROR = 'A0003',
    // token已过期
    TOKEN_EXPIRED_ERROR  = 'A0011'
}

//轮播图类型
enum BannerTypeEnum {
    PC = 1
}

export { ResponseCodeEnum, BannerTypeEnum }