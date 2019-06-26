
import Taro from '@tarojs/taro'

const RequestAPI = (url, data, header, method, success, fail, complete = () => {
  console.log(`${url} 数据请求完成`)
}, dataType = 'json', responseType = 'text') => {
  url = 'https://www.yangfugui.com/ordering/api/' + url
  header = {
    ...header,
    "Accept": "application/json",
    "content-type": "application/x-www-form-urlencoded",
  }
  Taro.request({
    url,
    data,
    header,
    method,
    dataType,
    responseType
  }).then(res => {
    if (res.statusCode === 200 && res.data.status === '200' && success) {
      success(res.data.data)
    }
  }).catch(err => {
    if (typeof fail === 'function' && fail) {
      fail(err)
    }
  }).finally(() => {
    if (typeof complete === 'function' && complete) {
      complete()
    }
  })
}

export {
  RequestAPI
}