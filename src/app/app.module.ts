import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms';
import { IniciosesionComponent } from './InicioSesion/iniciosesion/iniciosesion.component';
import { RegistrarComponent } from './registrar/registrar/registrar.component';
import { PeliculasComponent } from './peliculas/peliculas/peliculas.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPeliculaComponent } from './modals/modal-pelicula/modal-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    RegistrarComponent,
    PeliculasComponent,
    ModalPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
