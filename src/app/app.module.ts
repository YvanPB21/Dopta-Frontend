import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './views/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PostComponent } from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import { PostViewComponent } from './views/post-view/post-view.component';
import {PostsService} from './services/posts.service';
import { ProfileComponent } from './views/profile/profile.component';

import { PublicationFormComponent } from './components/publication-form/publication-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { MyPostsComponent } from './views/my-posts/my-posts.component';
import { DonateComponent } from './views/donate/donate.component';
import {MatRadioModule} from '@angular/material/radio';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PromotionsViewComponent } from './views/promotions-view/promotions-view.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { PostDetailComponent } from './views/post-detail/post-detail.component';
import { PromotionDetailComponent } from './views/promotion-detail/promotion-detail.component';
import { CommentDialogComponent } from './components/comment-dialog/comment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FiltersComponent } from './components/filters/filters.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    PostsComponent,
    PostComponent,
    PostViewComponent,
    ProfileComponent,
    PublicationFormComponent,
    CreatePostComponent,
    MyPostsComponent,
    DonateComponent,
    AboutUsComponent,
    PromotionsViewComponent,
    PromotionComponent,
    PostDetailComponent,
    PromotionDetailComponent,
    CommentDialogComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule,
    MatRadioModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
