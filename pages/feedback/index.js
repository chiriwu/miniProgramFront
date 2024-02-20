// pages/help/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:''
  },
  inputevent(e){
    console.log('hello=',e.detail.value)
    this.setData({content:e.detail.value})
  },
  sendcontent(){
    var that = this
    if(that.data.content !== ''){
      wx.request({
        url: 'https://www.wjx666.top:3000/sendcontent', //仅为示例，并非真实的接口地址
        data: {
          content:that.data.content
        },
        success (res) {
            wx.showModal({
              title:'提示',
              content:'发送成功',
              success(res){
                wx.redirectTo({ 
                  url: '/pages/index/index'
                })
              }
            })
          },
        fail(err) {
          wx.showModal({
            title:'提示',
            content:err.errMsg,
          })
        }
      })
    }else{
      wx.showModal({
        title:'提示',
        content:'请输入反馈内容',
      })
    }

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

  }
})