/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-24 17:11:29
 * @version $Id$
 */

/*下拉刷新*/
import apis from  '../../../../api'
function loadData(isPage){  

            var that=this;
            let params = {
                api: apis.gift,
                param: {
				    pageNum:this.pageNum, 
				    numPerPage:this.numPerPage,
				    name:'ddj',
				    type:'',
				    isPage:true, //获取全部的值
                }
            };
            this.api.post(params)
			  .then(function (response) {
			    if(response.data.code==='200'){
                   that.success(response.data.msg)
                   that.datalist=response.data.data; // 替换
                   //that.waves();
                   $(".noMess").remove();
			    }else if(response.data.code==='201'){

			       that.datalist=response.data.data; // 替换
			       that.fail(response.data.msg);
			       that.more=false;
                   noMessage($("#wrapper"),"暂无数据");
			    }else{
			       that.fail(response.data.msg);
			    }
			   // console.log(response);
			    
			  })
			  .catch(function (error) {
			    that.message(error);
			  });
          }
export {loadData}