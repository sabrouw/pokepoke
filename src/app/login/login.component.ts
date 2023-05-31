import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //On met a dispo les variables pour notre logique et notre template
  message: string = "vous etes déconnecté";
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    //initaliser ce qu'on utilise dans le template
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message='vous etes connecté'
    }
    else {
      this.message='Identifiant ou mot de passe sont incorrects'
    }
  }
  //methode pour appler le service d'authentification
  login() {
    //afficher un message pour appeler le serveur
    this.message = "connection en cours..."
    //appeler authService pour voir si l'user a le droit d'acceder ou pas au site
    this.auth.login(this.name, this.password)
      // pour obtenir le résultat
      .subscribe((isLoggedIn: boolean) => {
        //mettre a jour le message
        this.setMessage()
        //rediriger vers la liste de tous les pokemons
        //si il est connecter
        if (isLoggedIn) {
          this.router.navigate(["/pokemons"])
        }
        else {
          //reinitialiser le mot de passe
          this.password = ''
          this.router.navigate(["/login"])
        }
      })
    
  }
  logout(){
    //appeler mon auth service
    this.auth.logout();
    //mettre a jour le message
    this.message ='vous etes déconnecté';
  }
}
