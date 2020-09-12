import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PublicationService } from './service/publication.service';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { PublicationRoutingModule } from './publication-routing.module';
import { CreateComponent } from '../publication/create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [PublicationRoutingModule,SharedModule,FormsModule,ReactiveFormsModule,CommonModule],
  declarations: [ListComponent,UpdateComponent, DetailsComponent,CreateComponent],
  providers: [PublicationService],
  exports: []
})
export class PublicationModule { }