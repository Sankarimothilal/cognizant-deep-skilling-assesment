import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const isLoggedIn = true;

  if (isLoggedIn) {
    return true;
  } else {
    alert('Access Denied! Please login first.');
    router.navigate(['/']);
    return false;
  }

};