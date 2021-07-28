import { LightningElement,track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    principle;
    interest;
    time;
   @track calculate=false;
    @track result;

    principleHandler(event){
        this.principle = parseInt(event.target.value);
    }
    interestHandler(event){
        this.interest = parseInt(event.target.value);
    }
    timeHandler(event){
        this.time = parseInt(event.target.value);
    }

    calculateSIHandler(){
        this.result ='Simple interest: ' + (this.principle*this.interest*this.time)/100;
        this.calculate = true;
        
    }

    resetHandler(){
       this.calculate=false;
    }
}