// pages/upload/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modulename: '',
    myitems: '',
    backenddata:'',
    flag:false,
    savepath:'',
    up_success_flag:false,
    local_file_name:'',
    virtual_name:'',
    multiArray:['A','B'],
    style_index:0
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

  },
  getname:function(e){
    this.setData({modulename:e.detail.value})
    console.log(e.detail.value)
    console.log('typeof(modulename)=',typeof(this.data.modulename))
  },
  upup:function(){
    var that = this
    wx.chooseMessageFile({
      count: 1,
      type: 'all',
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles
        console.log(tempFilePaths)
        that.setData({local_file_name:tempFilePaths[0].name,up_success_flag:true,virtual_name:tempFilePaths[0].path})

      }
    })
  },
  convert: function(){
    if(this.data.modulename.trim() == ''){
      wx.showModal({
        title:'提示',
        content:'未填类别名称'
      })
    }else if(this.data.virtual_name == ''){
      wx.showModal({
        title:'提示',
        content:'请选择上传文件'
      })
    }else{
      var that = this
      var cururl = ''
      if(this.data.style_index == 0){
        cururl = 'https://www.wjx666.top:3000/file/0'
      }else if (this.data.style_index == 1){
        cururl = 'https://www.wjx666.top:3000/file/1'
        // cururl = 'http://localhost:3000/file/1'
      }
      wx.uploadFile({
        url: cururl, //地址
        filePath: this.data.virtual_name,
        name: 'file',
        formData: {
          'user': 'test'
        },
        success (res){
          // const data = res.data
          // console.log('data=',res.data)
          // console.log('this=',that)
          // console.log('modulename=',that.data.modulename)
          // that.setData({backenddata:data})
          // 在这里判断一下填的名称不要与之前的重名 ，并保存到缓存
          wx.setStorageSync(that.data.modulename, res.data)
          
          var temp = wx.getStorageSync('myitems')
          if(temp == ""){temp = []}
          temp = temp.concat(that.data.modulename)
          wx.setStorageSync('myitems',temp)
          // var errorseq = wx.getStorageSync("errorsets");
          // var curerror = Array.from(new Set(this.data.errorsets.concat(errorseq)))
          // wx.setStorageSync('errorsets', curerror)
          // console.log('errorsets=',curerror)
          wx.showModal({
            title:'提示',
            content:'转换成功',
            success(res){
              wx.navigateTo({ 
                url: '/pages/index/index'
              })
            }
          })

        },
        fail (err){
          //在这写一个弹窗 读写失败
          // console.log('err=',err)
          wx.showModal({
            title:'提示',
            content:err.errMsg
          })
        }
      })
      } 
  },
  output(){
    // console.log('hello wolrld')
    wx.navigateTo({ 
      url: '/pages/help/index'
    })
  },
  file_norm(){
    wx.navigateTo({ 
      url: '/pages/filenorm/index'
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      style_index: e.detail.value
    })
  },
})