import { CanActivateFn, Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';
import { inject } from '@angular/core';



export const AuthGaurdLoddedIn:CanActivateFn= ( state):boolean =>{

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

export const AuthGaurdAdmin:CanActivateFn= ( state):boolean =>{

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
