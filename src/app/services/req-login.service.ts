import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqLoginService implements OnInit{

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  login(data:any) {
    
    this.http.post("http://localhost:5000/login",{}).subscribe((res)=>{
      console.log(res)
    })
  }
}
