import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor(private service: AuthServicesService, private fb: FormBuilder, private diologRef: MatDialogRef<AddAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService) { }
  addresses: any[] = []

  ngOnInit(): void {
    this.service.getByUser(sessionStorage.getItem('userName')).subscribe({
      next: res => {
        if (res.Addresses) this.addresses = res.Addresses
      },
      error: err => {
        console.log(err)
      }
    })
    if (this.data) {
      this.form.setValue({ name: this.data.name, contact: this.data.contact, address1: this.data.address1, address2: this.data.address2, pincode: this.data.pincode, city: this.data.city })
    }
  }

  form = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    contact: this.fb.control('', [Validators.required]),
    address1: this.fb.control('', [Validators.required]),
    address2: this.fb.control('', [Validators.required]),
    pincode: this.fb.control('', [Validators.required]),
    city: this.fb.control('', [Validators.required]),
  })

  get name() {
    return this.form.get('name')
  }
  get contact() {
    return this.form.get('contact')
  }
  get address1() {
    return this.form.get('address1')
  }
  get address2() {
    return this.form.get('address2')
  }
  get pincode() {
    return this.form.get('pincode')
  }
  get city() {
    return this.form.get('city')
  }

  submit() {
    if (this.data) {
      this.addresses[this.data.index] = this.form.value
      this.service.updateUser(sessionStorage.getItem('userName'), { Addresses: this.addresses }).subscribe({
        next: res => {
          console.log(res)
          this.toastr.success('Updated Successfully')
        },
        error: err => {
          console.log(err)
          this.toastr.error('Unexpected error from server side')
        }
      })
    }
    else {
      this.addresses.push(this.form.value)
      this.service.updateUser(sessionStorage.getItem('userName'), { Addresses: this.addresses }).subscribe({
        next: res => {
          console.log(res)
          this.toastr.success('Added Successfully')
        },
        error: err => {
          console.log(err)
          this.toastr.error('Unexpected error from server side')
        }
      })
    }
    this.diologRef.close()
  }



}
