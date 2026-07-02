public with sharing class OpportunityController {
   
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpportunities(){
        return [select Name,StageName,CloseDate,Amount from Opportunity WITH SECURITY_ENFORCED];
    }
}