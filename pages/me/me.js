// pages/interface/index.js
//个人中心
var student;
var teacher;
var ac;
var grids = []
var student = [
  //学生
  { "name": "已购教材", "ico": "database.png", "url": "../yigou/yigou" },
  { "name": "我的评价", "ico": "edit.png", "url": "../myevaluate_stu/myevaluate_stu" },
  { "name": "意见反馈", "ico": "edit.png", "url": "../suggestion/suggestion" },
  // { "name": "退出登录", "ico": "getInfo.png", "url": "../clearLogin/clearLogin"},
];
var teacher = [
  //教师
  { "name": "我的教材", "ico": "edits.png", "url": "../mybook/mybook" },
  { "name": "我的评价", "ico": "edit.png", "url": "../myevaluate_stu/myevaluate_stu" },
  { "name": "意见反馈", "ico": "edit.png", "url": "../suggestion/suggestion" },
  // { "name": "退出登录", "ico": "getInfo.png", "url": "../clearLogin/clearLogin" }
];
var ac = [
  //教务员
  { "name": "查询订购情况", "ico": "edits.png", "url": "../List/List" },
  { "name": "审核教材信息", "ico": "edits.png", "url": "../audit/audit" },
  { "name": "审核清单 ", "ico": "book.png", "url": "../stader/stader" },
  { "name": "查看教学计划 ", "ico": "book.png", "url": "../teacherplan/teacherplan" },
  { "name": "查看教材信息 ", "ico": "book.png", "url": "../bookmessage/bookmessage" },
  { "name": "意见反馈", "ico": "edit.png", "url": "../suggestion/suggestion" },
  // { "name": "退出登录", "ico": "getInfo.png", "url": "../clearLogin/clearLogin" }
];
var leader = [
  //领导
  // { "name": "查看教学计划 ", "ico": "book.png", "url": "../teacherplan/teacherplan" },
  // { "name": "查看教材信息 ", "ico": "book.png", "url": "../bookmessage/bookmessage" },
  // { "name": "退出登录", "ico": "getInfo.png", "url": "../clearLogin/clearLogin" }
];

Page({
  data: {
    grids: grids,
    other: [
      { "name": "退出登录", "ico": "getInfo.png", "url": "exit" }
    ]
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
      }
    })
    var value = wx.getStorageSync('manage')
    console.log(value)
    //学生
    if (value == 0) {
      this.setData({
        grids: student
      })
    }
    //教师
    if (value == 3) {
      this.setData({
        grids: teacher
      })
    }
    //教务员
    if (value == 5) {
      this.setData({
        grids: ac
      })
    }
    //领导
    if (value == 1) {
      this.setData({
        grids: leader
      })
    }
  },
  exit: function(){
    wx.showModal({
      title: '退出登录',
      content: '请选择',
      success: function (res) {
        if (res.confirm) {
          wx.clearStorageSync()
          wx.reLaunch({
            url: '../login/login'
          })
        } else if (res.cancel) {
          wx.navigateBack();
        }
      }
    })
  }
})