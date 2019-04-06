var array = [];
Page({

  data: {
    book:[],
    evaluate_contant: ['商品评价', '满意度'],
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../images/star1.png',
    selectedSrc: '../../images/star3.png',
    halfSrc: '../../images/star3.png',
    score: 0,
    scores: [0, 0, 0],
  
    comment: []
   
  },
  onLoad: function (options) {
    // console.log(option.query)
    var bean=options.id;
    console.log("获取到的id是"+options.id);
    this.setData({
      bean:bean
    })
  },


  //获取输入值

  searchInputEvent: function (e) {
    var infofrominput=e.detail.value
    this.setData({
      infofrominput: infofrominput
    })
     

  },

  // 提交事件
  submit_evaluate: function (e) {
    var obj = {};
    obj.id = this.data.bean;
    obj.information = this.data.infofrominput;
    obj.goods = this.data.scores[0];
    obj.satisfaction = this.data.scores[1];
    array.push(obj);
    this.setData({
      "comment": array
    })
    var comment=this.data.comment;
    console.log(comment);

    let tableID = 53565;
    let Product = new wx.BaaS.TableObject(tableID);
    let product = Product.create();

    let book_comment = {
      id : this.data.bean,
      star : this.data.scores[0],
      good : this.data.scores[1],
      comment: this.data.infofrominput,
    }
    product.set(book_comment).save().then(res => {
      // success
      console.log(book_comment);
      console.log("添加成功")
    }, err => {
      // err
    })

    try {
      wx.setStorageSync('comment',comment)
    } catch (e) {
    }
   

    wx.showModal({
      title: '提示',
      content: '确认提交评价',
      success: function (res) {

        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定');

          wx.showModal({
            title: '评价成功',
            content: '',
            success: function(res){
              if(res.confirm){
                wx.switchTab({
                  url: '../function/function',
                })
              }else{
                wx.switchTab({
                  url: '../function/function',
                })
              }
            }
          })
        } else {//这里是点击了取消以后

          console.log('用户点击取消')

        }

      }

    })
    console.log('商品评价' + this.data.scores[0])
    console.log('满意度' + this.data.scores[1])
    console.log('评价得分' + this.data.scores)
  },
  

  //点击左边,半颗星
  selectLeft: function (e) {
    var score = e.currentTarget.dataset.score
    if (this.data.score == 0.5 && e.currentTarget.dataset.score == 0.5) {
      score = 0;
    }

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })

  },

  //点击右边,整颗星
  selectRight: function (e) {
    var score = e.currentTarget.dataset.score

    this.data.scores[e.currentTarget.dataset.idx] = score,
      this.setData({
        scores: this.data.scores,
        score: score
      })
  },

  //判断得分
  get_score: function (e){
    var score = e.currentTarget.dataset.score

    if(score){

    }
  }

})