import {saveAs} from 'file-saver'

//封装ele的指定字段表单校验
export function validateField(fields = [], validateFn) {
  const self = this
  function validate(fieldIndex) {
    if (fields.length == fieldIndex) {
      validateFn ? validateFn() : ''
    } else {
      self.$refs.form.validateField(fields[fieldIndex], (errMsg) => {
        if (!errMsg) {
          validate(fieldIndex + 1)
        }
      })
    }
  }

  validate(0)
}

//封装表单校验的提交
export function formSubmit({fn, formName = 'form', secondeValidate}) {
  this.$refs[`${formName}`].validate(async valid => {
    if (valid) {
      if (!secondeValidate) {
        fn()
      } else if (secondeValidate()) {
        fn()
      }
    } else {
      this.$Message(this.$t('submitErr'), 'error')
    }
  })
}

//封装fetch
export async function fetch(fetchFunction, onSuccess, onFailure) {
  try {
    if (this.loading !== undefined)
      this.loading = true
    const {data} = await fetchFunction()
    onSuccess(data)
    if (this.loading !== undefined)
      this.loading = false
    return Promise.resolve('ok')
  } catch (e) {
    if (this.loading !== undefined)
      this.loading = false
    return Promise.resolve('err')
  }
}


/**
 * 判断对象是否拥有属性
 */
export function hasProperty(object) {
  return Object.keys(deepCopy(object)).length > 0 ? true : false
}
/**
 * json数组 多属性去重
 * @param arr
 * @param rest 'a','b'
 * @returns {[]}
 */
export function distinct(arr, ...rest) {
  const cache = [];
  let t;

  function check(item) {
    let trueList = [];
    let args;
    for (args of rest) {
      trueList.push(item[args] === t[args])
    }
    return trueList.every(item => item)
  }

  for (t of arr) {
    if (cache.find(check)) {
      continue;
    }
    cache.push(t);
  }
  return cache;
}

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 按对象数组中元素某一属性对数组元素进行 降序
 * 传入对象的属性，字符串格式
 * 例如 this.list.sort(ascending("id"));
 */
export function descending(field) {
  return (x, y) => {
    return y[field] - x[field];
  }
}

/**
 * 按对象数组中元素某一属性对数组元素进行 升序
 * 传入对象的属性，字符串格式
 * 例如 this.list.sort(ascending("id"));
 */
export function ascending(field) {
  return (x, y) => {
    return x[field] - y[field]; //交换的规则：x > y ，大 > 小则进行交换，换成 小 大 这样排序，则升序
  }
}

/**
 * 子网掩码计算IP地址的网络号
 */
export function mask_IP2subnet(ip, mask) {
  let sub_net = [];//子网掩码
  let ip_explode = ip.split('.');
  var mask_explode = mask.split('.');
  for (var i = 0, num = ip_explode.length; i < num; i++) {
    let c = parseInt(ip_explode[i]) & parseInt(mask_explode[i]);
    sub_net.push(c);
  }
  sub_net = sub_net.join('.');
  return sub_net
}

/**
 * 子网掩码整数转IP 例如 /24 转成 255.255.255.0
 */
export function numberToIp(value) {
  let number = +value
  let part = Math.floor(number / 8)
  let remainder = number % 8;
  let sum = 0;
  for (let i = 8; i > 8 - remainder; i--) {
    sum = sum + Math.pow(2, i - 1);
  }
  let ipMask = ''
  if (part == 0) {

    ipMask = sum + ".0.0.0";

  } else if (part == 1) {

    ipMask = "255." + sum + ".0.0";

  } else if (part == 2) {

    ipMask = "255.255." + sum + ".0";

  } else if (part == 3) {

    ipMask = "255.255.255." + sum;

  } else if (part == 4) {

    ipMask = "255.255.255.255";

  }
  return ipMask;
}


/**
 * 将空字符串转成null
 * @param target
 * @returns {*}
 */
export function str2Null(str) {
  return !str ? null : str
};

/**
 * 作用：合并两个对象（深拷贝）
 * 用法：
 *objectAssign(child, {
        parent: this,
        store: this.store
      });
 * @param target
 * @returns {*}
 */
export function objectAssign(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {};
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

/**
 * 下载base64文件
 * @param base64Str
 * @param fileName
 */
export function downLoad(base64Str, fileName = 'file') {
  let base64 = base64Str;
  var arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  saveAs(new File([u8arr], fileName, {type: mime}))
}


/**
 * 将file转换成base64编码的字符串
 */
export function file2Base64(file) {
  return new Promise(function (resolve, reject) {
    let reader = new FileReader();
    let base64Result = "";
    reader.readAsDataURL(file);
    reader.onload = function () {
      base64Result = reader.result
      let index = base64Result.lastIndexOf(",")
      base64Result = base64Result.substring(index + 1, base64Result.length);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.onloadend = function () {
      resolve(base64Result.trim());
    };
  });
}

export function timeout(res) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(res), 0.5 * 1000));
}


