import { Component, OnDestroy, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserValidations } from '../login/user-validations';
import { AuthServicesService } from '../services/auth-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { MsgPopupComponent } from '../msg-popup/msg-popup.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor( private authService: AuthServicesService, private router: Router, private route: ActivatedRoute,
    private dialogRef: MatDialogRef<SignupComponent>, private dialog: MatDialog
  ) { }
  isValid: any = true
  form = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),

    id: new FormControl('', [
      Validators.required,
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern('.+@gmail.com'),
      UserValidations.checkingUniqueness
    ]),

    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*?])[A-Za-z\d!@#$%&*?].{8,}')
    ]),

    confirmPassword: new FormControl('', [
      Validators.required,
    ]),
    securityQuestion: new FormControl('',[Validators.required]),
    securityAnswer: new FormControl('',[Validators.required]),

    isActive: new FormControl(true),
    isActiveLabel: new FormControl('Active'),
    role: new FormControl('Unassigned'),
    isFeedbackGiven: new FormControl(false),
    feedbackLabel: new FormControl('NotGiven'),
  }, {
    validators: UserValidations.matchPassword
  })


  proceedSignup() {
    if (this.form.valid) {
      this.authService.proceedRegisteration(this.form.value).subscribe({
        next: res => {
          console.log(res)
          this.dialogRef.close()
          const dialog = this.dialog.open(MsgPopupComponent, {
            enterAnimationDuration: 100,
            exitAnimationDuration: 100,
            width: '25%',
            disableClose: true
          })
          dialog.afterClosed().subscribe(res => {

          })
          this.form.reset()
        },
        error:err=>{
          if(err.status===500){
            this.form.setErrors({duplicateUserId: true})
          }else{
            this.form.setErrors({unexpectedError: true})
          }
        }
      })
    } else {
      this.isValid = false
      setTimeout(() => {
        this.isValid = true
      }, 3000);
    }
  }

  callLogin() {
    this.dialogRef.close()
    const dialog = this.dialog.open(LoginComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '30%',
      disableClose: true

    })
    dialog.afterClosed().subscribe(res => {
      this.router.navigate(['/home'])
    })
  }

  close() {
    this.dialogRef.close()
  }


  get email(): any {
    return this.form.get('email');
  }
  get pass(): any {
    return this.form.get('pass');
  }
  get confirmPassword(): any {
    return this.form.get('confirmPassword');
  }
  get name(): any {
    return this.form.get('name');
  }
  get id(): any {
    return this.form.get('id');
  }



  log(x: any) {
    console.log(x)
  }
}
