import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    //INJECTION DU SERVICE loginService
    private authService: AuthService,
    private router: Router) 
    {};
  canActivate() {
    //on utilise les nouveaux services qu'on vient de creer login et logout
    //recuperer si authService renvoie true ou false
    //si il est bien = à true je l'autorise à voir ma liste de pokemon
    if (this.authService.isLoggedIn) {
      return true;
      
    }

    this.router.navigate(["/login"]);
    return false;
  }
 
  
}
