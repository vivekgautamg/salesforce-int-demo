import { LightningElement, track } from 'lwc';

export default class EmployeeInfo extends LightningElement {
    @track name;
    @track designation;
    @track salary;
    @track show=true;

    changeName(event){
        this.name = event.target.value;
    }
    changeDesignation(event){
        this.designation = event.target.value;
    }
    changeSalary(event){
        this.salary = event.target.value;
    }
    saveButtonHandler(){
        this.show=false;
    }

    enterButtonHandler(){
        this.show=true;
    }

}
