import { LightningElement } from 'lwc';

export default class CalculatorComp extends LightningElement {
    result=0;
    firstNumber=0;
    secondNumber=0;

   get resultClass(){
      if(this.result>0)return 'slds-text-heading_medium slds-text-color_success';
      else if(this.result<0)return 'slds-text-heading_medium slds-text-color_destructive';
      return 'slds-text-heading_medium slds-text-color_weak';
   }

    handleFirstNumberChange(event){
        this.firstNumber=Number(event.target.value);
    }
    handleSecondNumberChange(event){
        this.secondNumber=Number(event.target.value);
    }

    handleAddition(){
       this.result=this.firstNumber+this.secondNumber;
    }
    
    handleSubtraction(){
        this.result=this.firstNumber-this.secondNumber;
    }
    
    handleMultiplication(){
        this.result=this.firstNumber*this.secondNumber;
    }

    handleDivision(){
        this.result=this.firstNumber/this.secondNumber;
    }
    get isShowResult(){
                return this.result!==null && this.result!==undefined && Number.isFinite(this.result) && !(Number.isNaN(this.result));

    }
}