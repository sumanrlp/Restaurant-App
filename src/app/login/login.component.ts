import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPassComponent } from '../forgot-pass/forgot-pass.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private service: AuthServicesService, 
    private diologRef:MatDialogRef<LoginComponent>, private diolog:MatDialog, private route:ActivatedRoute,
    ) {
    sessionStorage.clear()
  }

  userdata: any;
  requestAccess: any = false
  requestAccessLink: any = false

  form = new FormGroup({

    userName: new FormControl('', [
      Validators.required,
    ]),
    pass: new FormControl('', [
      Validators.required,
    ])
  })

  get userName(): any {
    return this.form.get('userName');
  }
  get pass(): any {
    return this.form.get('pass');
  }

  login() {

    if (this.form.valid) {
      this.service.getByUser(this.form.value.userName).subscribe(
        {
          next: (res) => {
            this.userdata = res;
            console.log(this.userdata)
            if (this.userdata.pass == this.form.value.pass) {
              if (this.userdata.isActive) {
                sessionStorage.setItem('userName', this.userdata.id)
                sessionStorage.setItem('role', this.userdata.role)
                this.service.updateUser(this.userdata.id, this.getCurrentDateTime()).subscribe({
                  next:res=>{
                    console.log(res)
                  },
                  error:err=>{
                    console.log(err)
                  }
                })
                let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')
                console.log(returnUrl)
                this.diologRef.close()
                if(returnUrl==null) returnUrl=''
                this.router.navigate([returnUrl])
                
              } else {
                this.form.setErrors({
                  inActiveUser: true
                })
                this.requestAccessLink = true
              }
            } else {
              this.form.setErrors({
                invalidLogin: true
              })
            }
          },
          error: err => {
            console.log(err)
            if(err.status===404){
              this.form.setErrors({
                invalidUser: true
              })
            }else{
              this.form.setErrors({unexpectedError:true})
            }
          }
        })
    } else {
      this.form.setErrors({
        emptyField: true
      })
    }
  }

  callSignup(){
    this.diologRef.close()
    const dialog = this.diolog.open(SignupComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '30%',
      disableClose: true

    })
    dialog.afterClosed().subscribe(res => {
      this.router.navigate(['/home'])
    })
  }

  close(){
    this.diologRef.close()
    this.router.navigate(['/home'])
  }

  requestAccessMethod() {
    this.requestAccessLink = false
    this.requestAccess = true
    this.form.setErrors(null)
    setTimeout(() => {
      this.requestAccess = false
    }, 3000);
  }

  getCurrentDateTime() {
    
    var dateTime = new Date().toLocaleString()
    return {lastLoggedIn: dateTime}
  }

  forgotPass(){
    this.diologRef.close()
    const dialog = this.diolog.open(ForgotPassComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '30%',
      disableClose: true

    })
    dialog.afterClosed().subscribe(res => {
      this.router.navigate(['/home'])
    })
  }

}