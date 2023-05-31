import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'
import { FormsModule } from '@angular/forms';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    PokemonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation :false}),
    AppRoutingModule,
    
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
