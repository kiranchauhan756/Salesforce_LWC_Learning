import { LightningElement,wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';

export default class WireServiceComponent extends LightningElement {
  @wire(getAllOpportunities) opportunityService;
}