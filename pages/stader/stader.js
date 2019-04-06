Page({
  data: {
    book: [],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    //this.queryAllBorrowBooks();

    // 实例化查询对象
    let query = new wx.BaaS.Query()
    // 应用查询对象
    let Product = new wx.BaaS.TableObject(54002)
    Product.setQuery(query).find().then(res => {
      // success

      this.setData({
        book: res.data.objects
      })
      console.log(res.data)
      console.log(this.data)
    }, err => {
      // err
    })
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
  toOrders: function () {
    wx.navigateTo({
      url: '../List/List'
    })
  // },
  //   util.request(options, (res, err) => {
  //     var books = [];
  //     for (var i = 0; i < res.data.result.length; i++) {
  //       books.push(res.data.result[i].value);
  //     }
  //     that.setData({
  //       bookList: books
  //     });
  //   });

  }
})