import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

// ? CanActivateFn is not correctly implemented
export class AuthGuard implements CanMatch, CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    private checkAuthStatus(): Observable<boolean> | boolean {

    return this.authService.checkAutentication()
        .pipe(
            tap( isAuthenticated => console.log('Authenticated:', isAuthenticated ) ),
            tap( isAuthenticated => {
                if ( !isAuthenticated ) {
                    this.router.navigate(['./auth/login'])
                }
            }),
        )
    }
    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
        return this.checkAuthStatus();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.checkAuthStatus();
    }
}
