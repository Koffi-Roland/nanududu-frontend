import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SiderComponent } from './layout/sider/sider.component';
import { ContentComponent } from './layout/content/content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

import { AppConfig } from './app-config';
import { AccueilComponent } from './accueil/accueil.component';
import { PublicationComponent } from './publication/publication.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { LoginService } from './login/login.service';
import { UserService } from './membre/user/service/user.service';
import { PublicationService } from './membre/publication/service/publication.service';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SiderComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    PageNotfoundComponent,
    AccueilComponent,
    PublicationComponent,
    PartenaireComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
  ],
  exports: [ HeaderComponent,FooterComponent,SiderComponent, ContentComponent,],

  providers: [{ provide: NZ_I18N, useValue: fr_FR },AppConfig,LoginService,UserService,PublicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
