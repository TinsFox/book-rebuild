//var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    book: [],
    plan: [{
      'num': '',
      'bookname': '',
      'press': '',
      'ISBN': '',
      'author': '',
      'edition': '',
      'publishedtime': '',
      'price': ''
    }],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.queryAllBorrowBooks();
    //获取本地缓存的教学计划数据
    console.log(options);
    let plan = JSON.parse(options.planStr);
    console.log(plan);
    this.setData({ plan: plan })

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
  },
  queryAllBorrowBooks: function () {
    var that = this;
    const query = Bmob.Query("textbook_info");
    query.find().then(res => {
      //console.log(res)
      that.setData({
        book: res
      })
    });
  },

})