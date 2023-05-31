import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //si l'user est connecter par défaut est a false
  isLoggedIn: boolean = false
  //la redirection après connection
  redirectUrls: string;

  //on passe par une opétation asynchron avec l'observable
  login(name: string, password: string): Observable<boolean> {
    //on determine en dur les mdp et les identifiants pour le test
    const isLoggedIn = (name == "pikachu" && password == "pikachu")
    //retourner le résultat de cette opération en simulant un delay
    //on retourne qu'il est connecté
    //on délègue l'opération dans le temps d'une seconde pour simuler le serveur
    return of(isLoggedIn).pipe(delay(1000),
      //on recupere isloggedIn pour savoir si il est authentifier
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn) )
  }

  logout() {
    this.isLoggedIn = false;
  }
}
