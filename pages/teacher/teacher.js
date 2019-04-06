// pages/interface/index.js
//var common = require("../../utils/common.js");
var grids = [
  { "name": "录入教材信息", "ico": "edits.png", "url": "../addbook/addbook" },
  { "name": "查看教材信息 ", "ico": "book.png", "url": "../bookList/bookList" },
  { "name": "评价教材", "ico": "edit.png", "url": "../bookList/bookList" }
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: grids,
  },
  onLoad: function () {
    wx.checkSession({
      success: function () {
        //session_key 未过期，并且在本生命周期一直有效
        if (wx.getStorageSync('user_id') == '') {
          wx.clearStorageSync()
          wx.reLaunch({
            url: '../login/login'
          })
        }
      },
      /*fail: function (e) {
        //登录态失效时清空缓存重新登录
        console.log(e);
        wx.clearStorageSync()
        wx.reLaunch({
          url: '../login/login'
        })
      }*/
    })
  }
})