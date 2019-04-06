// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
  },
  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../accessable/accessable'
    })
  },
  toOrder2: function () {
    wx.navigateTo({
      url: '../yigou/yigou'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    //获取用户信息，升级需要引导获取
    /*app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })*/
  }
})
