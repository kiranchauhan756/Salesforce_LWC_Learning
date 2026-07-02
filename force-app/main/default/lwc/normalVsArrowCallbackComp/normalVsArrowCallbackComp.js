import { LightningElement } from 'lwc';

// This context explanation
// function teacherName(name){
//   this.name=name;

// //Normal function creates its own this scope
// setTimeout(function(){
//   console.log("Normal function "+this.name);
// },1000);

// // Arrow function uses this scope of its clling function
// setTimeout(()=>{
//   console.log("Arrow fucntion "+this.name);
// },1000);
// }

//  teacherName("shubham");
export default class NormalVsArrowCallbackComp extends LightningElement {
    todaysdate=new Date();

    handleCallback(){
    setInterval(function(){
        this.todaysdate=new Date();
    },1000);
    }

    handleArrow(){
        setInterval(()=>{
           this.todaysdate=new Date();
        },1000)
    }

    handleLocalVariable(){
        let local=this;
        setInterval(function(){
            local.todaysdate=new Date();
        },1000);
    }

    handleBind(){
        setInterval(function(){
            this.todaysdate=new Date();
        }.bind(this),1000);
    }


}