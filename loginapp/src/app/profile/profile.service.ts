import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class ProfileService {

    private url = 'http://localhost:5000/api/auth/users';

    constructor(private http: HttpClient ) {}

    allUser(): Observable<any[]> {
        return this.http.get<any>(this.url);
    }
}
