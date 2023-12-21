import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent implements OnInit {

  constructor(private service: AuthServicesService, private toastr: ToastrService, private diolog: MatDialog) { }

  userdata: any;
  sideNav: any
  addresses: any

  ngOnInit(): void {
    this.service.getByUser(sessionStorage.getItem('userName')).subscribe({
      next: (res: any) => {
        this.userdata = res
        this.addresses = res.Addresses
        console.log(this.userdata)
        console.log(this.userdata.name)
      },
      error: err => {
        console.warn('User not found')
      }
    })
  }

  isEditClicked = false
  isDataEdited = false

  tempName: any
  tempEmail: any
  tempId: any

  edit(name: any, email: any, id: any) {
    this.tempName = name.value
    this.tempEmail = email.value
    this.tempId = id.value

    Array.from(document.getElementsByClassName('data') as HTMLCollectionOf<HTMLElement>).forEach(element => {
      element.style.border = '1px solid black'
    });
    this.isEditClicked = true
  }

  changed(name: any, email: any, id: any, ref?: any) {

    if (name.value == this.tempName && email.value == this.tempEmail && id.value == this.tempId) {
      this.isDataEdited = false
    }
    if (name.value !== this.tempName || email.value !== this.tempEmail || id.value !== this.tempId) {
      this.isDataEdited = true
    }
    if (ref?.errors) this.isDataEdited = false
  }

  update(name: HTMLInputElement, email: any, id: HTMLInputElement) {
    this.service.updateUser(sessionStorage.getItem('userName'), { name: name.value, email: email.value, id: id.value }).subscribe({
      next: res => {
        this.ngOnInit()
        console.log(res)
        this.isDataEdited = false
        this.isEditClicked = false
        Array.from(document.getElementsByClassName('data') as HTMLCollectionOf<HTMLElement>).forEach(element => {
          element.style.border = 'none'
        });
        this.toastr.success('Updated Successfully')
      },
      error: err => {
        console.log(err)
        this.toastr.error('Unexpected error form server side', 'Please try again later')
      }
    })
  }

  cancel(name: any, email: any, id: any) {
    Array.from(document.getElementsByClassName('data') as HTMLCollectionOf<HTMLElement>).forEach(element => {
      element.style.border = 'none'
    });

    this.isEditClicked = false
    this.isDataEdited = false

    let emailElement: any = document.getElementById('email')
    let nameElement: any = document.getElementById('name')
    let idElement: any = document.getElementById('id')
    if (emailElement) {
      emailElement.value = this.userdata.email
    }
    if (nameElement) {
      nameElement.value = this.userdata.name
    }
    if (idElement) {
      idElement.value = this.userdata.id
    }
  }
  addAddress() {
    const dialog = this.diolog.open(AddAddressComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '30%',
      disableClose: true

    })
    dialog.afterClosed().subscribe({
      next: res => {
        console.log(res)
        this.ngOnInit()
      }
    })
  }

  editAddress(index: any) {
    const dialog = this.diolog.open(AddAddressComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '30%',
      disableClose: true,
      data: {
        name: this.addresses[index].name,
        contact: this.addresses[index].contact,
        address1: this.addresses[index].address1,
        address2: this.addresses[index].address2,
        city: this.addresses[index].city,
        pincode: this.addresses[index].pincode,
        index: index
      }

    })
    dialog.afterClosed().subscribe({
      next: res => {
        console.log(res)
        this.ngOnInit()
      }
    })
  }

  deleteAddress(index: any) {
    this.addresses.splice(index, 1)
    this.service.updateUser(sessionStorage.getItem('userName'), { Addresses: this.addresses }).subscribe({
      next: res => {
        console.log(res)
        this.toastr.success('Removed Successfully')
      },
      error: err => {
        console.log(err)
        this.toastr.error('Unexpected error from server side')
      }
    })
  }
}
