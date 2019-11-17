import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { IRegister } from './register.model';
import {RegisterService} from './register.service';
import { Router} from '@angular/router';

@Component({
    selector: 'app-forms',
    templateUrl: './registerForm.component.html'
})

export class RegisterComponent {

    constructor(private registerService: RegisterService,
                private router: Router) { }

    myUser = new IRegister('John', 'Eva', 'a@a.com' );

    submitForm(form: NgForm): void {
        console.log(form.value);
        this.registerService.RegisterUser(form.value)
            .subscribe((res) => this.router.navigate(['/login']) );
    }

}
