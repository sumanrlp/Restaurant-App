import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from '../services/auth-services.service';
import { inject } from '@angular/core';



export const AuthGaurdLoddedIn:CanActivateFn= (route, state):boolean =>{

  const router= inject(Router);
  const service= inject(AuthServicesService)
  if(service.isLoggedIn()){
    console.log('hitted')
    return true
  }else{
    console.log('not')
    router.navigate(['/login'], {queryParams:{returnUrl:state.url}})
    return false
  }

}

export const AuthGaurdAdmin:CanActivateFn= (route, state):boolean =>{

  const router= inject(Router);
  const service= inject(AuthServicesService)
  if(service.isAdmin()){
    console.log('hitted')
    return true
  }else{
    console.log('not')
    router.navigate(['/home'])
    alert('You dont have access to this page')
    return false
  }

}
