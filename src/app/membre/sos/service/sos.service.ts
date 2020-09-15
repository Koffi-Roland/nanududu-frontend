import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Sos } from '../model/sos';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { AbstractService } from 'src/app/shared/service/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class SosService {

  constructor(private http: HttpClient, private option: AbstractService, private appConfig: AppConfig) { }


  sosUrl: string = "sos"

  getUrl(url: string) {
    return this.appConfig.baseApiPath + url;
  }

  public add(sos: Sos): Observable<HttpResponse<Sos>> {

    console.log("my url " + this.getUrl(this.sosUrl));

    return this.http.post<Sos>(this.getUrl(this.sosUrl+'/ajout'), Sos, { headers: this.option.getOption().headers, observe: 'response' });
  }


 public  getAllSos<Response>() {
    return this.http.get<Sos[]>(this.getUrl(this.sosUrl + '/list'));

  }
  public getOneSos<Response>(id: number) {
    return this.http.get(this.getUrl(this.sosUrl + '/details' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });

  }


  public updateSos(sos: Sos): Observable<HttpResponse<Sos>> {

    return this.http.put<Sos>(this.getUrl(this.sosUrl + '/update'), sos, { headers: this.option.getOption().headers, observe: 'response' });
  }
  
 public  deleteUser(id: any) {
    return this.http.delete(this.getUrl(this.sosUrl + '/delete' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });
  }

}
