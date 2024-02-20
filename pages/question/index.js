// pages/question/index.js
const datas = require('./2.js')
// console.log(datas.a)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:datas.a,
    errorsets:[],
    i:1,
    colorvalue:['lightyellow','lightyellow','lightyellow','lightyellow','lightyellow','lightyellow']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({i:Math.round(Math.random()*(this.data.datas.length))})
    console.log(this.data.i)
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
    var errorseq = wx.getStorageSync("errorsets");
    if(errorseq == ''){
      errorseq = []
    }
    var curerror = Array.from(new Set(this.data.errorsets.concat(errorseq)))
    wx.setStorageSync('errorsets', curerror)
    // console.log('errorsets=',curerror)
  },

  jump(event){
    // console.log(this.datas.GOODS)
    var len = this.data.datas[this.data.i].length
    var seq = 0
    // console.log(this.data.datas[this.data.i])
    // console.log('a',this.data.datas[this.data.i][len-1],'d')
    switch (this.data.datas[this.data.i][len-1].trim()){
      case 'A': seq = 1;break;
      case 'B': seq = 2;break;
      case 'C': seq = 3;break;
      case 'D': seq = 4;break;
      default: console.log('none');break;
    }
    // console.log('seq=',seq)
    this.data.colorvalue.forEach((value,index)=>{this.data.colorvalue[index]='red'})
    // var changevalue =  this.data.colorvalue[seq];
    this.data.colorvalue[seq] = '#5cb85c';
    this.setData({colorvalue:this.data.colorvalue})
    // console.log('tapvalue=',event.currentTarget.dataset.tapvalue)
    if(seq!==event.currentTarget.dataset.tapvalue){
     this.data.errorsets.unshift(this.data.i)
    }
    // if(event.currentTarget.dataset.tapvalue)
    // console.log('colorvalue=',changevalue)
  //  var dom = wx.createSelectorQuery()
  //  console.log('dom=',dom.selectAll('.option').boundingClientRect()) 
  var that = this
  setTimeout(function () {
    that.setData({i:Math.round(Math.random()*(that.data.datas.length))})
    that.data.colorvalue.forEach((value,index)=>{that.data.colorvalue[index]='lightyellow'})
    that.setData({colorvalue:that.data.colorvalue})
  }, 800)
    
    // this.data.colorvalue.forEach((value,index)=>{this.data.colorvalue[index]='yellow'})
    // console.log('colorvalue=',this.data.colorvalue)
  }
})