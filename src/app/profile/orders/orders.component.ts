import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  constructor(private service:AuthServicesService){}

  orders:any

  ngOnInit(): void {
    this.service.getOrderByuser(sessionStorage.getItem('userName')).subscribe({
      next:(res:any)=>{
        this.orders=res.items
      },
      error:err=>{
        console.log(err)
      }
    })
  }
}
