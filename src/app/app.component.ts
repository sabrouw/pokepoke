import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { Pokemon } from '../app/pokemon/pokemon';
@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pokemonList : Pokemon[] = POKEMONS;
  
  ngOnInit(): void {
    
   
  }
  
  
}
