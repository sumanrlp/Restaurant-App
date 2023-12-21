import { Component, OnInit, Inject } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit{

  constructor(private service:FeedbackService,  @Inject(MAT_DIALOG_DATA) public data:any, private dialog: MatDialogRef<ViewFeedbackComponent>){}

  feedbackData:any

  ngOnInit(): void {
    
    if(this.data.userId!==null && this.data.userId!==''){
      this.service.getByUser(this.data.userId).subscribe({
        next: res=>{
          this.feedbackData=res
        },
        error:err=>{
          console.log(err)
        }
      })
    }
  }

}
