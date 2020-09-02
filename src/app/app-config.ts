import { SERVER_URL } from 'src/app/app.constants';
import { Injectable } from '@angular/core';

/**
 * This is a singleton class
 */
@Injectable()
export class AppConfig {
  

    public version: string = "1.0.0";
    public locale: string = "en-US";
    public currencyFormat = { style: "currency", currency: "USD" };
    //public dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    //public apiPort: string = "8000";//Development mode
   
    public apiProtocol: string;
    public apiHostName: string;
    public baseApiPath: string;

    constructor() {
        if (this.apiProtocol === undefined) {
            this.apiProtocol = window.location.protocol;
        }
     
        this.baseApiPath = this.apiProtocol + "//" + GlobalVariables.appContext + "/";;
        if (this.locale === undefined) {
            this.locale = navigator.language;
        }
    }
}

export const GlobalVariables = Object.freeze({
    //     inProduction: true,
    appContext: SERVER_URL,
});

