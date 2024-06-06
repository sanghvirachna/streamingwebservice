import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesandshowsComponent } from './components/moviesandshows/moviesandshows.component';
import { SupportComponent } from './components/support/support.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

export const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'moviesandshows',component:MoviesandshowsComponent},
 {path:'support',component:SupportComponent},
 {path:'subscription',component:SubscriptionComponent}
];
