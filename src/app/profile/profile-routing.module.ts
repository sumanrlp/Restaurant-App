import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileChildComponent } from './profile-child/profile-child.component';
import { OrdersComponent } from './orders/orders.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { AuthGaurdLoddedIn } from '../gaurd/auth.guard';

const routes: Routes = [
  {
    path:'dashboard', component:ProfileChildComponent, canActivate:[AuthGaurdLoddedIn],
    children:[
      {
        path:'orders', component: OrdersComponent
      },
      {
        path:'my-account', component: MyAccountComponent
      },
      {
        path:'help', component: HelpComponent
      },
      {
        path:'about', component: AboutComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
