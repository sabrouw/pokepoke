import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemonSelected : Pokemon | undefined ;
  color = '#7209b7';
  
  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    
  ) {}
  
  ngOnInit() {
    // subscribe permet de s'abonner à cette methode on recupere la pokemonlist et push
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
   
  }
  selectPokemon(pokemonId:string) {
    //le + convertit une string en number
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon) {
      console.log(`Vous avez demandé le pokemon: ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
    else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
    
  }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon",pokemon.id ])

  }
   
}
