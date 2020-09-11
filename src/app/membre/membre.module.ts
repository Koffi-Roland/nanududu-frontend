import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembreRoutingModule } from './membre-routing.module';
import { MembreComponent } from './membre.component';




@NgModule({
  imports: [MembreRoutingModule,CommonModule],
  declarations: [MembreComponent],
  providers: [],
  exports: [MembreComponent]
})
export class MembreModule { }