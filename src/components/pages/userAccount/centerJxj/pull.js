/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-24 17:11:14
 * @version $Id$
 */

/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-18 14:26:09
 * @version $Id$
 */
/*下拉刷新*/
import apis from  '../../../../api'
function loaded() {
    let pullUpEl = this.$refs.pullUp;
    let pullUpOffset = pullUpEl.offsetHeight;
    let pullDownEl = this.$refs.pullDown;
    let pullDownOffset = pullDownEl.offsetHeight;
    let wrap=this.$refs.wrapper;
    let self=this;
    let nextPage=self.nextPage;
    this.myScroll = new iScroll(wrap, {
        scrollbarClass: 'myScrollbar',
        useTransition: false,
        onRefresh: function () {
            if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
            }else if(pullDownEl.className.match('loading')) {
		      pullDownEl.className = '';
		      pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
		     } 
        },
        onScrollMove: function () {
           if (this.y > 5 && !pullDownEl.className.match('flip')) {
		      pullDownEl.className = 'flip';
		      pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
		      this.minScrollY = 0;
		     } else if (this.y < 5 && pullDownEl.className.match('flip')) {
		      pullDownEl.className = '';
		      pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
		      this.minScrollY = -pullDownOffset;
		     } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
		      pullUpEl.className = 'flip';
		      pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
		      this.maxScrollY = this.maxScrollY;
		     } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
		      pullUpEl.className = '';
		      pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
		      this.maxScrollY = pullUpOffset;
		     }
        },
        onScrollEnd: function () {
            let nextPage=self.nextPage;
            let more=self.more;
            if (pullUpEl.className.match('flip')) {
                if(more){
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                    self.loadData();
                }else{
                    pullUpEl.className = 'none';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '已无可加载的数据';
                }
                
            }else if(pullDownEl.className.match('flip')){
            	if(more){
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                    self.loadData();
                }else{
                    pullDownEl.className = 'none';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '已无可加载的数据';
                }
            	
            }
        }
    });

}
//初始化绑定iScroll控件
// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
// document.addEventListener('DOMContentLoaded', loaded, false);
function loadData(getall){  

            var that=this;
            let params = {
                api: apis.gift,
                param: {
				    pageNum:this.pageNum, 
				    numPerPage:this.numPerPage,
				    getall:getall?true:false,// 不追加 是重新获取当前页码的值
                }
            };
            this.api.post(params)
			  .then(function (response) {
			    if(response.data.code==='200'){
                   that.success(response.data.msg)
                   that.datalist=getall?response.data.data:that.datalist.concat( response.data.data); //追加或者替换
                   if(getall){
                       if(response.data.data.length<that.numPerPage*that.pageNum){
	                     that.more=false;
	                     
	                   }else{
	                     that.more=true;
	                   }
                   }else{
                       if(response.data.data.length<that.numPerPage){
	                     that.more=false; 
	                   }else{
	                     that.more=true;
	                   }
                   }
                   that.pageNum+=1;
                   that.$nextTick(function(){
                       that.myScroll.refresh();
                   })
                   if(!that.more){
                       $('.pullUpLabel').text('已无可加载的数据');
                   }
                   //that.waves();
                   $(".noMess").remove();
			    }else if(response.data.code==='201'){

			       that.datalist=getall?response.data.data:that.datalist.concat( response.data.data); //追加或者替换
			       that.fail(response.data.msg);
			       that.more=false;
                   $('.pullUpLabel')[0].innerHTML = '已无可加载的数据';
			       if(getall){		           	
				      // allOad($(".fixTop"),3);
				       noMessage($("#wrapper"),"暂无积分记录");
	                  // $(".noMess").css({"paddingTop":"7.6em"})
			       }
			       that.$nextTick(function(){
                       that.myScroll.refresh();
                   })
			        if(!that.more){
                       $('.pullUpLabel').text('已无可加载的数据');
                   }
			    }else{
			       that.fail(response.data.msg);
			    }
			   // console.log(response);
			    
			  })
			  .catch(function (error) {
			    that.message(error);
			  });
          }
export {loaded,loadData}