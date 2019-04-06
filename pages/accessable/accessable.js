var array = [];
Page({
  data: {
    book: [],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.fetch();
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
    array.length = 0;
    // 页面关闭
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
  jumpBtn:function(options){
    var id = options.target.id;
    console.log("这个id是"+id);
    wx.navigateTo({
      url: '../pingjiabiao/pingjiabiao?id='+id,
    })
  }
})