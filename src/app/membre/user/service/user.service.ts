import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { AbstractService } from 'src/app/shared/service/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private option: AbstractService, private appConfig: AppConfig) { }


  registerUrl: string = "ajout"
  userUrl: string = "personnephysique"

  getUrl(url: string) {
    return this.appConfig.baseApiPath + url;
  }

  public ajouter(user: User): Observable<HttpResponse<User>> {

    console.log("my url " + this.getUrl(this.registerUrl));

    return this.http.post<User>(this.getUrl(this.registerUrl), user, { headers: this.option.getOption().headers, observe: 'response' });
  }


 public  getAllUser<Response>() {
    return this.http.get<User[]>(this.getUrl(this.userUrl + '/list'));

  }
  public getOneUser<Response>(id: number) {
    return this.http.get(this.getUrl(this.userUrl + '/details' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });

  }

 public  getAllMiniUser<Response>() {
    return this.http.get<User[]>(this.getUrl(this.userUrl + '/mini-list'));

  }


  public updateUser(user: User): Observable<HttpResponse<User>> {

    return this.http.put<User>(this.getUrl(this.userUrl + '/update'), user, { headers: this.option.getOption().headers, observe: 'response' });
  }
  
 public  deleteUser(id: any) {
    return this.http.delete(this.getUrl(this.userUrl + '/delete' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });
  }

}
