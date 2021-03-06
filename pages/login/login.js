Page({
  data: {
    phone: '',
    password: '',
    tip:[
      { title: "测试帐号和密码", phone: "点击复制" },
      { title: "学生", phone: "2018008"},
      { title: "教师", phone: "2018009" },
      { title: "教务员", phone: "2018002" },
      { title: "领导", phone: "2018005" },
      { title: "统一密码", phone: "000000" },
    ]
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
      wx.showLoading({
        title: '正在登录',
      })
      let query = new wx.BaaS.Query();
      query.compare('user_id', '=', this.data.phone);
      let Product = new wx.BaaS.TableObject("users");
      Product.setQuery(query).find().then(res => {
        if (this.data.password == res.data.objects[0].passwd) {
          wx.login({
            success: function () {
              wx.hideLoading()
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000
              })
              //缓存用户信息
              try {
                wx.setStorageSync('user_id', res.data.objects[0].user_id)
                wx.setStorageSync('manage', res.data.objects[0].manage)
                wx.setStorageSync('identity', res.data.objects[0].identity)
              } catch (e) {

              }
              if (res.data.objects[0].manage == 0) { //学生登陆
                wx.switchTab({
                  url: '../home/home'
                }),
                  wx.showToast({
                    title: '欢迎使用教材管理系统',
                    icon: 'none',
                    duration: 2000
                  })
              }
              if (res.data.objects[0].manage == 5) { //教务员
                wx.switchTab({
                  url: '../home/home'
                }),
                  wx.showToast({
                    title: '欢迎使用教材管理系统',
                    icon: 'none',
                    duration: 2000
                  }),
                  console.log("教务员登陆成功")
              }
              if (res.data.objects[0].manage == 3) { //教师
                wx.switchTab({
                  url: '../home/home',
                }),
                  wx.showToast({
                    title: '欢迎使用教材管理系统',
                    icon: 'none',
                    duration: 2000
                  }),
                  console.log("教师登陆成功")
              }
              if (res.data.objects[0].manage == 1) { //领导
                wx.switchTab({
                  url: '../home/home',
                }),
                  wx.showToast({
                    title: '欢迎使用教材管理系统',
                    icon: 'none',
                    duration: 2000
                  }),
                  console.log("登陆成功")
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
  },
  CopyLink(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        })
      }
    })
  },
})