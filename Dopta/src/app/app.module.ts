import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PetsComponent} from './pets/pets.component';
import {RouterModule, Routes} from '@angular/router';
import {PetService} from './pets/pet.service';
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
import {FilterPipe} from './pets/filter.pipe';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LoginComponent } from './login/login.component';
import {MatRadioModule} from "@angular/material/radio";

const routes: Routes = [
  {path: 'pets', component: PetsComponent},
  {path:  'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    MainNavComponent,
    FilterPipe,
    QuienesSomosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
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
    MatRadioModule,
    ReactiveFormsModule

  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
