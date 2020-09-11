import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { UserService } from './service/user.service';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  imports: [UserRoutingModule,CommonModule],
  declarations: [ListComponent,UpdateComponent, DetailsComponent],
  providers: [UserService],
  exports: [ListComponent,UpdateComponent, DetailsComponent]
})
export class UserModule { }