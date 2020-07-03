import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {OwlModule} from 'ngx-owl-carousel';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostsComponent} from './user/posts/posts.component';
import {RouterModule, Routes} from '@angular/router';
import {PostService} from './services/post.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MainNavComponent} from './main-nav/main-nav.component';

import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {RealizarPublicacionComponent} from './realizar-publicacion/realizar-publicacion.component';
import {DonarComponent} from './user/donar/donar.component';
import {MatRadioModule} from '@angular/material/radio';
import {PromotionsComponent} from './promotions/promotions.component';
import {PetService} from './services/pet.service';
import {SpecieService} from './services/specie.service';
import {PromotionService} from './services/promotion.service';
import {PromocodeComponent} from './promocode/promocode.component';

import {SexService} from './services/sex.service';
import {CommentService} from './services/comment.service';
import {UserService} from './services/user.service';
import {LikeService} from './services/like.service';
import { MypublicationsComponent } from './user/mypublications/mypublications.component';


const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'userprofile/:id', component: UserprofileComponent},
  {path: 'publication/:id', component: PublicationComponent},
  {path: 'donar', component: DonarComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'publicar', component: RealizarPublicacionComponent},
  {path: 'promotions', component: PromotionsComponent},
  {path: 'promocode/:id', component: PromocodeComponent},
  {path: 'mypublications', component: MypublicationsComponent},
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  {path: 'prueba', component: InicionsesionComponent},
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPipe} from './pets/filter.pipe';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { IndexComponent } from './index/index.component';
import {interceptorProvider} from './interceptors/prod-interceptor.service';
import { InicionsesionComponent } from './auth/inicionsesion/inicionsesion.component';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    MainNavComponent,
    FilterPipe,
    QuienesSomosComponent,
    UserprofileComponent,
    PublicationComponent,
    DonarComponent,
    RealizarPublicacionComponent,
    PromotionsComponent,
    PromocodeComponent,
    MypublicationsComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    InicionsesionComponent
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
    MatRadioModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [PostService, PetService, SpecieService, PromotionService, SexService, CommentService, UserService, LikeService,interceptorProvider],


})
export class AppModule {
}
