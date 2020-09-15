import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Tag } from '../model/tag';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { AbstractService } from 'src/app/shared/service/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient, private option: AbstractService, private appConfig: AppConfig) { }


  tagUrl: string = "tag"

  getUrl(url: string) {
    return this.appConfig.baseApiPath + url;
  }

  public add(tag: Tag): Observable<HttpResponse<Tag>> {

    console.log("my url " + this.getUrl(this.tagUrl));

    return this.http.post<Tag>(this.getUrl(this.tagUrl +'/ajout'), tag, { headers: this.option.getOption().headers, observe: 'response' });
  }


 public  getAllTag<Response>() {
    return this.http.get<Tag[]>(this.getUrl(this.tagUrl + '/list'));

  }
  public getOneTag<Response>(id: number) {
    return this.http.get(this.getUrl(this.tagUrl + '/details' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });

  }


  public updateTag(tag: Tag): Observable<HttpResponse<Tag>> {

    return this.http.put<Tag>(this.getUrl(this.tagUrl + '/update'), tag, { headers: this.option.getOption().headers, observe: 'response' });
  }
  
 public  deleteTag(id: any) {
    return this.http.delete(this.getUrl(this.tagUrl + '/delete' + `?id=${id}`), { headers: this.option.getOption().headers, observe: 'response' });
  }

}
