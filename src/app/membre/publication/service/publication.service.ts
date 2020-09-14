import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Publication } from '../model/publication';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { AbstractService } from 'src/app/shared/service/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient, private option: AbstractService, private appConfig: AppConfig) { }


    publicationUrl: string = "publication"

  getUrl(url: string) {
    return this.appConfig.baseApiPath + url;
  }

  public ajouter(publication: Publication): Observable<HttpResponse<Publication>> {

    console.log("my url " + this.getUrl(this.publicationUrl));

    return this.http.post<Publication>(this.getUrl(this.publicationUrl+'/ajout'), publication, { headers: this.option.getOption().headers, observe: 'response' });
  }


 public  getAllPublication<Response>() {
    return this.http.get<Publication[]>(this.getUrl(this.publicationUrl + '/list'));

  }

  public  getLastPublication<Response>() {
    return this.http.get<Publication[]>(this.getUrl(this.publicationUrl + '/list/derniere'));

  }
  public getOnePublication<Response>(id: number) {
    return this.http.get(this.getUrl(this.publicationUrl + '/details' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });

  }

  public updatePublication(publication: Publication): Observable<HttpResponse<Publication>> {

    return this.http.put<Publication>(this.getUrl(this.publicationUrl + '/update'), publication, { headers: this.option.getOption().headers, observe: 'response' });
  }
  
 public  deletePublication(id: any) {
    return this.http.delete(this.getUrl(this.publicationUrl + '/delete' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });
  }

}
