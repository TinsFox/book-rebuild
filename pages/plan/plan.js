// pages/plan/plan.js
Page({
  /**
   * 页面的初始数据*/
  data: {
    plan: [{
      'classname':'',     //课程名称
      'classcode':'',     //课程代码
      'faculty': '',      //开课院系
      'grade': '',        //年级
      'qualification': '',//学历
      'major': '',        //专业
      'class': '',        //班级
      'credit': '',       //学分
      'period': '',       //课时
    }],
    hideModal: true,
  },
  formSubmit(e){
    this.setData({
      classname: e.detail.value.classname,//课程名称
      classcode: e.detail.value.classcode, //课程代码
      faculty: e.detail.value.faculty, //开课院系
      grade: e.detail.value.grade, //年级
      qualification: e.detail.value.qualification, //学历
      major: e.detail.value.major, //专业
      class: e.detail.value.class, //班级
      credit: e.detail.value.credit, //学分
      period: e.detail.value.period, //课时
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    try {
      let tableID = 53619
      let Product = new wx.BaaS.TableObject(tableID)
      let product = Product.create()

      let plane = {
        classname: e.detail.value.classname,//课程名称
        classcode: e.detail.value.classcode, //课程代码
        faculty: e.detail.value.faculty, //开课院系
        grade: e.detail.value.grade, //年级
        qualification: e.detail.value.qualification, //学历
        major: e.detail.value.major, //专业
        class: e.detail.value.class, //班级
        credit: e.detail.value.credit, //学分
        period: e.detail.value.period, //课时
        open:false,
      }
      product.set(plane).save().then(res => {
        console.log(res.data)
      }, err => {
        // err
      })
      console.log("上传成功")
    } catch (e) {
    }
    var obj = e.detail.value;
    var classname = obj.classname;
    var classcode = obj.classcode;
    var faculty = obj.faculty;
    var grade = obj.grade;
    var qualification = obj.qualification;
    var major = obj.major;
    var class_ = obj.class;
    var credit = obj.credit;
    var period = obj.period;
    if (classname.length <= 0 || classcode.length <= 0 || faculty.length <= 0 
    || grade.length <= 0 || qualification.length <= 0 || major.length <= 0 || 
    class_.length <= 0 || credit.length <= 0 || period.length <= 0) {
return
    }
    this.data.plan.push(obj);
    var update = this.data.plan;
    console.log(update);

  },
  //点击确认提交后的动作，弹窗检查信息
  clickCheck() {
    this.setData({
      'plan': this.data.plan,
      hideModal: false,
      hidetextarea: true, //隐藏textarea区域，否则弹窗层无法覆盖
    })
  },
  //关闭弹窗
  modalCancel(e) {
    console.log("关闭", e)
    this.setData({
      hideModal: true,
      hidetextarea: false, //隐藏textarea区域，否则弹窗层无法覆盖  
    })
    console.log("弹窗关闭")
  },
  modalSubmit(e) {
    this.setData({
      'classname': wx.getStorageSync('classname'),
      'classcode': wx.getStorageSync('classcode'),
      'faculty': wx.getStorageSync('faculty'),
      'grade': wx.getStorageSync('grade'),
      'qualification': wx.getStorageSync('qualification'),
      'major': wx.getStorageSync('major'),
      'class': wx.getStorageSync('class'),
      'credit': wx.getStorageSync('credit'),
      'period': wx.getStorageSync('period'),
      hideModal: true,
      hidetextarea: false,
    })
    wx.switchTab({
      url: '../function/function',
    })
    //缓存数据到本地
    console.log("确认提交")
    //获取缓存内容打印确认、
    try {
      var value1 = wx.getStorageSync('classname')
      var value2 = wx.getStorageSync('classcode')
      var value3 = wx.getStorageSync('faculty')
      var value4 = wx.getStorageSync('grade')
      var value5 = wx.getStorageSync('qualification')
      var value6 = wx.getStorageSync('major')
      var value7 = wx.getStorageSync('class')
      var value8 = wx.getStorageSync('credit')
      var value9 = wx.getStorageSync('period')
      if (value1 && value2 && value3 && value4 && value5 && value6) {
        console.log(value1, value2, value3, value4, value5, value6)
        // Do something with return value
      } else {
        console.log("获取失败")
      }
    } catch (e) {
      // Do something when catch error
    }
  },
  clickCheck3() {
    wx.showModal({
      title: '提示',
      content: '是否一键录入教材信息',
      success: function (res) {
        if (res.confirm) {
          wx.showModal({
            title: '提示',
            content: '导入成功',
          })
          console.log("用户点击确定");
        } else {
          console.log("用户点击取消");
        }
      }
    })
  },


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

  }
})


