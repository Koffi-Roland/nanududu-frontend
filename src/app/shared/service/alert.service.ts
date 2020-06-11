import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  alertSuccess(content: string): any[] {
    let data = ["success", content];
    return data;
  }


  alertInfo(content: string): any[] {
    let data = ["info", content];
    return data;
  }

  alertWarning(content: string): any[] {
    let data = ["warning", content];
    return data;
  }

  alertError(content: string): any[] {
    let data = ["error", content];
    return data;
  }
}
