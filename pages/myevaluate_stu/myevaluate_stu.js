//var Bmob = require('../../utils/bmob.js');
var array = [];
Page({
  data: {
    evaluate_contant: ['商品评价', '满意程度'],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/star1.png',
    selectedSrc: '../../images/star3.png',
    halfSrc: '../../images/star3.png',
    score: 0,
    scores: [0, 0, 0],
    infofromstorage:'',
    comment:[],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.fetch();
    var _this = this;

    //获取

    try {
      var comment = wx.getStorageSync('comment')
      var that=this;
      var value = wx.getStorageSync('infofrominput')
      if (comment) {
        // Do something with return value
        //打印获取数据
        console.log("获取成功")
        //给原来数据赋值
        this.setData({
          comment:comment,
       
        })
        console.log(comment);
        console.log(goods);
        console.log(satisfaction)
      }else{
        console.log('获取失败')
      }
    } catch (e) {
      // Do something when catch error
    }
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