// pages/plan/plan.js
//教材录入
Page({
  /**
   * 页面的初始数据*/
  data: {
    plan: [{
      'num': "",
      'bookname': "",
      'press': "",
      'class':"",
      'ISBN': "",
      'author': "",
      'edition': "",
      'price': "",
      'publishedtime': "",
      'pd_price':""
    }],
    hideModal: true,
  },
  formSubmit: function(e) {
    this.setData({
      //输入数据赋值
      num: e.detail.value.num, //序号
      bookname: e.detail.value.bookname, //书名
      press: e.detail.value.press, //出版社
      class: e.detail.value.class,//选用院系
      ISBN: e.detail.value.ISBN, //ISBN
      author: e.detail.value.author, //作者
      edition: e.detail.value.edition, //版次
      publishedtime: e.detail.value.publishedtime, //出版时间
      price: e.detail.value.price //价钱
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    try {
      let tableID = 53564
      let Product = new wx.BaaS.TableObject(tableID)
      let product = Product.create()
      let apple = {
        num: e.detail.value.num,
        book_name: e.detail.value.bookname,
        price: e.detail.value.price,
        ISBN: e.detail.value.ISBN,
        class: e.detail.value.class,//选用院系
        author: e.detail.value.author,
        cbs: e.detail.value.press,
        time: e.detail.value.publishedtime,
        bc: e.detail.value.edition,
        price: e.detail.value.price
      }
      product.set(apple).save().then(res => {
        // success
        console.log(res.data)
      }, err => {
        // err
      })

    } catch (e) {

    }
  },
  //点击确认提交后的动作，弹窗检查信息
  clickCheck() {
    this.setData({
      hideModal: false,
      hidetextarea: true, //隐藏textarea区域，否则弹窗层无法覆盖
    })
  },

  clickCheck3(){
    wx.showModal({
      title: '提示',
      content: '是否一键录入教材信息',
      success:function(res){
        if(res.confirm){
          wx.showModal({
            title: '提示',
            content: '录入成功',
          })
          console.log("用户点击确定");
        }else{
          console.log("用户点击取消");
        }
      }
    })
  },
  //关闭弹窗
  modalCancel(e) {
    console.log("关闭", e)
    this.setData({
      hideModal: true,
      hidetextarea: false, //隐藏textarea区域，否则弹窗层无法覆盖  
    })
    console.log("弹窗关闭，返回修正")
  },
  modalSubmit(e) { //确认提交按钮
    wx.switchTab({
      url: '../function/function',
    })
    console.log("确认提交")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})