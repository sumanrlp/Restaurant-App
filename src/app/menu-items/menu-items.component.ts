import { Component } from '@angular/core';
import { AuthServicesService } from '../services/auth-services.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent {

  constructor(private service:AuthServicesService, private route:Router, private router:MatDialogRef<MenuItemsComponent>){}

  isKb_AddToBucketCLicked:any=false
  isPb_AddToBucketCLicked:any=false
  isVp_AddToBucketCLicked:any=false
  isHg_AddToBucketCLicked:any=false
  isBv_AddToBucketCLicked:any=false
  isSp_AddToBucketCLicked:any=false

  addToBucketToggle(name:any){
    if(this.service.isLoggedIn()){
      if(name=='kb_btn'){
        this.isKb_AddToBucketCLicked=!this.isKb_AddToBucketCLicked
        if(this.isKb_AddToBucketCLicked) this.service.setItemsinCart(this.Kb_count)
        else this.service.setItemsinCart(-this.Kb_count)
        this.Kb_count=1
      }
      if(name=='pb_btn'){
        this.isPb_AddToBucketCLicked=!this.isPb_AddToBucketCLicked
        if(this.isPb_AddToBucketCLicked) this.service.setItemsinCart(this.Pb_count)
        else this.service.setItemsinCart(-this.Pb_count)
        this.Pb_count=1
      }
      if(name=='vp_btn'){
        this.isVp_AddToBucketCLicked=!this.isVp_AddToBucketCLicked
        if(this.isVp_AddToBucketCLicked) this.service.setItemsinCart(this.Vp_count)
        else this.service.setItemsinCart(-this.Vp_count)
        this.Vp_count=1
      }
      if(name=='hg_btn'){
        this.isHg_AddToBucketCLicked=!this.isHg_AddToBucketCLicked
        if(this.isHg_AddToBucketCLicked) this.service.setItemsinCart(this.Hg_count)
        else this.service.setItemsinCart(-this.Hg_count)
        this.Hg_count=1
      }
      if(name=='bv_btn'){
        this.isBv_AddToBucketCLicked=!this.isBv_AddToBucketCLicked
        if(this.isBv_AddToBucketCLicked) this.service.setItemsinCart(this.Bv_count)
        else this.service.setItemsinCart(-this.Bv_count)
        this.Bv_count=1
      }
      if(name=='sp_btn'){
        this.isSp_AddToBucketCLicked=!this.isSp_AddToBucketCLicked
        if(this.isSp_AddToBucketCLicked) this.service.setItemsinCart(this.Sp_count)
        else this.service.setItemsinCart(-this.Sp_count)
        this.Sp_count=1
      } 
    }
    else{
      this.route.navigate(['/login'])
    }
  }

  Kb_count:any=1
  Pb_count:any=1
  Vp_count:any=1
  Hg_count:any=1
  Bv_count:any=1
  Sp_count:any=1

  modifyCount(num:any, action:any){
    if(num=='kb_btn'){
      if( action=='+'){
        if(this.Kb_count<11){ 
          this.Kb_count++; 
          this.service.setItemsinCart(1)
        }
        else alert('Max selection is 10')
      }else{
        if(this.Kb_count>1) this.Kb_count--;
        else this.isKb_AddToBucketCLicked=!this.isKb_AddToBucketCLicked
        this.service.setItemsinCart(-1)
      }
    }
    if(num=='pb_btn'){
      if( action=='+'){
        if(this.Pb_count<11){ 
          this.Pb_count++;
          this.service.setItemsinCart(1)
        }
        else alert('Max selection is 10')
      }else{
        if(this.Pb_count>1) this.Pb_count--;
        else this.isPb_AddToBucketCLicked=!this.isPb_AddToBucketCLicked
        this.service.setItemsinCart(-1)
      }
    }
    if(num=='vp_btn'){
      if( action=='+'){
        if(this.Vp_count<11){
           this.Vp_count++;
           this.service.setItemsinCart(1)
        }
        else alert('Max selection is 10')
      }else{
        if(this.Vp_count>1) this.Vp_count--;
        else this.isVp_AddToBucketCLicked=!this.isVp_AddToBucketCLicked
        this.service.setItemsinCart(-1)
      }
    }
    if(num=='hg_btn'){
      if( action=='+'){
        if(this.Hg_count<11){
           this.Hg_count++;
           this.service.setItemsinCart(1)
        }
        else alert('Max selection is 10')
      }else{
        if(this.Hg_count>1) this.Hg_count--;
        else this.isHg_AddToBucketCLicked=!this.isHg_AddToBucketCLicked
        this.service.setItemsinCart(-1)
      }
    }
    if(num=='bv_btn'){
      if( action=='+'){
        if(this.Bv_count<11){
           this.Bv_count++;
           this.service.setItemsinCart(1)
        }
        else alert('Max selection is 10')
      }else{
        if(this.Bv_count>1) this.Bv_count--;
        else this.isBv_AddToBucketCLicked=!this.isBv_AddToBucketCLicked
        this.service.setItemsinCart(-1)
      }
    }
    if(num=='sp_btn'){
      if( action=='+'){
        if(this.Sp_count<11){
           this.Sp_count++;
           this.service.setItemsinCart(1)
        }
        else alert('Max selection is 10')
      }else{
        if(this.Sp_count>1) this.Sp_count--;
        else this.isSp_AddToBucketCLicked=!this.isSp_AddToBucketCLicked
        this.service.setItemsinCart(-1)
      }
    }
  }

  close(){
    this.router.close()
  }

}
