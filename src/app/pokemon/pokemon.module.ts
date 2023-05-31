import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon.service';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { BorderCardsDirective } from './border-cards.directive';
import { RouterModule, Routes } from '@angular/router';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonTypeColorPipe } from '../pokemon/pokemon-type-color.pipe';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { LoginGuard } from '../login.guard';


const pokemonRoutes: Routes = [
  
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate:[LoginGuard] },
  { path: 'pokemon/add', component: AddPokemonComponent, canActivate:[LoginGuard] },
  { path: 'pokemon/:id', component: DetailsPokemonComponent, canActivate:[LoginGuard] },
  { path: 'pokemons', component: ListPokemonComponent, canActivate:[LoginGuard] },

];


@NgModule({
  declarations: [
    PokemonTypeColorPipe,
    PokemonFormComponent,
    ListPokemonComponent,
    DetailsPokemonComponent,
    BorderCardsDirective,
    EditPokemonComponent,
    AddPokemonComponent,   
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ], 
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
