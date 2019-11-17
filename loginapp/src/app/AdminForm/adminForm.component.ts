import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { IAdmin } from './adminForm.model';
import {RegisterService} from '../register-form/register.service';
import { Router} from '@angular/router';

@Component({
    templateUrl: './adminForm.component.html'
})

export class AdminRegisterComponent {

    constructor(private registerService: RegisterService,
                private router: Router) { }

    role = ['admin', 'user'];
    myUser = new IAdmin('John', 'Eva', 'a@a.com' , '' );

    submitForm(form: NgForm): void {
        console.log(form.value);
        this.registerService.RegisterUser(form.value)
            .subscribe((res) => this.router.navigate(['/login']) );
    }

}
