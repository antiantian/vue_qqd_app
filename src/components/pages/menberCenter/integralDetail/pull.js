/**
 * Created by zcy on 2017/1/5.
 */
/*下拉刷新*/
let nextPage_Intergal=0;
var isAjax_Intergal= 0,myScroll_Intergal;
function loaded_Intergal(loadData) {
    let pullUpEl = document.getElementById('pullUp');
    let pullUpOffset = pullUpEl.offsetHeight;
    let pullDownEl = document.getElementById('pullDown');
    let pullDownOffset = pullDownEl.offsetHeight;
    myScroll_Intergal = new iScroll('wrapper', {
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
                if(nextPage_Intergal>0){
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                    loadData();
                }else{
                    pullUpEl.className = 'none';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '已无可加载的数据';
                }
                
            }else if(pullDownEl.className.match('flip')){
            	if(nextPage_Intergal>0){
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                    loadData();
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


export {loaded_Intergal,myScroll_Intergal,nextPage_Intergal}