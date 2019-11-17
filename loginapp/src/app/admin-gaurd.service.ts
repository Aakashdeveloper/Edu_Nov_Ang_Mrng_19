import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable()

export class AdminGaurdService implements CanActivate {
    token;
    role;

    constructor(private router: Router) {
    }

    canActivate(): boolean {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.role = localStorage.getItem('ROLE_TYPE');
        if (this.token == null) {
            this.router.navigate(['/login']);
            return false;
        } else if ( this.token !== null && this.role === 'user') {
            this.router.navigate(['/profile']);
            return false;
        } else if (this.token !== null && this.role === 'admin') {
            return true;
        }
        return false;
    }
}
