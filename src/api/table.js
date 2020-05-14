import request from '@/utils/request'
import {timeout} from "@/utils/base";

export function _getBasicTableList() {
  let res = {
    "code": 0, //成功
    "msg": "success",
    "data": [
      {name: '111', enable: 0,status:0}
    ]
  }
  for (let i =0;i<=99;i++){
    res.data.push({
      name:''+i,
      enable: 1,
      status:1
    })
  }
  return timeout(res)
  // return request({
  //   url: `/defineRule`,
  //   method: 'get',
  // })
}
