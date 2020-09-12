import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TagService } from './service/tag.service';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { TagRoutingModule } from './tag-routing.module';
import { CreateComponent } from '../tag/create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [TagRoutingModule,SharedModule,FormsModule,ReactiveFormsModule,CommonModule],
  declarations: [ListComponent,UpdateComponent, DetailsComponent,CreateComponent],
  providers: [TagService],
  exports: []
})
export class TagModule { }