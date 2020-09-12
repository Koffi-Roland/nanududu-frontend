import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserService } from './service/souscription.service';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { SouscriptionRoutingModule } from './souscription-routing.module';



@NgModule({
  imports: [SouscriptionRoutingModule,CommonModule],
  declarations: [ListComponent,UpdateComponent, DetailsComponent],
  providers: [UserService],
  exports: []
})
export class SouscriptionModule { }