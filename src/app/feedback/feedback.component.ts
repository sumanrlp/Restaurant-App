import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(private feeedbackservice:FeedbackService, private authService:AuthServicesService, private router:Router, private diolog:MatDialogRef<FeedbackComponent>){}

  isFeedbackGiven:any=false

  log(x:any) {
    console.log(x);
  }

  form= new FormGroup({
    id: new FormControl(sessionStorage.getItem('userName')
    ),
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('',[
      Validators.required,
    ],
    ),
    management: new FormControl('',[
      Validators.required,
    ],
    ),
    taste: new FormControl('',[
      Validators.required,
    ],
    ),
    service: new FormControl('',[
      Validators.required,
    ],
    ),
    suggestion: new FormControl('',[])

  })
  
  get name(){
    return this.form.get('name')
  }
  get email(){
    return this.form.get('email')
  }
  get management(){
    return this.form.get('management')
  }
  get taste(){
    return this.form.get('taste')
  }
  get service(){
    return this.form.get('service')
  }
  get suggestion(){
    return this.form.get('suggestion')
  }

  submitFeedback(){
    if(this.form.valid){
      this.feeedbackservice.submit(this.form.value).subscribe({
        next:res=>{
          console.log(res)
          this.authService.updateUser(sessionStorage.getItem('userName'), {isFeedbackGiven: true,feedbackLabel:'Given'}).subscribe({
            next:res=>{
              console.log(res)
            },
            error:err=>{
              console.log(err)
            }
          })
          this.form.reset()
          this.isFeedbackGiven=true
        },
        error:err=>{
          console.log(err)
          if(err.status===500){
            alert("You already given the feedback, Thank You!")
            this.router.navigate(['/home'])
          }
        }
      })
    }else{
      alert('Please fill mandotory fields')
    }
  }

  close(){
    this.diolog.close()
  }

}
