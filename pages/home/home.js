var student;
var teacher;
var ac;
var grids=[]
 var student = [
  //学生
  { "name": "教材一览", "ico": "show.png", "url": "../bookList/bookList" },
  { "name": "教材订购", "ico": "footer-icon-03.png", "url": "../shopcar/shopcar" },
  { "name": "教材评价", "ico": "evaluation.png", "url": "../accessable/accessable" }
];
var teacher=[
  //教师
  { "name": "查看教材信息 ", "ico": "show.png", "url": "../bookList/bookList" },
  { "name": "选用教材", "ico": "choseCopy.png", "url": "../choice/choice" },
  { "name": "评价教材", "ico": "evaluation.png", "url": "../accessable/accessable" }
];
var ac=[
  //教务员
  { "name": "录入教学计划", "ico": "录入.png", "url": "../plan/plan" },
  { "name": "录入教材信息", "ico": "录入2.png", "url": "../addbook/addbook" },
  { "name": "查询订购情况", "ico": "查询.png", "url": "../List/List" },
  { "name": "审核教材信息", "ico": "审核.png", "url": "../audit/audit" },
  { "name": "审核清单 ", "ico": "6已审核清单.png", "url": "../stader/stader" },
  { "name": "查看教学计划", "ico": "show.png", "url": "../look_plan/look_plan" },
];
var leader=[
  //领导
  { "name": "查看教学计划", "ico": "show.png", "url": "../look_plan/look_plan" },
  { "name": "查看教材信息 ", "ico": "查看.png", "url": "../bookList/bookList" },
  { "name": "审核教材 ", "ico": "审核.png", "url": "../audit/audit" },
];
Page({
  data: {
    grids:grids
  },
  onLoad: function () {
    // wx.checkSession({
    //   success: function () {
    //     //session_key 未过期，并且在本生命周期一直有效
    //   }
    // })
    if (wx.getStorageSync('user_id') == '') {
      wx.clearStorageSync()
      wx.reLaunch({
        url: '../login/login'
      })
    }
    var value = wx.getStorageSync('manage')
    //学生
    if(value==0){
      this.setData({
        grids:student
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
    }
})