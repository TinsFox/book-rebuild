// page/component/new-pages/cart/cart.js
const app = getApp();   
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    carts: [], // 购物车列表
    hasList: false, // 列表是否有数据
    totalPrice: 0, // 总价，初始为0
    selectAllStatus: true // 全选状态，默认全选
  },
  submit: function () {
    wx.navigateTo({
      url: '/pages/scar/order/index'
    })
  },
  onShow() {
    // 实例化查询对象
    let query = new wx.BaaS.Query()
    // 应用查询对象
    let Product = new wx.BaaS.TableObject("book_info")
    Product.setQuery(query).find().then(res => {
      console.log(res.data)
      // success
      this.setData({
        hasList: true,
        carts: res.data.objects
      })
    }, err => {
      // err
    });
    this.getTotalPrice();
  },
  minibtn: function() {
    wx.showModal({
      title: '提示',
      content: '是否购买',
      success: function(res) {
        if (res.confirm) {
          //这里是点击了确定
          wx.showModal({
            title: '提示',
            content: '购买成功，是否返回首页',
            success: function(res) {
              if (res.confirm) {
                wx: wx.switchTab({
                  url: '../function/function',
                }),
                console.log('购买成功')
              }
            }
          })
        } else {
          //这里是点击了取消
          wx.showModal({
            title: '提示',
            content: '购买取消',
          })
          console.log('用户取消购买')
        }
      },
      complent: function() {}
    })
  },
  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },
  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  },
  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let count = carts[index].count;
    count = count + 1;
    carts[index].count = count;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let count = carts[index].count;
    if (count <= 1) {
      return false;
    }
    count = count - 1;
    carts[index].count = count;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts; // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
      if (carts[i].selected) { // 判断选中才会计算价格
        total += carts[i].count * carts[i].price; // 所有价格加起来
      }
    }
    this.setData({ // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  }
})