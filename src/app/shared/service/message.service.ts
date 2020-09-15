import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private message: NzMessageService) { }


  messageSuccess(content:string){
    this.message.success(content,{ nzDuration: 2500});
  }

  messageError(content:string){
    this.message.error(content,{ nzDuration: 2500 });
  }

  messageInfo(content:string){
    this.message.info(content,{ nzDuration: 2500 });
  }

  messageWarning(content:string){
    this.message.warning(content,{ nzDuration: 2500 });
  }

}
