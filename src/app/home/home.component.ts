import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { AuthServicesService } from '../services/auth-services.service';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { fade, slide } from '../animations';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fade, slide]
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  isMenuExpanded: boolean = true;
  menuToggle() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  constructor(private route: Router, private dialog: MatDialog, private service: AuthServicesService) { }

  ngOnInit(): void {
    if (this.route.url === '/login' || this.route.url === '/login?returnUrl=%2Ffeedback' || this.route.url === '/login?returnUrl=%2Fadmin' || this.route.url === '/login?returnUrl=%2Fdashboard' || this.route.url === 'login?returnUrl=%2Fdashboard%2Fmy-account') {
      console.log('aagaye')
      const dialog = this.dialog.open(LoginComponent, {
        enterAnimationDuration: 100,
        exitAnimationDuration: 100,
        width: '30%',
        disableClose: true

      })
      dialog.afterClosed().subscribe(res => {

      })
    }
    if (this.route.url === '/signup') {
      const dialog = this.dialog.open(SignupComponent, {
        enterAnimationDuration: 100,
        exitAnimationDuration: 100,
        width: '30%',
        disableClose: true

      })
      dialog.afterClosed().subscribe(res => {
        this.route.navigate(['/home'])
      })
    }
    if (this.route.url === '/feedback') {
      const dialog = this.dialog.open(FeedbackComponent, {
        enterAnimationDuration: 100,
        exitAnimationDuration: 100,
        width: '30%',
        disableClose: true

      })
      dialog.afterClosed().subscribe(res => {
        this.route.navigate(['/home'])
      })
    }
  }

  feedback() {

  }
  isKb_AddToBucketCLicked: any = false
  isPb_AddToBucketCLicked: any = false
  isVp_AddToBucketCLicked: any = false
  isHg_AddToBucketCLicked: any = false
  isBv_AddToBucketCLicked: any = false
  isSp_AddToBucketCLicked: any = false

  addToBucketToggle(name: string) {
    if (this.service.isLoggedIn()) {
      if (name == 'kb_btn') {
        this.isKb_AddToBucketCLicked = !this.isKb_AddToBucketCLicked
        if (this.isKb_AddToBucketCLicked){
          // this.service.setItemsCountInCart(name.substring(0,2))
          this.service.setItemsCountInCart(this.Kb_count)
        }
        else this.service.setItemsCountInCart(-this.Kb_count)
        this.Kb_count = 1
      }
      if (name == 'pb_btn') {
        this.isPb_AddToBucketCLicked = !this.isPb_AddToBucketCLicked
        if (this.isPb_AddToBucketCLicked){
          // this.service.setItemsCountInCart(name.substring(0,2))
          this.service.setItemsCountInCart(this.Pb_count)
        }
        else this.service.setItemsCountInCart(-this.Pb_count)
        this.Pb_count = 1
      }
      if (name == 'vp_btn') {
        this.isVp_AddToBucketCLicked = !this.isVp_AddToBucketCLicked
        if (this.isVp_AddToBucketCLicked){
          // this.service.setItemsCountInCart(name.substring(0,2))
          this.service.setItemsCountInCart(this.Vp_count)
        }
        else this.service.setItemsCountInCart(-this.Vp_count)
        this.Vp_count = 1
      }
      if (name == 'hg_btn') {
        this.isHg_AddToBucketCLicked = !this.isHg_AddToBucketCLicked
        if (this.isHg_AddToBucketCLicked){
          // this.service.setItemsCountInCart(name.substring(0,2))
          this.service.setItemsCountInCart(this.Hg_count)
        }
        else this.service.setItemsCountInCart(-this.Hg_count)
        this.Hg_count = 1
      }
      if (name == 'bv_btn') {
        this.isBv_AddToBucketCLicked = !this.isBv_AddToBucketCLicked
        if (this.isBv_AddToBucketCLicked){
          // this.service.setItemsCountInCart(name.substring(0,2))
          this.service.setItemsCountInCart(this.Bv_count)
        }
        else this.service.setItemsCountInCart(-this.Bv_count)
        this.Bv_count = 1
      }
      if (name == 'sp_btn') {
        this.isSp_AddToBucketCLicked = !this.isSp_AddToBucketCLicked
        if (this.isSp_AddToBucketCLicked){
          // this.service.setItemsCountInCart(name.substring(0,2))
          this.service.setItemsCountInCart(this.Sp_count)
        }
        else{
          // this.service.setItemsCountInCart(name.substring(0,2))
          this.service.setItemsCountInCart(-this.Sp_count)
        }
        this.Sp_count = 1
      }
    }
    else {
      this.route.navigate(['/login'])
    }
  }

  Kb_count: any = 1
  Pb_count: any = 1
  Vp_count: any = 1
  Hg_count: any = 1
  Bv_count: any = 1
  Sp_count: any = 1

  modifyCount(num: any, action: any) {
    if (num == 'kb_btn') {
      if (action == '+') {
        if (this.Kb_count < 11) {
          this.Kb_count++;
          this.service.setItemsCountInCart(1)
        }
        else alert('Max selection is 10')
      } else {
        if (this.Kb_count > 1) this.Kb_count--;
        else this.isKb_AddToBucketCLicked = !this.isKb_AddToBucketCLicked
        this.service.setItemsCountInCart(-1)
      }
    }
    if (num == 'pb_btn') {
      if (action == '+') {
        if (this.Pb_count < 11) {
          this.Pb_count++;
          this.service.setItemsCountInCart(1)
        }
        else alert('Max selection is 10')
      } else {
        if (this.Pb_count > 1) this.Pb_count--;
        else this.isPb_AddToBucketCLicked = !this.isPb_AddToBucketCLicked
        this.service.setItemsCountInCart(-1)
      }
    }
    if (num == 'vp_btn') {
      if (action == '+') {
        if (this.Vp_count < 11) {
          this.Vp_count++;
          this.service.setItemsCountInCart(1)
        }
        else alert('Max selection is 10')
      } else {
        if (this.Vp_count > 1) this.Vp_count--;
        else this.isVp_AddToBucketCLicked = !this.isVp_AddToBucketCLicked
        this.service.setItemsCountInCart(-1)
      }
    }
    if (num == 'hg_btn') {
      if (action == '+') {
        if (this.Hg_count < 11) {
          this.Hg_count++;
          this.service.setItemsCountInCart(1)
        }
        else alert('Max selection is 10')
      } else {
        if (this.Hg_count > 1) this.Hg_count--;
        else this.isHg_AddToBucketCLicked = !this.isHg_AddToBucketCLicked
        this.service.setItemsCountInCart(-1)
      }
    }
    if (num == 'bv_btn') {
      if (action == '+') {
        if (this.Bv_count < 11) {
          this.Bv_count++;
          this.service.setItemsCountInCart(1)
        }
        else alert('Max selection is 10')
      } else {
        if (this.Bv_count > 1) this.Bv_count--;
        else this.isBv_AddToBucketCLicked = !this.isBv_AddToBucketCLicked
        this.service.setItemsCountInCart(-1)
      }
    }
    if (num == 'sp_btn') {
      if (action == '+') {
        if (this.Sp_count < 11) {
          this.Sp_count++;
          this.service.setItemsCountInCart(1)
        }
        else alert('Max selection is 10')
      } else {
        if (this.Sp_count > 1) this.Sp_count--;
        else this.isSp_AddToBucketCLicked = !this.isSp_AddToBucketCLicked
        this.service.setItemsCountInCart(-1)
      }
    }
  }

  openItem() {
    const dialog = this.dialog.open(MenuItemsComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '50%',
      disableClose: true

    })
    dialog.afterClosed().subscribe(res => {
      this.route.navigate(['/home'])
    })
  }
}



document.addEventListener("DOMContentLoaded", function () {

  const observerabout = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const about = entry.target.querySelector('.about');

      if (entry.isIntersecting) {
        about?.classList.add('slide-animation');
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!

    });
  });
  observerabout.observe(document.querySelector('.aboutContainer')!);

  const observerimg = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const about = entry.target.querySelectorAll('.menuimg');

      if (entry.isIntersecting) {
        about.forEach(ele => {
          ele?.classList.add('zoomIn-animation');
        })
      }

      // We're not intersecting, so remove the class!

    });
  });
  observerimg.observe(document.querySelector('.menu')!);
})
