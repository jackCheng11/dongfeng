function request(url, method = 'GET', data = {}, success = function() {}) {
  let globalData = getApp().globalData;
  //  data.token = globalData.token
  // data.weixin_token = globalData.weixin_token
  url = globalData.requestUrl + url // 默认token
  let mask = true;
  let title = '加载中'
  let header = {}
  if (method == 'GET') {
    mask = false; // 仅在post时显示遮罩层
    title = '操作中'
    header = {
      'content-type': 'application/json' // 默认值
    }
  } else {
    header = {
      'content-type': 'application/json' // 默认值
    }
    // header = {
    //   'content-type': 'application/x-www-form-urlencoded' // 默认值
    // }
  }
  header.cookie = wx.getStorageSync("sessionid")
  // wx.showLoading({
  //   title: '加载中',
  //   mask
  // })
  wx.request({
    url, //仅为示例，并非真实的接口地址
    method,
    data,
    header,
    success,
    
    fail: function(err) {
      // console.log(err) // 发现错误处理
    },
    complete: function() {
      // wx.hideLoading()
    }
  })
}

function get(url, data = {}, success = function() {}) {
  request(url, 'GET', data, success);
}

function post(url, data = {}, success = function() {}) {
  request(url, 'POST', data, success);
}

module.exports = {
  get: get,
  post: post,
}