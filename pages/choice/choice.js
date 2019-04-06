//var Bmob = require('../../utils/bmob.js');
var array = [];
Page({
  data: {
    book: [],
    storage:[],
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
    // 页面关闭
    array.length = 0;
  },
  moredetails: function () {
    wx.navigateTo({
      url: '../moredetails/moredetails',
    })

  },
  choice: function () {
    var that = this;
    let book = that.data.book;
    let book2 = [];
    let book3 = [];
    wx.showModal({
      title: '提示',
      content: '是否选用',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          wx.setStorage({
            key: 'stroage',
            data: 'book',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })

          for (let i = 0; i < book.length; i++) {
            if (book[i].checked == false) {
              book2.push(book[i]);
            }
            if (book[i].checked == true) {
              book3.push(book[i]);
            }
          }
          that.setData({
            book: book2,
            middlebook: []
          })

          let tableID = 53819;
          let Product = new wx.BaaS.TableObject(tableID);
          let product = Product.create();

          for(var i = 0; i < book3.length; i++){
            let book_message = {
              book_name: book3[i].book_name,
              author: book3[i].author,
              price: book3[i].price,
              pd_price: book3[i].pd_price,
              class: book3[i].class,
              image: book3[i].src.path,
            }
            product.set(book_message).save().then(res => {
              // success
              console.log(book_message);
              console.log("添加成功")
            }, err => {
              // err
            })
          }

          

          console.log('选用成功')
          console.log(book3)
        } else {//这里是点击了取消以后
          
          console.log('用户取消选用')
        }
      }
    })
    console.log('选用结束')
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
  // 选用
  management: function () {
    let that = this;
    let book = that.data.book;
    let book2 = [];
    for (let i = 0; i < book.length; i++) {
      book[i].checked = false;
      book2.push(book[i]);
    }
    that.setData({
      book: book2,
    })
    that.setData({
      management_good: true,
      select_all: false,
    })
  },
  finish_management: function () {
    let that = this;
    that.setData({
      management_good: false,
    })
  },


  // 选择
  select: function (e) {
    var that = this;
    let book2 = [];
    if (that.data.management_good == false) {
      return;
    } else {
      var book = that.data.book;
      var index = e.currentTarget.dataset.id;
      book[index].checked = !book[index].checked;
      console.log(book);

      for (let i = 0; i < book.length; i++) {
        if (book[i].checked) {
          book2.push(book[i])
        }
      };
      that.setData({
        book: book,
        middlebook: book2
      })
    }
  },

  // 全选
  select_all: function () {
    let that = this;
    console.log("全选")
    that.setData({
      select_all: !that.data.select_all
    })
    if (that.data.select_all) {
      let book = that.data.book;
      let book2 = [];
      for (let i = 0; i < book.length; i++) {
        if (book[i].checked == true) {
          book2.push(book[i]);
        } else {
          book[i].checked = true;
          book2.push(book[i]);
        }
      }
      that.setData({
        book: book2,
        middlebook: book2
      })
    }
  },
  // 取消全选
  select_none: function () {
    let that = this;
    console.log("取消全选")
    that.setData({
      select_all: !that.data.select_all
    })
    let book = that.data.book;
    let book2 = [];
    for (let i = 0; i < book.length; i++) {
      book[i].checked = false;
      book2.push(book[i]);
    }
    that.setData({
      book: book2,
      middlebook: []
    })
  },





})