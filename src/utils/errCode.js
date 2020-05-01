export function errCode2text(errCode) {
  const errText = {
    1001: '序列号不匹配',
    1002: '授权过期',
    1003: '重复授权',
    1004: '授权保存失败',
    1005: '授权码错误',
    1010: '特征库创建文件失败',
    1011: '升级包校验失败，错误的升级文件',
    1012: '升级包无效的数据',
    1013: '升级包格式错误',
    1014: '特征库升级授权过期'
  }
  return errText[errCode] ? errText[errCode] : ''
}

export function err5xx2text(errCode) {
  const errText = {
    1001: '序列号不匹配',
    1002: '授权过期',
    1003: '重复授权',
    1004: '授权保存失败',
    1005: '授权码错误',
    1010: '特征库创建文件失败',
    1011: '升级包校验失败，错误的升级文件',
    1012: '升级包无效的数据',
    1013: '升级包格式错误',
    1014: '特征库升级授权过期'
  }
  return errText[errCode] ? errText[errCode] : ''
}
