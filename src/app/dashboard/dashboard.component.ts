import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../services/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
  logout(){
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }
}
