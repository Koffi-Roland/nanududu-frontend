import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';


 export const routes: Routes = [
    
   
      {
          path: 'list',
          component: ListComponent,
      },
      {
        path: 'update',
        component: UpdateComponent, 
    },
    {
        path: 'details/:id',
        component: DetailsComponent, 
    },
    {
      path: '**',
      redirectTo: 'list'
  }
   
  ];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }