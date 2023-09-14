import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/feedback'

  getAll(){
    return this.http.get(this.url)
  }
  getByUser(id:any){
    return this.http.get(this.url+"/"+id)
  }
  submit(feedback:any){
    return this.http.post(this.url, feedback)
  }
}
