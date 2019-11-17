import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ILogin } from './login.model';
import {LoginService} from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forms',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(private loginService: LoginService,
                private router: Router) { }

    myUser = new ILogin('', '');

    submitForm(form: NgForm): void {
        console.log(form.value);
        this.loginService.LoginUser(form.value)
            .subscribe((res) => this.loginService.getUserInfo(res['token'])
            .subscribe((response) => this.userRole(response["role"]))
            );
    }

    userRole(typeOfUser): void {
        localStorage.setItem('ROLE_TYPE', typeOfUser);
        this.router.navigate(['/profile']);
    }

}
