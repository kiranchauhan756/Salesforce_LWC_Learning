import { LightningElement } from 'lwc';

export default class OneWayBindingComp extends LightningElement {
    name='Kiran Chauhan';
    todayDate=new Date().toLocaleDateString();
    
}