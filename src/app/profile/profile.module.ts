import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileChildComponent } from './profile-child/profile-child.component';
import { OrdersComponent } from './orders/orders.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MaterialModule } from 'src/material.module';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAddressComponent } from './add-address/add-address.component';


@NgModule({
  declarations: [
    SidebarComponent,
    ProfileChildComponent,
    OrdersComponent,
    MyAccountComponent,
    HelpComponent,
    AboutComponent,
    AddAddressComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
