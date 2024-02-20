// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // myitems:'',
    myitems:[],
    manage_flag:false,
  },

  /**
   * 生命周期函数--监听页面加s载
   */
  onLoad: function (options) {
    var myitems = wx.getStorageSync("myitems");
    if((myitems.length==1)&&(myitems[0]=="")){
      myitems = []
    }
    this.setData({myitems:[].concat(myitems)})
    // console.log('this.data.myitems',this.data.myitems)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('typeof(myitems)=',typeof(this.data.myitems))
    wx.setStorageSync('myitems',this.data.myitems);
    console.log('this.data.myitems=',this.data.myitems)
  },


  manage(){
    this.setData({manage_flag:!this.data.manage_flag})
  },
  exit_manage(){
    this.setData({manage_flag:false})
  },
  jump_item(event){
    wx.navigateTo({ 
      url: '/pages/myquestion/index?itemname='+event.currentTarget.dataset.itemname
    })
  },
  del(e){
    console.log(e.currentTarget.dataset.seq)
    // console.log(this.data.errorsets)
    wx.removeStorageSync(this.data.myitems.splice(e.currentTarget.dataset.seq,1)[0])
    // this.data.myitems.splice(e.currentTarget.dataset.seq,1)
    this.setData({myitems:this.data.myitems})
    
    // this.data.myitems.splice(e.currentTarget.dataset.seq,1)
    // this.setData({myitems:this.data.myitems})
    // this.data.errorsets
  }
})