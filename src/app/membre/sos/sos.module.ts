import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SosRoutingModule } from './sos-routing.module';
import { ListComponent } from './list/list.component';
import { SosService } from './service/sos.service';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from '../sos/create/create.component';



@NgModule({
  imports: [SosRoutingModule,CommonModule],
  declarations: [ListComponent,UpdateComponent, DetailsComponent,CreateComponent],
  providers: [SosService],
  exports: [ListComponent,UpdateComponent, DetailsComponent]
})
export class SosModule { }