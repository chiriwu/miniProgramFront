// pages/errorq/index.js
const question = require('../question/2.js').a
const history_datas = require('../question_history/history.js').a
Page({

  /**
   * 页面的初始数据
   */
  data: {
    errorsets:[],
    manage_flag:false,
    errorseq:[]
    // question:question
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('len=',question.length)
    var len = question.length
    const errorseq = wx.getStorageSync("errorsets");
    this.setData({errorseq:errorseq})
    var errorsets= []
    for(var i = 0; i < errorseq.length; i++){
      if(errorseq[i]>=len){
        errorsets.push(history_datas[errorseq[i]-len])
      }else{
        errorsets.push(question[errorseq[i]])
      }
      
    }
    this.setData({errorsets:errorsets}) 
    // console.log('errorsets in errors =',errorsets) 
    // console.log('errorseq=',errorseq)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('typeof(errorsets)=',typeof(this.data.errorseq))
    wx.setStorageSync('errorsets',this.data.errorseq);
    console.log('this.data.errorsets=',this.data.errorseq)
  },

  jumppage: function(event){
    console.log('112=',event.currentTarget.dataset.snumber)
    console.log('helo=',this.data.errorsets[event.currentTarget.dataset.snumber])
    wx.navigateTo({
      url: "/pages/singleerr/index?erroritem="+this.data.errorsets[event.currentTarget.dataset.snumber],
      events:{
        hello:'world',
        erroritem:'123'
      }
    })
  },
  manage(){
    this.setData({manage_flag:!this.data.manage_flag})
  },
  del(e){

    console.log(e.currentTarget.dataset.seq)
    // console.log(this.data.errorsets)
    this.data.errorsets.splice(e.currentTarget.dataset.seq,1)
    this.setData({errorsets:this.data.errorsets})
    this.data.errorseq.splice(e.currentTarget.dataset.seq,1)
    this.setData({errorseq:this.data.errorseq})
    // this.data.errorsets
  }
})