import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TagService } from './service/tag.service';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { TagRoutingModule } from './tag-routing.module';



@NgModule({
  imports: [TagRoutingModule,CommonModule],
  declarations: [ListComponent,UpdateComponent, DetailsComponent],
  providers: [TagService],
  exports: []
})
export class TagModule { }