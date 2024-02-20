// pages/question/index.js
// console.log(datas.a)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:'',
    // errorsets:[],
    finish_flag:false,
    i:0,
    colorvalue:['lightyellow','lightyellow','lightyellow','lightyellow','lightyellow','lightyellow']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置datas
    this.setData({
      datas: JSON.parse(wx.getStorageSync(options.itemname))
    })
    //设置i
    this.setData({i:Math.round(Math.random()*(this.data.datas.length))})
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
    // var errorseq = wx.getStorageSync("errorsets");
    // var curerror = Array.from(new Set(this.data.errorsets.concat(errorseq)))
    // wx.setStorageSync('errorsets', curerror)
    // console.log('errorsets=',curerror)


  },

  jump(event){
    this.setData({finish_flag:true})

    var len = this.data.datas[this.data.i].length
    var seq = 0

    switch (this.data.datas[this.data.i][len-1].trim()){
      case 'A': seq = 1;break;
      case 'B': seq = 2;break;
      case 'C': seq = 3;break;
      case 'D': seq = 4;break;
      default: console.log('none');break;
    }
    console.log('seq=',seq)
    this.data.colorvalue.forEach((value,index)=>{this.data.colorvalue[index]='red'})
    // var changevalue =  this.data.colorvalue[seq];
    this.data.colorvalue[seq] = '#5cb85c';
    this.setData({colorvalue:this.data.colorvalue})
    console.log('tapvalue=',event.currentTarget.dataset.tapvalue)
    // if(seq!==event.currentTarget.dataset.tapvalue){
    //  this.data.errorsets.unshift(this.data.i)
    // }
    // if(event.currentTarget.dataset.tapvalue)
    // console.log('colorvalue=',changevalue)
  //  var dom = wx.createSelectorQuery()
  //  console.log('dom=',dom.selectAll('.option').boundingClientRect()) 
  // var that = this
  // setTimeout(function () {
  //   that.setData({i:Math.round(Math.random()*(that.data.datas.length))})
  //   that.data.colorvalue.forEach((value,index)=>{that.data.colorvalue[index]='lightyellow'})
  //   that.setData({colorvalue:that.data.colorvalue})
  // }, 800)
    
    // this.data.colorvalue.forEach((value,index)=>{this.data.colorvalue[index]='yellow'})
    // console.log('colorvalue=',this.data.colorvalue)
  },
  next(){
    this.setData({finish_flag:false})
    var that = this
    that.setData({i:Math.round(Math.random()*(that.data.datas.length))})
    that.data.colorvalue.forEach((value,index)=>{that.data.colorvalue[index]='lightyellow'})
    that.setData({colorvalue:that.data.colorvalue})
  }
})