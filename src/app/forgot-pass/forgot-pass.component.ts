import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserValidations } from '../login/user-validations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthServicesService } from '../services/auth-services.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {

  constructor(private dialogRef:MatDialogRef<ForgotPassComponent>, private service:AuthServicesService, private diolog:MatDialog, private router:Router){}

  isValid:any=true
  isSubmitted=false

  form = new FormGroup({

    id: new FormControl('', [
      Validators.required,
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
  }, {
    validators: UserValidations.matchPassword
  })

  get pass(): any {
    return this.form.get('pass');
  }
  get confirmPassword(): any {
    return this.form.get('confirmPassword');
  }
  get id(): any {
    return this.form.get('id');
  }

    close() {
    this.dialogRef.close()
  }

  userData:any
  submit(){

    if(this.form.valid){
      this.service.getByUser(this.form.value.id).subscribe({
        next:res=>{
          this.userData=res
          console.log(res)
          if(this.userData.securityQuestion==this.form.value.securityQuestion && this.userData.securityAnswer==this.form.value.securityAnswer){
            this.service.updateUser(this.form.value.id,{pass:this.form.value.pass, confirmPassword:this.form.value.confirmPassword}).subscribe({
              next:res=>{
                console.log(res)
                this.isSubmitted=true
              },
              error:err=>{
                console.log(err)
                this.form.setErrors({
                  unexpectedError:true
                })
              }
            })
          } else{
            this.form.setErrors({
              invalidSecurityDetails:true
            })
          }
        },
        error:err=>{
          console.log(err)
          if(err.status===404){
            this.form.setErrors({
              invalidUser:true
            })
          }
          else{
            this.form.setErrors({
              unexpectedError:true
            })
          }
        }
      })
    }else{
      this.isValid=false
    }

  }

  callLogin() {
    this.dialogRef.close()
    const dialog = this.diolog.open(LoginComponent, {
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
