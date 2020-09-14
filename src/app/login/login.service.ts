import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app-config';
import { AbstractService } from '../shared/service/abstract.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<any>;

  public currentUser: Observable<any>;
  constructor( private appConfig:AppConfig,
    private option: AbstractService,private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  
  }


  login(identifiant, motDePasse) {
    return this.http.post<any>(this.appConfig.baseApiPath+'login', { identifiant, motDePasse })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  setUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  clearUser() {
    localStorage.removeItem('currentUser');
  }

  hasAnyRole(roles: string[]) {
    const user = this.getUser();

    for (const role of user.roles) {
      if (roles.includes(role)) {
        return true;
      }
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') ? true : false;
  }

  getStoredToken(): string | null {
    let userObj = this. getUser();
    if (userObj !== null) {
        return userObj.token;
    }

    return null;
}
}
