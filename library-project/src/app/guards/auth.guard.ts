import { inject } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  if(inject(AuthService).isAuthenticated()){return true;}
  
  else{inject(Router).navigate(['/register'])
return false;}
  
};
