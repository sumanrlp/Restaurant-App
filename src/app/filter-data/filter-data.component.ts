import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {

  constructor(private dialog: MatDialogRef<FilterDataComponent>) {

  }
  filterActive: any
  filterDisable: any
  filterSatff: any
  filterUser:any
  filterGiven:any
  filterNotGiven:any

  ngOnInit(): void {
    
    if(sessionStorage.getItem('filterActive')!==null){
      this.filterActive=sessionStorage.getItem('filterActive')=='true'?true:false
    }
    if(sessionStorage.getItem('filterDisable')!==null){
      this.filterDisable=sessionStorage.getItem('filterDisable')=='true'?true:false
    }
    if(sessionStorage.getItem('filterSatff')!==null){
      this.filterSatff=sessionStorage.getItem('filterSatff')=='true'?true:false
    }
    if(sessionStorage.getItem('filterUser')!==null){
      this.filterUser=sessionStorage.getItem('filterUser')=='true'?true:false
    }
    if(sessionStorage.getItem('filterGiven')!==null){
      this.filterGiven=sessionStorage.getItem('filterGiven')=='true'?true:false
    }
    if(sessionStorage.getItem('filterNotGiven')!==null){
      this.filterNotGiven=sessionStorage.getItem('filterNotGiven')=='true'?true:false
    }
    
  }

  filter() {
    if(!this.filterActive){
      sessionStorage.removeItem('filterActive')
    }
    if(!this.filterDisable){
      sessionStorage.removeItem('filterDisable')
    }
    if(!this.filterSatff){
      sessionStorage.removeItem('filterSatff')
    }
    if(!this.filterUser){
      sessionStorage.removeItem('filterUser')
    }
    if(!this.filterGiven){
      sessionStorage.removeItem('filterGiven')
    }
    if(!this.filterNotGiven){
      sessionStorage.removeItem('filterNotGiven')
    }
    switch (true) {
      case (this.filterActive && this.filterDisable && this.filterSatff && this.filterUser && this.filterGiven && this.filterNotGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('all');
          break;
        }
      case (this.filterActive && this.filterDisable && this.filterSatff && this.filterUser && this.filterGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('Given');
          break;
        }
      case (this.filterActive && this.filterDisable && this.filterSatff && this.filterUser && this.filterNotGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Not');
          break;
        }
      case (this.filterActive && this.filterDisable && this.filterSatff && this.filterUser):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          this.dialog.close('all');
          break;
        }
      case (this.filterActive && this.filterDisable && this.filterSatff):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          this.dialog.close('staff');
          break;
        }
      case (this.filterActive && this.filterDisable && this.filterUser):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterUser', 'true')
          this.dialog.close('User');
          break;
        }
      case (this.filterActive && this.filterDisable && this.filterGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('Given');
          break;
        }
      case (this.filterActive && this.filterDisable && this.filterNotGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Not');
          break;
        }
      case (this.filterActive && this.filterDisable):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          this.dialog.close('all');
          break;
        }
      case (this.filterSatff && this.filterUser && this.filterGiven && this.filterNotGiven):
        {
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('all');
          break;
        }
      case (this.filterSatff && this.filterUser && this.filterGiven):
        {
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('given');
          break;
        }
      case (this.filterSatff && this.filterUser && this.filterNotGiven):
        {
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Not');
          break;
        }
      case (this.filterSatff && this.filterGiven && this.filterNotGiven):
        {
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('staff');
          break;
        }
      case ( this.filterUser && this.filterGiven && this.filterNotGiven):
        {
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('user');
          break;
        }
      case (this.filterActive && this.filterSatff && this.filterUser):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          this.dialog.close('active');
          break;
        }
      case ( this.filterDisable && this.filterSatff && this.filterUser):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          this.dialog.close('disabled');
          break;
        }
      case (this.filterActive && this.filterSatff && this.filterGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('active_staff_given');
          break;
        }
      case (this.filterActive && this.filterSatff && this.filterNotGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('active_staff_Not');
          break;
        }
        case (this.filterActive && this.filterUser && this.filterGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('active_user_given');
          break;
        }
      case (this.filterActive && this.filterUser && this.filterNotGiven):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('active_user_Not');
          break;
        }
        case (this.filterDisable && this.filterUser && this.filterGiven):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('Disable_user_given');
          break;
        }
      case (this.filterDisable && this.filterUser && this.filterNotGiven):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Disable_user_Not');
          break;
        }
        case (this.filterDisable && this.filterSatff && this.filterGiven):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('Disable_staff_given');
          break;
        }
      case (this.filterDisable && this.filterSatff && this.filterNotGiven):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Disable_staff_Not');
          break;
        }
        case (this.filterActive && this.filterSatff ):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          this.dialog.close('Active_staff');
          break;
        }
        case (this.filterActive && this.filterUser ):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterUser', 'true')
          this.dialog.close('Active_user');
          break;
        }
        case (this.filterDisable && this.filterSatff ):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterSatff', 'true')
          this.dialog.close('Disable_staff')
          break;
        }
        case (this.filterDisable && this.filterUser ):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterUser', 'true')
          this.dialog.close('Disable_user');
          break;
        }
        case (this.filterActive && this.filterGiven ):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('Active_given');
          break;
        }
        case (this.filterActive && this.filterNotGiven ):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Active_not');
          break;
        }
        case (this.filterDisable && this.filterGiven ):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('Disable_Given');
          break;
        }
        case (this.filterDisable && this.filterNotGiven ):
        {
          sessionStorage.setItem('filterDisable', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Disable_not');
          break;
        }
        case (this.filterSatff && this.filterGiven ):
        {
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('Staff_Given');
          break;
        }
        case (this.filterSatff && this.filterNotGiven ):
        {
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Staff_not');
          break;
        }
        case (this.filterUser && this.filterGiven ):
        {
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('User_Given');
          break;
        }
        case (this.filterUser && this.filterNotGiven ):
        {
          sessionStorage.setItem('filterUser', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('User_not');
          break;
        }
        case (this.filterActive && this.filterDisable ):
        {
          sessionStorage.setItem('filterActive', 'true')
          sessionStorage.setItem('filterDisable', 'true')
          this.dialog.close('all');
          break;
        }
        case (this.filterSatff && this.filterUser ):
        {
          sessionStorage.setItem('filterSatff', 'true')
          sessionStorage.setItem('filterUser', 'true')
          this.dialog.close('all');
          break;
        }
        case (this.filterGiven && this.filterNotGiven ):
        {
          sessionStorage.setItem('filterGiven', 'true')
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('all');
          break;
        }
        case (this.filterActive):
        {
          sessionStorage.setItem('filterActive', 'true')
          this.dialog.close('Active');
          break;
        }
        case (this.filterDisable):
        {
          sessionStorage.setItem('filterDisable', 'true')
          this.dialog.close('Disable');
          break;
        }
        case (this.filterSatff):
        {
          sessionStorage.setItem('filterSatff', 'true')
          this.dialog.close('Staff');
          break;
        }
        case (this.filterUser):
        {
          sessionStorage.setItem('filterUser', 'true')
          this.dialog.close('User');
          break;
        }
        case (this.filterGiven):
        {
          sessionStorage.setItem('filterGiven', 'true')
          this.dialog.close('Given');
          break;
        }
        case (this.filterNotGiven):
        {
          sessionStorage.setItem('filterNotGiven', 'true')
          this.dialog.close('Not');
          break;
        }
      default:
        {
          sessionStorage.removeItem('filterActive')
          this.dialog.close('all');
          break;
        }
    }
  }
}
