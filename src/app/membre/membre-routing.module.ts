import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembreComponent } from './membre.component';



export const routes: Routes = [

    {
        path: '', component: MembreComponent,



        children: [
            {

                path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)

            },
            {

                path: 'publication', loadChildren: () => import('./publication/publication.module').then(m => m.PublicationModule)

            },
            {

                path: 'tag', loadChildren: () => import('./tag/tag.module').then(m => m.TagModule)

            },
            {

                path: 'souscription', loadChildren: () => import('./souscription/souscription.module').then(m => m.SouscriptionModule)

            },
            {

                path: 'sos', loadChildren: () => import('./sos/sos.module').then(m => m.SosModule)

            },
            {
                path: '**',
                redirectTo: 'publication'
              }

        ]
    }
];




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MembreRoutingModule { }