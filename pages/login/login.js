// pages/login/login.js
const {
  get,
  post
} = require("../../utils/request");

//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    
  },
  loginBtn(){
    let that = this;
    console.log(that.data.username)
    console.log(that.data.password)
    post("/user/login", {
      name: that.data.username,
      num: that.data.password
      // mobile: "15907150841",
      // name: "张华",
      // office: "焊装二科",
      // factory: "2",
      // num: "021482",
    }, function(res){
      console.log(res)
      if(res.data.status == 200){
        console.log(res.data.data.id)
        wx.setStorageSync('id', res.data.data.id)
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    })
  },
  onChangeName(e){
    console.log(e)
    this.setData({
      username: e.detail
    })
  },
  onChangePwd(e){
    console.log(e)
    this.setData({
      password: e.detail
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})