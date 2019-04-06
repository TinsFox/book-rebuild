//var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    phone: '',
    password: ''
  },
  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  // 登录
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '帐号和密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      let query = new wx.BaaS.Query();
      query.compare('user_id','=',2018002);
      let Product = new wx.BaaS.TableObject("users");
      Product.setQuery(query).find().then(res => {
        if (this.data.password == res[0].passwd) {
          wx.login({
            success: function () {
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000
              })
              //缓存用户信息
              try {
                wx.setStorageSync('user_id', res[0].id)
                wx.setStorageSync('phonenumber', res[0].phonenumber)
                wx.setStorageSync('name', res[0].name)
                wx.setStorageSync('manage', res[0].manage)
                wx.setStorageSync('identity', res[0].identity)
              } catch (e) {

              }
              if (res[0].manage == 0) { //学生登陆
                wx.switchTab({
                  url: '../function/function'
                }),
                  wx.showToast({
                    title: '欢迎使用教材管理系统',
                    icon: 'none',
                    duration: 2000
                  })
                console.log("学生登陆成功")
              }
              if (res[0].manage == 5) { //教务员
                wx.switchTab({
                  url: '../function/function'

                }),
                  wx.showToast({
                    title: '欢迎使用教材管理系统',
                    icon: 'success',
                    duration: 2000
                  }),
                  console.log("教务员登陆成功")
              }
              if (res[0].manage == 3) { //教师
                wx.switchTab({
                  url: '../function/function',
                }),
                  wx.showToast({
                    title: '欢迎使用教材管理系统',
                    icon: 'success',
                    duration: 2000
                  }),
                  console.log("教师登陆成功")
              }
            }
          })
        } else (
          wx.showToast({
            title: '密码错误',
            icon: 'none',
            duration: 2000
          })
        )
      }).catch(err => {
        wx.showToast({
          title: '帐号不存在',
          icon: 'none',
          duration: 2000
        })
      });
    }
  }
})