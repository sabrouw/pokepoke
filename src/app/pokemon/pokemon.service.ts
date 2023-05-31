import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {
  
  
  
  constructor(private http: HttpClient) {

   };

 
/*******************METHODES DISPONIBLES DANS TOUTES L APPLI************** */
getPokemonList(): Observable <Pokemon[]> {
    return this.http.get<Pokemon[]> ('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
getPokemonById(pokemonId: number): Observable <Pokemon | undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
}
  
  searchPokemonList(term: string): Observable <Pokemon[]> {
    return this.http.get<Pokemon[]>(`api/pokemons/?name${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
  )
  
}

updatePokemon(pokemon: Pokemon): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': ' application/json' })
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    ) 
  }
deletePokemonById(pokemonId: number): Observable<null>{
    // transmettre l'id qu'on veut supprimer
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe
    (tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null)))
  } 
  
addPokemonById(pokemon: Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': ' application/json' })
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    ) 
  }

getPokemonTypeList(): string[] {
    return [
      'plante',
      'feu',
      'eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'

    ]
  }
    /****************GESTION DES ERREURS*************** */
private log(response:any) {
  console.table(response)
}

private handleError(error: Error, errorValue: any) {
console.error(error)
return of(errorValue);
}
}
