
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radios: [
      { name: 'product', value: '功能建议', checked: 'true' },
      { name: 'bug', value: '程序错误' },
      { name: 'tease', value: '吐槽' },
    ]
  },
  /**
   * 意见反馈选择改变
   */
  radioChange: function (e) {
    var _this = this;
    var _index = e.target.dataset.index;
    _this.setData({

    })
    console.log(_this.data.radios[_index]);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  //设置反馈内容
  setContent: function (e) {
    var that = this;
    that.setData({
      opinion: e.detail.value
    })
  },
  //提交反馈内容
  submitOpinion: function(e){
    var that = this;
    var op=this.data.opinion;
    console.log(op)
    if(!that.data.opinion){
      wx.showModal({
        title: '未填写意见',
        image: '../../images/warning.png',
        duration: 2000
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '是否反馈意见',
        success: function(res){
          if(res.confirm){
            let tableID = 53896
            let Product = new wx.BaaS.TableObject(tableID)
            let product = Product.create()
            // 设置方式一
            let apple = {
              suggestion:op
            }
            product.set(apple).save().then(res => {
              // success
              console.log(res.data)
            }, err => {
              // err
            })
            wx.showModal({
              title: '通知',
              content: '我们收到您的反馈会及时联系您，感谢您的参与！',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  wx.navigateBack({
                    delta: 1
                  })
                }
              }
            })
          }else if(res.cancel){
          }
        }
      })
    }


  }
})