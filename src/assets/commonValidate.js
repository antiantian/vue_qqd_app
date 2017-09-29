 //验证  编辑 保存 
function commonValidate(saveList){
  var nextDo=true;
  var indexVal="";
  var message="";
  var codename=[];
    for(let i=0;i<saveList.length;i++){
         var item=saveList[i];
         if(item.arr===''||!item.arr){
            message=item.mess;
            indexVal=item.index;
            nextDo=false;
            break;
         }else{
            if(item.type==='phone'){
                if(item.arr.length!=11){
                  message='您输入的手机号位数不对';
                  indexVal=item.index;
                  nextDo=false;
                  break;
                }
                
            }else if(item.type==='idCard'){
                if(item.arr.length!=18&&item.arr.length!=15){
                  message='您输入的身份证号长度不对';
                  indexVal=item.index;
                  nextDo=false;
                  break;
                }
            }else if(item.type==='banknum'){
                if(item.arr.length < 16 || item.arr.length > 19){
                  message='银行卡号长度必须在16到19之间';
                  indexVal=item.index;
                  nextDo=false;
                  break;
                }
            }
         }    
    }
    return {nextDo:nextDo,indexVal:indexVal,message:message}
}
export{
  commonValidate
};
