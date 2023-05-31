import { Component , Input, OnInit} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  
  @Input() pokemon!: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    //isAddform est = atrue si dans l'url il y a le mot add
    this.isAddForm = this.router.url.includes('add');
  }
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }
  
  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1)
    }
  }
  
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }


  
  onSubmit() {
    //dans le cas d'un ajout
    if (this.isAddForm) {
      this.pokemonService.addPokemonById(this.pokemon)
        //on veut attribuer un id lors de la création d'un pokemon coté serveur
        .subscribe((pokemon : Pokemon) => this.router.navigate(["/pokemon", pokemon.id]));
    } else{
      //sinon redirection habituelle
      this.pokemonService.updatePokemon(this.pokemon)
    .subscribe(() => this.router.navigate(["/pokemon", this.pokemon.id]));
    
  }    
  }
}
