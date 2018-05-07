import { article } from './containers/index';
let frombuy = false;
let pageConfig = Object.assign({}, {
    onLoad(options) {
      
        frombuy = options.frombuy;
        this.doGetActicleData(options.id || 90);
    },
    onReachBottom() { },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    onUnload:function(){
      
        //如果从购买界面返回的，直接返回到数联帮列表页
        if(frombuy == 1){
          
            wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
            
            })
        }
    }
}, {});


Page(article(pageConfig));
