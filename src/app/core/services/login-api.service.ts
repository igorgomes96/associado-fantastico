import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { environment } from '@env/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthInfo } from '@shared/entities/auth';

@Injectable({
    providedIn: 'root'
})
export class LoginApiService {

    private _onUserChanges: EventEmitter<AuthInfo> = new EventEmitter<AuthInfo>();
    private url = environment.api + environment.endpoints.login;
    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

    onUserChanges(): Observable<AuthInfo> {
        return this._onUserChanges.asObservable();
    }

    get token(): string {
        return localStorage.getItem('token');
    }

    login({ cpf, matricula }): Observable<AuthInfo> {
        return this.http.post<any>(`${this.url}`, { cpf, matricula }).pipe(
            take(1),
            tap((auth: AuthInfo) => {
                localStorage.setItem('token', auth.accessToken);
                this._onUserChanges.emit(auth);
            }));
    }

}
