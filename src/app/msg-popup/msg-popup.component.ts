import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioGroup } from '@angular/material/radio';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-msg-popup',
  templateUrl: './msg-popup.component.html',
  styleUrls: ['./msg-popup.component.css']
})
export class MsgPopupComponent {

  constructor(private dialogRef:MatDialogRef<MsgPopupComponent>, private dialog:MatDialog){}

  close(){
    this.dialogRef.close()
    const dialog = this.dialog.open(LoginComponent, {
      enterAnimationDuration: 100,
      exitAnimationDuration: 100,
      width: '30%',
      disableClose: true

    })
    dialog.afterClosed().subscribe(res => {
      
    })
  }
}
