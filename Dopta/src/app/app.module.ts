import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PetsComponent} from './pets/pets.component';
import {RouterModule, Routes} from '@angular/router';
import {PetService} from './pets/pet.service';

const routes: Routes = [
  {path: 'pets', component: PetsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
