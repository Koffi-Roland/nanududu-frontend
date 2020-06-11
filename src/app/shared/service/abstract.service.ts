import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  constructor(public http: HttpClient, public appConfig: ConfigService) {
  }

  getOption() {
    const token = localStorage.retrieve('authenticationToken') ;
    if (token === null) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        return httpOptions;
    } else {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token })
        }
        return httpOptions;
    }
}
getHeaderString() {
    const token = localStorage.retrieve('authenticationToken') ;
    if (token === null) {

        return new HttpHeaders({ 'Content-Type': 'application/json' })

    } else {

        return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token })

    }
}




}
