/**
 * Created by zcy on 2017/1/5.
 */
/*下拉刷新*/
var nextPage = 0,isAjax= 0,myScroll,
    pullUpEl, pullUpOffset;
function loaded() {
    let pullUpEl = document.getElementById('pullUp');
   let pullUpOffset = pullUpEl.offsetHeight;
   let pullDownEl = document.getElementById('pullDown');
   let pullDownOffset = pullDownEl.offsetHeight;
    myScroll = new iScroll('wrapper', {
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
            if (pullUpEl.className.match('flip')) {
                if(nextPage>0){
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                    loadData(nextPage);
                }else{
                    pullUpEl.className = 'none';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '已无可加载的数据';
                }
                
            }else if(pullDownEl.className.match('flip')){
            	if(nextPage>0){
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                    loadData(nextPage);
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

function loadData(page,myScroll){

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
    console.log(111)
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
                    setTimeout(function(){
                        $("#like-list").html(str);
                        myScroll.refresh();
                    }, 0);
                }else{
                    setTimeout(function(){
                        $("#like-list").html(str);
                        myScroll.refresh();
                    }, 100);
                }
                $('.js-next').remove();
                if(datalist.nextPage){
                    nextPage = page + 1;
                }
                $("html,body").animate({scrollTop:0},200);
            }else{
                setTimeout(function(){
                    if(datalist.nextPage){
                        nextPage = page + 1;
                    }
                    $('.js-next').remove();
                    $("#like-list").append(str);
                    myScroll.refresh();
                }, 500);
            }
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
export {loaded,loadData,myScroll}