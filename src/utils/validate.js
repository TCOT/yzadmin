import {objectAssign} from "@/utils/base";

var Address6 = require('ip-address').Address6;
var Address4 = require('ip-address').Address4;

export function formValidate({empty = false, fns}) {
  return {                   //empty默认false，默认校验字段不允许为空，fns是传入的校验函数
    validator: ((rule, value, callback) => {
      if (value == '') {//value为空时
        if (empty) {//如果允许为空
          callback()//执行校验成功的回调
          return//退出函数
        } else {//如果不允许为空
          //返回校验失败，错误信息为 ‘输入不能为空’
          callback(new Error('输入不能为空'))
          return
        }
      }
      for (const func of fns) {//遍历校验函数对字段的校验
        const result = func(value)//将输入的值value传入校验函数func
        if (result !== undefined) {//如果校验结果不为undefined说明有错误信息
          callback(result)//返回错误信息
          return//退出函数，校验结束
        }
      }//如果遍历一轮下来，校验函数都没有返回错误信息，说明全部校验成功
      callback()//执行校验成功的回调
    })
  }
}

const createAuto = ({func, errMsg}) =>
  (...args) =>
    (args.length !== func.length)
      ? (value) =>
        func.apply(null, [...args, value])
          ? undefined
          : new Error(errMsg.apply(null, args))
      : func.apply(null, args);

export const validateLength = createAuto({
  func: (min, max, value) => {
    return value.length >= min && value.length <= max
  },
  errMsg: (min, max) => {
    return `长度在${min}到${max}个字符`
  }
})

export const isNotSpecificSymbol = createAuto({
  func: value => !/[?*:"<>\/|'=+!？*：《》、、|‘’=+！]/.test(value),
  errMsg: () => '存在特殊符号'
})

/**
 * 校验密码格式
 */
export const isPasswordFormat = createAuto({
  func: value => /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value),
  errMsg: () => '密码至少包含数字和英文，长度6到20个字符'
})

/**
 * 验证是否符合 同网段 格式
 */
export function isIPAndGatewayInSameNet(ip, gateway) {
  let ipArr = ip.split('.')
  let gateWayArr = gateway.split('.')
  return (ipArr[0] == gateWayArr[0] && ipArr[1] == gateWayArr[1] && ipArr[2] == gateWayArr[2])
}

/**
 * 验证是否符合 多组IPv4 格式
 */
export function isIPV4s(ctx) {
  return /^(((25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3})+)(\,(((25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}))+)*$/.test(ctx)
}

/**
 * 判断是否存在重复元素
 */
export function isRepeat(arr) {
  let hash = {};
  for (let i in arr) {
    if (hash[arr[i]]) {
      return true;
    }
    // 不存在该元素，则赋值为true，可以赋任意值，相应的修改if判断条件即可
    hash[arr[i]] = true;
  }
  return false;
}

/**
 * 验证是不存在 特殊字符 格式
 */
// export function isNotSpecificSymbol(value, isFormValidate) {
//   if (isFormValidate == true) {
//     if (isNotSpecificSymbol(value)) {
//       return undefined
//     } else return new Error('存在特殊符号')
//   } else
//     return !/[?*:"<>\/|'=+!？*：《》、、|‘’=+！]/.test(value)
// }

/**
 * 验证是否符合 特殊字符 格式
 */
export function isSpecificSymbol(ctx) {
  return /[?*:"<>\/|'=+!？*：《》、、|‘’=+！]/.test(ctx)
}

/**
 * 验证是否符合 中文 格式
 */

export function isChineseCharacter(ctx) {
  return /^[\u4e00-\u9fa5]+$/.test(ctx)
}

/**
 * 验证是否符合 IPV6 格式
 */
export function isIPv6(ctx) {
  let address = new Address6(ctx);
  if (address.isValid()) {
    return true
  } else {
    return false
  }
}


/**
 * 验证是否符合 IPV4/掩码 格式
 */
// console.dir(isIPv4_Subnet('1.1.1.1/23'));
export const isIPv4_Subnet = createAuto({
  func: (val) => {
    const address = new Address4(val);
    if (isIPv4(val)) {
      return false
    } else {
      if (address.isValid()) {
        return true
      } else {
        return false
      }
    }
  },
  errMsg: () => '请输入正确的IPV4/掩码格式地址'
})

// if(value){
//   return /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/.test(value)
// }else {
//   return ((value)=>{
//     if(isIPv4(value)){
//       return undefined
//     }else {
//       return new Error('请输入符合IPV4格式的地址')
//     }
//   })
// }
/**
 * 验证是否符合 IPV4 格式
 */
export const isIPv4 = createAuto({
  func: (val) =>
    /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/.test(val),
  errMsg: () => `请输入正确的IPv4地址`
})
// export function isIPv4(value) {
//   return /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/.test(value)
// }

/**
 * 验证是否符合 端口 格式
 */
export function isPort(ctx) {
  return /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(ctx)
}

/**
 * 验证是否符合 多端口 格式
 */
export function isPorts(ctx) {
  return ((ctx.split(',').filter(item => !isPort(item)).length == 0)
    && !isRepeat(ctx.split(',')))
}

/**
 * 验证是否符合 URL 格式
 */
export function isURL(ctx) {
  return /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/.test(ctx)
}


/**
 * 验证是否符合 IP或域名 格式
 */
export function isIP_Domain(ctx) {
  if (!isDomain(ctx) && !isIPv4(ctx)) {
    return false
  } else {
    return true
  }
}

/**
 * 验证是否符合 单域名 格式
 */
export function isDomain(ctx) {
  return (/^(?=.*\.[a-zA-Z]+$)(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/.test(ctx))
}

/**
 * 验证是否符合 多域名 格式
 */
export function isDomains(ctx) {
  return (/^((?=.*\.[a-zA-Z]+$)([a-zA-Z0-9]{1,62}|\*)(\.[a-zA-Z0-9]{1,62}|\.\*)+)(\,(?=.*\.[a-zA-Z]+$)([a-zA-Z0-9]{1,62}|\*)(\.[a-zA-Z0-9]{1,62}|\.\*)+)*$/.test(ctx))
}
