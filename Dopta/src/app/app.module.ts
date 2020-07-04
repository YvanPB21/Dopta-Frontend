import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OwlModule} from 'ngx-owl-carousel';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

import { PublicationComponent } from './publication/publication.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { IndexComponent } from './index/index.component';
import {interceptorProvider} from './interceptors/prod-interceptor.service';
import { InicionsesionComponent } from './auth/inicionsesion/inicionsesion.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FilterPipe} from './util/filter.pipe';
import { PromocodeComponent } from './organizer/promocode/promocode.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  {path: 'prueba', component: InicionsesionComponent},
  { path: 'registro', component: RegistroComponent },
  {path: 'publicacion', component: PublicationComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
  ];

@NgModule({
  declarations: [
    AppComponent,

    MainNavComponent,
    FilterPipe,
    QuienesSomosComponent,
    PublicationComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    InicionsesionComponent,
    PromocodeComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,


  ],
  providers: [ interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
