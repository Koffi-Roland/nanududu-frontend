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

  constructor(private http: HttpClient, private option: AbstractService,private appConfig: AppConfig) { }


  registerUrl: string = "register"
  userUrl: string = "user"

  getUrl(url: string) {
    return this.appConfig.baseApiPath + url;
}

  public amegbeto(user: User): Observable<HttpResponse<User>> {

    console.log("my url " + this.getUrl(this.registerUrl));

    return this.http.post<User>(this.getUrl(this.registerUrl ), user, { headers: this.option.getOption().headers, observe: 'response' });
}


getAllUser<Response>(){
  return this.http.get<User[]>(this.getUrl(this.userUrl+'/list'));

}
getOneUser<Response>(id: number){
  return this.http.get(this.getUrl(this.userUrl+'/details' + `?id=${id}`),{headers:this.option.getOption().headers ,observe:'response'});

}

getAllMiniUser<Response>(){
  return this.http.get<User[]>(this.getUrl(this.userUrl+'/mini-list'));

}

}