// app.js
App({
  onLaunch() {
    this.getSystemInfo()
    console.log(wx.getMenuButtonBoundingClientRect() )
  },
  getSystemInfo(){
    let that = this
    wx.getSystemInfo({
      success: (res) => {
        const menuBottonObject = wx.getMenuButtonBoundingClientRect()
        const menuHeight = menuBottonObject.top - res.statusBarHeight
        that.globalData.navBarHeight = res.statusBarHeight + menuBottonObject.height + menuHeight * 2
        that.globalData.menuButtonHeight = menuBottonObject.height + menuHeight * 2
        that.globalData.statusBarHeight = res.statusBarHeight
      },
    })
  },
  globalData: {
    userInfo: null,
    statusBarHeight: undefined,
    navBarHeight: undefined,
    menuButtonHeight: undefined
  }
})
