import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { IUser } from './userForm.model';
import {FormPosterService} from './userform.service';

@Component({
    selector: 'app-forms',
    templateUrl: './userform.component.html'
})

export class UserComponent {

    constructor(private formPosterService: FormPosterService) { }

    hasCodelangError = false;
    languages = ['Node', 'React', 'Angular', 'AWS', 'Golang'];
    myUser = new IUser('John', 'Eva', 'a@a.com', '12345', true , 'male', 'Node' );


    firstToUpper(value): void {
        if (value.length > 0) {
            this.myUser.firstname = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        } else {
            this.myUser.firstname = value;
        }
    }

    validateCodeLang(event): void {
        if (this.myUser.codelang === 'default') {
            this.hasCodelangError = true;
        } else {
            this.hasCodelangError = false;
        }
    }

    submitForm(form: NgForm): void {
        console.log(form.value);
        this.formPosterService.employeeForm(form.value)
            .subscribe((res) => console.log('data posted'));
    }

}
