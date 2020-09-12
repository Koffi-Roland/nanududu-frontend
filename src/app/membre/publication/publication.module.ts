import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PublicationService } from './service/publication.service';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { PublicationRoutingModule } from './publication-routing.module';



@NgModule({
  imports: [PublicationRoutingModule,CommonModule],
  declarations: [ListComponent,UpdateComponent, DetailsComponent],
  providers: [PublicationService],
  exports: []
})
export class PublicationModule { }