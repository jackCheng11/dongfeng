// pages/games/games.js
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
    navBarHeight: app.globalData.navBarHeight,
    requestUrl: app.globalData.requestUrl,
    SwiperImg: [],
    infoData: [],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGamesList()
    this.getSwiperList()
    // 
  },
  getGamesList(){
    let that = this;
    post("/user/getRank", {
      id: wx.getStorageSync('id'),
    }, function(res){
      that.setData({
        infoData: res.data.data.userList.list
      })
    })
  },
  getSwiperList(){
    let that = this;
    post("/user/getRoundImages", {}, function(res){
      res.data.data.forEach(function(ele){
        ele.imageUrl = app.globalData.requestUrl + "static/" + ele.imageUrl
      })
      that.setData({
        SwiperImg: res.data.data
      })
    })
  },
  gamesBtn(){
    wx.navigateTo({
      url: '/pages/webView/webView',
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