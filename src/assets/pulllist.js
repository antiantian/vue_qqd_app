/**
 * Created by zcy on 2017/1/5.
 */
/*下拉刷新*/

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
            
            if (pullUpEl.className.match('flip')) {
                if(nextPage>0){
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                    self.loadData(nextPage);
                }else{
                    pullUpEl.className = 'none';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '已无可加载的数据';
                }
                
            }else if(pullDownEl.className.match('flip')){
                if(nextPage>0){
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                    self.loadData(nextPage);
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

function loadData(){
    let page=this.nextPage;
    let isAjax=this.isAjax;
    let self=this;
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
     console.log(222222222+";"+page)
     
    $.ajax({
        url:'/static/json/ajaxlist-page' + page + '.json',
        data: data,
        method: 'get',
        dataType:'json',
        success: function(datalist){
            nextPage=0;
            isAjax=0;
             console.log(datalist.list)
            var data = datalist.list;
            var str = '';
            let exchangeFn=self.exchangePrizes;
            exchangeFn()
            if(data.length > 0){
                for(let k in data) {
                    str += '<li>'+
                               '<div class="box">'+
                                    '<div class="img boxshadow">'+
                                         '<img src="'+data[k].pic+'" />'+
                                         '<p class="vertical"><span></span><i></i></p>'+
                                    '</div>'+
                                    '<div class="mess">'+
                                        '<p class="info"><i class="iconfont orange"></i><span class="orange">'+data[k].score+'</span> <em>积分</em></p>'+
                                    '</div>'+
                                    '<a onclick="exchangeFn('+data[k].id+','+data[k].score+')" class="radiushalf immiteC">立即兑换</a>'+
                               '</div>'+
                            '</li>';
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