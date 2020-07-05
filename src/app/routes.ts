import {Routes} from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {PostViewComponent} from './views/post-view/post-view.component';
import {CreatePostComponent} from './views/create-post/create-post.component';
import {MyPostsComponent} from './views/my-posts/my-posts.component';
import {DonateComponent} from './views/donate/donate.component';
import {AboutUsComponent} from './views/about-us/about-us.component';
import {PromotionsViewComponent} from './views/promotions-view/promotions-view.component';
import {ProfileComponent} from './views/profile/profile.component';
import {PostDetailComponent} from './views/post-detail/post-detail.component';
import {PromotionDetailComponent} from './views/promotion-detail/promotion-detail.component';
import {AuthGuard} from './guards/auth.guard';


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'posts', component: PostViewComponent, canActivate: [AuthGuard]},
  {path: 'publish', component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: 'my-posts', component: MyPostsComponent, canActivate: [AuthGuard]},
  {path: 'donate', component: DonateComponent, canActivate: [AuthGuard]},
  {path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: 'promotions', component: PromotionsViewComponent, canActivate: [AuthGuard]},
  {path: 'promotion/:id', component: PromotionDetailComponent, canActivate: [AuthGuard]},
  {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'post/:id', component: PostDetailComponent, canActivate: [AuthGuard]}
];
