import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembreRoutingModule } from './membre-routing.module';
import { MembreComponent } from './membre.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  imports: [MembreRoutingModule,SharedModule,CommonModule],
  declarations: [MembreComponent],
  providers: [],
  exports: [MembreComponent]
})
export class MembreModule { }