import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserValidations } from './login/user-validations';
import { AuthServicesService } from './services/auth-services.service';
import { OrderServicesService } from './services/order-services.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReqLoginService } from './services/req-login.service';
import { ReqSignupService } from './services/req-signup.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { PopUpComponent } from './pop-up/pop-up.component'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackService } from './services/feedback.service';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { MsgPopupComponent } from './msg-popup/msg-popup.component';
import { Subscription, subscribeOn } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { ProfileModule } from './profile/profile.module';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavbarComponent,
    SignupComponent,
    DashboardComponent,
    PopUpComponent,
    FeedbackComponent,
    ViewFeedbackComponent,
    FilterDataComponent,
    MsgPopupComponent,
    MenuItemsComponent,
    ForgotPassComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ProfileModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [UserValidations, AuthServicesService, OrderServicesService, ReqLoginService, ReqSignupService, HttpClient,AppComponent,
    PopUpComponent,FeedbackService,  NavbarComponent,AdminComponent,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: Subscription, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  exports: [MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
