import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-form/login.service';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
    token;
    userinfo;
    allUser;

    constructor(private loginService: LoginService,
                private router: Router,
                private profileService: ProfileService ) {}

    ngOnInit() {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.loginService.getUserInfo(this.token)
            .subscribe((res) => this.userinfo = res);
        this.profileService.allUser()
            .subscribe((res) => this.allUser = res);
    }

    logout(): void {
        localStorage.removeItem('TOKEN_NUMBER');
        localStorage.removeItem('ROLE_TYPE');
        this.router.navigate(['login']);
    }
}
