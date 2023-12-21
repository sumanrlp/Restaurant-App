import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGaurdLoddedIn, AuthGaurdAdmin } from './gaurd/auth.guard';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login/:url', component: HomeComponent
  },
  {
    path: 'login', component: HomeComponent
  },
  {
    path: 'signup', component: HomeComponent
  },
  {
    path: 'admin/:url', component: AdminComponent, canActivate:[AuthGaurdLoddedIn, AuthGaurdAdmin]
  },
  {
    path: 'admin', component: AdminComponent, canActivate:[AuthGaurdLoddedIn, AuthGaurdAdmin]
  },
  {
    path: 'feedback', component: HomeComponent, canActivate:[AuthGaurdLoddedIn]
  },
  {
    path: 'homelogout', component: HomeComponent
  },
  {
    path: '**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
