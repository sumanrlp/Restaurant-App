import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-child',
  templateUrl: './profile-child.component.html',
  styleUrls: ['./profile-child.component.css']
})
export class ProfileChildComponent {

  constructor(private router:Router){
    router.navigate(['dashboard/my-account'])
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }
}
