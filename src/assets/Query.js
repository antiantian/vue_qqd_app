import {ValidateCards,trim} from './cardValidate'
import {commonValidate} from './commonValidate'
const Query={
	     onlyNumber:function(e){
            let vals=e.target.value;
            let names=e.target.name;
            this[names]=vals.replace(/[^\d]/g,'') 
          },
          changeInput:function(e){
             let vals=e.target.value;
             let names=e.target.name;
             //this.validates();
             if(names=="phoneNumber"){
               vals=vals.replace(/[^\d]/g,'');
             }
             let newlist=[];
             this.changeIndex=names;
             for(let i=0;i<this.saveList.length;i++){
                  if(this.saveList[i]['index']===names){
                       this.saveList[i].arr=vals;
                       newlist.push(this.saveList[i])
                       break;
                  }
             }
            var ValidateReturn= this.validates(newlist.length>0?newlist:null);
            
          },
          validates:function(list){
            const saveList=list?list:this.saveList;
            var ValidateReturn=commonValidate(saveList)
            if(list){
               if(ValidateReturn.nextDo){
	                if(this.indexVal==this.changeIndex){
	                   this.errorMessage="";
	                } 
               }else{
                 this.errorMessage=ValidateReturn.message;
	             this.indexVal=ValidateReturn.indexVal;  
               }
            }else{
	            this.errorMessage=ValidateReturn.message;
	            this.indexVal=ValidateReturn.indexVal;
            }
            return ValidateReturn.nextDo;
          }
}
export default Query;