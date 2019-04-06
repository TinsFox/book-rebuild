Page({
  data: {
    plan:[],
  },
  showitem: function (e) {
    let plan=this.data.plan
    for(let i=0;i<plan.length;i++){
      if (plan[i].id == e.target.dataset.id){
        plan[i].open = !plan[i].open;
      }    
    }
    this.setData({
      plan: this.data.plan
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    let query = new wx.BaaS.Query()
    // 应用查询对象
    let Product = new wx.BaaS.TableObject("plan")
    Product.setQuery(query).find().then(res => {
      // success
      console.log(res.data)
      this.setData({
        plan:res.data.objects
      })
      console.log(this.data)
    }, err => {
      // err
    });
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
    
  }
})
