import { Component, ViewEncapsulation, OnInit, DoCheck } from '@angular/core';
import { AuthServicesService } from '../services/auth-services.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { faBucket } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, DoCheck{

  constructor(private service: AuthServicesService,private router:Router, private dilog:MatDialog){}

   isLoggedIn:boolean=false;
   isAdminUser:boolean=false;
   navBarHeight:any
   faBucket=faBucket

   ngDoCheck(): void {
    this.isLoggedIn=this.service.isLoggedIn()
    this.isAdminUser=this.service.isAdmin()
   }

   itemsInCart:any=0
   changedItemsInCart=false
  ngOnInit(): void {
    this.isLoggedIn=this.service.isLoggedIn()
    this.isAdminUser=this.service.isAdmin()

    this.service.getItemsInCart.subscribe(items=>{
      if(this.itemsInCart<items){
        console.log('entry')
          let element = document.querySelector('.bucket')
          element?.classList.add('slide-animation')
          setTimeout(() => {
            element?.classList.remove('slide-animation')
          }, 1000);
      }
      if(this.itemsInCart>items){
        console.log('entry')
          let element = document.querySelector('.bucket')
          element?.classList.add('shake-animation')
          setTimeout(() => {
            element?.classList.remove('shake-animation')
          }, 1000);
      }
      this.itemsInCart=items
    })
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['/home'])
    this.ngOnInit()
  }
  login(){
    const dialog = this.dilog.open(LoginComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '30%',
      disableClose: true

    })
    dialog.afterClosed().subscribe(res => {
      this.ngOnInit()
    })
  }

  

}


