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
function loadData2(){
    var page=this.nextPage;
    var isAjax=this.isAjax;
    var self=this;
    let nextPage=this.nextPage;
    if(isAjax) {
        return;
    }

    var data={
        cat_id:0,
        lange_id:0,
        sort:"last",
        pagesize:30,
        unlearn:0,
        page:page,
        is_easy:0
    }

    if(!page||page==1){
        page=1;
    }

    isAjax=1;
    
    $.ajax({
        url:'/static/json/ajaxlist-page' + page + '.json',
        data: data,
        method: 'get',
        dataType:'json',
        success: function(datalist){
            nextPage=0;
            isAjax=0;
            var data = datalist.list;
            var str = '';
            if(data.length > 0){
                for(let k in data) {
                    str += '<li>' +
                    '<a href="Mobile-Watch-live-detail.html" class="M-in-img"><img src="http://img.mukewang.com/' + data[k].pic + '-300-170.jpg" /></a>' +
                    '<div class="M-in-info"><h1><a href="#">'+ data[k].name +'</a></h1><span>张大春</span>' +
                    '<i>'+ data[k].update_time_str +'</i><a class="M-in-link">访谈</a></div>' +
                    '<div class="clearfix"></div><p>'+ data[k].short_description +'</p></li>';
                }
            }else{
                str = page == 1 ? '<div class="nodata"></div>' : '';
            }
         
            if(page == 1) {  //如果是第一页
                if($("#like-list").html() == ''){
                   
                        $("#like-list").html(str);
                        self.$nextTick(()=>{
                            if(!self.myScroll){
                                self.loaded();
                            }
                            self.myScroll.refresh(); 
                        })
  
                }else{
                   
                        $("#like-list").html(str);
                        setTimeout(function(){
                              console.log(111111)
                                if(!self.myScroll){
                                    self.loaded();
                                }
                                self.myScroll.refresh();   
                        },500)
                }
                $('.js-next').remove();
                if(datalist.nextPage){
                    nextPage = page + 1;
                }
                $("html,body").animate({scrollTop:0},200);
                
            }else{
                
                    if(datalist.nextPage){
                        nextPage = page + 1;
                    }
                    $('.js-next').remove();
                    $("#like-list").append(str);
                    setTimeout(function(){
                              console.log(2222222222)
                                if(!self.myScroll){
                                    self.loaded();
                                }
                                self.myScroll.refresh();   
                        },500)

            }
            self.nextPage=nextPage
            console.log(nextPage)
        },
        error:function(){
            isAjax=0;
            setTimeout(function(){
                $(".js-next").remove();
            },500);
        },
        complete:function(){
            isAjax=0;
        }
    });
}
export {loaded,loadData}