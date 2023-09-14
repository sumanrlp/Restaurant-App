import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private service: AuthServicesService, private router: Router) { }

  userdata: any;
  sideNav:any

  ngOnInit(): void {
    this.service.getByUser(sessionStorage.getItem('userName')).subscribe({
      next: (res: any) => {
        this.userdata = res
        console.log(this.userdata)
        console.log(this.userdata.name)
      },
      error: err => {
        console.warn('User not found')
      }
    })
  }

  isEditClicked=false
  isDataEdited=false

  tempName:any
  tempEmail:any
  tempId:any

  edit(name:any, email:any, id:any){
    this.tempName=name.value
    this.tempEmail=email.value
    this.tempId=id.value

    Array.from(document.getElementsByClassName('data') as HTMLCollectionOf<HTMLElement>).forEach(element => {
      element.style.border='1px solid black'
    });
    this.isEditClicked=true
  }

  changed(name:any, email:any, id:any, ref?:any){
   
    if(name.value==this.tempName && email.value==this.tempEmail && id.value==this.tempId){
      this.isDataEdited=false
    }
    if(name.value!==this.tempName || email.value!==this.tempEmail || id.value!==this.tempId){
      this.isDataEdited=true
    }
    if(ref?.errors) this.isDataEdited=false
  }

  update(name:HTMLInputElement, email:any, id:HTMLInputElement){
      this.service.updateUser(sessionStorage.getItem('userName'), {name:name.value, email:email.value, id:id.value}).subscribe({
        next:res=>{
          console.log(res)
          this.isDataEdited=false
          this.isEditClicked=false
          Array.from(document.getElementsByClassName('data') as HTMLCollectionOf<HTMLElement>).forEach(element => {
            element.style.border='none'
          });
        },
        error:err=>{
          console.log(err)
        }
      })
    }

    cancel(name:any,email:any,id:any){
      Array.from(document.getElementsByClassName('data') as HTMLCollectionOf<HTMLElement>).forEach(element => {
        element.style.border='none'
      });

      this.isEditClicked=false
      this.isDataEdited=false

      let emailElement:any=document.getElementById('email')
      let nameElement:any=document.getElementById('name')
      let idElement:any=document.getElementById('id')
      if(emailElement){
        emailElement.value=this.userdata.email
      }
      if(nameElement){
        nameElement.value=this.userdata.name
      }
      if(idElement){
        idElement.value=this.userdata.id
      }
    }
  }
