import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PublicationComponent } from './publication/publication.component';
import { PartenaireComponent } from './partenaire/partenaire.component';


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'publication',
    component: PublicationComponent
  },
  {
    path: 'partenaire',
    component: PartenaireComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'membre', loadChildren: () => import('./membre/membre.module').then(m => m.MembreModule)
  },
  {
    path: '**',
    component: PageNotfoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
