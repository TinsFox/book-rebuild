// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '正在提交订单',
    })
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
    wx.hideLoading()
    wx.showModal({
      title: '购买确认',
      content: '是否购买',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '下单成功',
            duration: 2000,
            success: function() {
              setTimeout(function () {
                console.log("延迟调用============")
                wx.navigateBack({
                  delta: 1
                })
              }, 2000)
            
            }
          })

          if (res.cancel) {
            wx.navigateBack({
              delta: 1
            })
          }
        }
      }
    })
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