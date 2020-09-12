import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserService } from './service/souscription.service';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { SouscriptionRoutingModule } from './souscription-routing.module';
import { CreateComponent } from '../souscription/create/create.component';



@NgModule({
  imports: [SouscriptionRoutingModule,CommonModule],
  declarations: [ListComponent,UpdateComponent, DetailsComponent,CreateComponent],
  providers: [UserService],
  exports: []
})
export class SouscriptionModule { }