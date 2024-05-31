import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = () => {

  //We can't create constructor here so we use inject
  const authService = inject(AuthService);
  const route = inject(Router);
  if(authService.isAuthenticated()){
    return true;
  }else{
    route.navigate(['/login']);
    return false;
  }
};
