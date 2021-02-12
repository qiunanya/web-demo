/**
 *  @description 判断是否为空
 *  @param { * } data
 *  @returns { Boolean }
 */
export const isEmpty = (data) => {
    // 判断是否是Boolean类型 
    if (typeof data === 'boolean') return false
    
    // 判断是否是Number数据类型
    if (typeof data === 'number') return false
    
    // 判断数组是否为空
    if (data instanceof Array && data.length == 0) return true
    
    // 判断对象是否为空
    if (data instanceof Object && Object.keys(data).length == 0) return true
    
    // 判断是否为空
    if (data == 'null' || data == null || data == 'undefined' || data == undefined || data == '') return true
        
    return false
}

/**
 *  @description 用户名是否合法
 *  @param { String } name
 *  @returns { Boolean }
 */
export const nameIsLegal = (name) => {
    // @TODO
}

/**
 *  @description 手机号是否合法
 *  @param { String } mobile
 *  @returns { Boolean }
 */
export const mobileIsLegal = (mobile) => {
    const reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
    return reg.test(mobile)
}

/**
 * @description 验证码校验
 * @param { String } code 
 * @returns { Boolean }
 */
export function validateCode(code){
    let reg = /^[a-z0-9]{6}$/;
    return reg.test(code)
}

/**
 *  @description 密码是否合法
 *  @param { String } password
 *  @returns { Boolean }
 */
export const passwordIsLegal = (password) => {
    // @TODO
}

/**
 *  @description 是否是外部链接
 *  @param { String } path
 *  @returns { Boolean }
 */
export const isExternal = (path) => {
    return /^(https?:|mailto:|tel:)/.test(path)
}
  
/**
 *  @description 是否是数组
 *  @param { Array } arg
 *  @returns { Boolean }
 */
export const isArray = (arg) => {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}

/**
 *  @description 邮箱是否合法
 *  @param { String } email
 *  @returns { Boolean }
 */
export const isEmail = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}

/**
 *  @description 链接是否合法
 *  @param { String } url
 *  @returns { Boolean }
 */
export const isUrl = (url) => {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
}

/**
 *  @description 去除输入框输入空格; 用于除开需要特殊字符的输入框，如邮箱不适用
 *  @param { String } str 
 *  @returns { String }
 */
export const excludeSpecia = str => {
    // 去除转义字符
    str = str.replace(/[\\\/\'\"\b\n\f\r\t]/ig, '')
    // 去除特殊字符
    str = str.replace(/[\[\]\-=\+_;\`\~\，\、\。\@\#\$\%\^\&\*\{\}\,\.\:\L\<\>\?\s+]/ig, '')
    return str
}
