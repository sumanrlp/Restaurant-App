import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-child',
  templateUrl: './profile-child.component.html',
  styleUrls: ['./profile-child.component.css']
})
export class ProfileChildComponent {

  constructor(private router:Router){
    router.navigate(['dashboard/my-account'])
  }

}
