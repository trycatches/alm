import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const role = route.data['role'];
    const token:any = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload:any = decode(token);
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.role !== role
    ) {
      this.router.navigate(['singin']);
      return false;
    }
    return true;
  }
}
