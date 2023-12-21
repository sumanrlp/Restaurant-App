import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/users'

  getAll() {
    return this.http.get(this.url)
  }

  getByUser(User:any):Observable<any> {
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
 itemsCount:any=0
 itemsInCart:any[]=[]
  private itemsCountInCarts= new BehaviorSubject(0)
  getItemsCountInCart = this.itemsCountInCarts.asObservable();

  setItemsCountInCart(items:any){
    this.itemsCount+=items
    return (this.itemsCountInCarts.next(this.itemsCount))
    
  }

  addItemsInCart(item:any, count:any){
    return this.itemsInCart.push({food:item, quentity:count})
  }
  removeItemsInCart(items:any){
    return this.itemsInCart=items
  }

  getItemsInCart(){
    return this.itemsInCart
  }


}
