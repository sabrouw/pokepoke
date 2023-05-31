import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss'],
  
})
export class DetailsPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
      }
    }

  deletePokemon(pokemon: Pokemon) {
    // utilisation de la méthode de notre service crééer dans service.ts
    this.pokemonService.deletePokemonById(pokemon.id)
      //redirection une fois qu'il a été supprimé en réutilisant la méthode du dessous
    .subscribe(()=> this.goToPokemonList()) 
  }
  
    goToPokemonList() {
      this.router.navigate(["/pokemons"]);
  
    }
    goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(["/edit/pokemon", pokemon.id]);
   }
  }

