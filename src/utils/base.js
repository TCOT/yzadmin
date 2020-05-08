export function DeepCopy(obj) {
  // Hash表 记录所有的对象引用关系
  let map = new WeakMap();
  function dp(obj) {
    let result = null;
    let keys = null,
      key = null,
      temp = null,
      existObj = null;

    existObj = map.get(obj);
    // 如果这个对象已被记录则直接返回
    if (existObj) {
      return existObj;
    }
    keys = Object.keys(obj);
    result = {};
    // 记录当前对象
    map.set(obj,result);
    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      temp = obj[key];
      // 如果字段的值也是一个对象则递归复制
      if (temp && typeof temp === 'object') {
        result[key] = dp(temp);
      } else {
        // 否则直接赋值给新对象
        result[key] = temp;
      }
    }
    return result;
  }
  return dp(obj);
}

/**
 * 按对象数组中元素某一属性对数组元素进行 降序
 * 传入对象的属性，字符串格式
 * 例如 this.list.sort(ascending("id"));
 */
export function descending(field ) {
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
  return new Promise(resolve =>
    setTimeout(() => resolve(res), 0.5 * 1000));
}


