//var Bmob = require('../../utils/bmob.js');
var array = [];
var array1 = [];
Page({
  data: {
    book: [],
    book_message: [],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.fetch();
    var bean = options.id;
    console.log("获取到的id是" + options.id);
    this.setData({
      bean: bean
    })
    var obj = {};
    obj.id = bean;
    array1.push(obj);
    this.setData({
      "book_message": array1
    })
    var book_message = this.data.book_message;
    console.log(book_message)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
    array.length = 0;
    array1.length = 0;
  },
  moredetails: function () {
    wx.navigateTo({
      url: '../moredetails/moredetails',
    })

  },
  fetch: function () {
    let query = new wx.BaaS.Query()
    let tableID = 53564;
    let Chord = new wx.BaaS.TableObject(tableID)
    Chord.setQuery(query).find().then(res => {
      //success
      console.log(res.data.objects);
      for (var i = 0; i < res.data.objects.length; i++) {
        array.push(res.data.objects[i]);
      }
      this.setData({
        book: array
      })
    }, err => {
      //err
    })
  },
})