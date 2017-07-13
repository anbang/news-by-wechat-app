//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '立即体验',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../home/index'
    // })
    wx.redirectTo({
      url: '../home/index'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    console.log(app.globalData.userInfo)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
