import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/users'

  getAll() {
    return this.http.get(this.url)
  }

  getP(){
    return this.http.get('http://localhost:5000/login');
  }

  getByUser(User:any) {
    return this.http.get(this.url+'/'+User)
  }

  proceedRegisteration(data:any) {
    return this.http.post(this.url,data)
  }

  updateUser(id:any,data:any){
    return this.http.patch(this.url+'/'+id, data)
  }

  deleteUser(id:any){
    return this.http.delete(this.url+'/'+id)
  }

  isLoggedIn() {
    return sessionStorage.getItem('userName')!=null
  }
  isAdmin() {
    if(sessionStorage.getItem('role')==='Admin') return true;
    else return false
  }

  getUserRole() {
    return sessionStorage.getItem('role')
  }

  getUserRoleList() {
    return this.http.get('http://localhost:3000/role')
  }

  getAllOrders(){
    return this.http.get('http://localhost:3000/orders')
  }

  getOrderByuser(id:any){
    return this.http.get('http://localhost:3000/orders'+'/'+id)
  }

  placeOrder(data:any){
    return this.http.post('http://localhost:3000/orders',data)
  }

  //cart items count
 items:any=0
  private itemsInCarts= new BehaviorSubject(0)
  getItemsInCart = this.itemsInCarts.asObservable();
  changedItemsInCart:any = this.itemsInCarts.asObservable();

  setItemsinCart(items:any){
    this.items+=items
    return (this.itemsInCarts.next(this.items))
    
  }
  ischangedItemsInCart(value:any){
    return this.changedItemsInCart.next(value)
  }


}
