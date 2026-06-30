import { LightningElement } from 'lwc';

export default class TwoWayBinding extends LightningElement {
   fullName='';
   email='';

    handleOnChange(event){
        // HTML to JS (two way binding)
        const fieldName=event.target.name;
        const value=event.target.value;
        if(fieldName==='fullName'){
            this.fullName=value;
        }
        else if(fieldName==='email'){
            this.email=value;
        }
    }

}