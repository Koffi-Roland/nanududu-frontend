import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from '../publication/create/create.component';


export const routes: Routes = [

  {
    path: '', 

    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
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
        redirectTo: 'create'
      }
    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }