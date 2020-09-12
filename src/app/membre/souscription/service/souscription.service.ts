import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Souscription } from '../model/souscription';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { AbstractService } from 'src/app/shared/service/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private option: AbstractService, private appConfig: AppConfig) { }


  souscriptionUrl: string = "souscription"

  getUrl(url: string) {
    return this.appConfig.baseApiPath + url;
  }

  public souscrire(souscription: Souscription): Observable<HttpResponse<Souscription>> {

    console.log("my url " + this.getUrl(this.souscriptionUrl));

    return this.http.post<Souscription>(this.getUrl(this.souscriptionUrl+'/ajout'), souscription, { headers: this.option.getOption().headers, observe: 'response' });
  }


 public  getAllSouscription<Response>() {
    return this.http.get<Souscription[]>(this.getUrl(this.souscriptionUrl + '/list'));

  }
  public getOneSouscription<Response>(id: number) {
    return this.http.get(this.getUrl(this.souscriptionUrl + '/details' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });

  }


  public updateSouscription(souscription: Souscription): Observable<HttpResponse<Souscription>> {

    return this.http.put<Souscription>(this.getUrl(this.souscriptionUrl + '/update'), Souscription, { headers: this.option.getOption().headers, observe: 'response' });
  }
  
 public  deleteUser(id: any) {
    return this.http.delete(this.getUrl(this.souscriptionUrl + '/delete' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });
  }

}
