import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServicesService } from '../services/auth-services.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: AuthServicesService,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<PopUpComponent>,
  ) { }
  roleList: any
  editdata: any


  ngOnInit(): void {
    this.service.getUserRoleList().subscribe({
      next: res => {
        this.roleList = res
        console.log(this.roleList)
      },
      error: err => {
        console.log(err)
      }
    })

    if (this.data.userId != null && this.data.userId !== '') {
      this.service.getByUser(this.data.userId).subscribe({
        next: res => {
          this.editdata = res
          console.log(this.editdata)
          this.form.setValue({ role: null, isActive: this.editdata.isActive, id: this.editdata.id })
        }
      })
    }
  }

  form = this.fb.group({
    role: this.fb.control(['', Validators.required]),
    isActive: this.fb.control(false),
    id: this.fb.control([]),

  })

  role() {
    this.form.get('role')
  }
  isActive() {
    this.form.get('isActive')
  }


  updateUser() {
    if (this.form.value.role !== null) {
      console.log(this.form.value)
      this.service.updateUser(this.form.value.id, { isActive: this.form.value.isActive, isActiveLabel: this.form.value.isActive ? 'Active' : 'Disabled', role: this.form.value.role }).subscribe(res => {
        console.log(res)
        this.dialog.close()
      })
    } else {
      alert('Please select role')
    }
  }
}
