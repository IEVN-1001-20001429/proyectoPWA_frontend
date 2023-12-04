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
import { AdministradorComponent } from './administrador/administrador/administrador.component';
import { ModalAgregarComponent } from './modals/modal-agregar/modal-agregar.component';
import { ModificarPeliculaComponent } from './modals/modificar-pelicula/modificar-pelicula.component';
import { ModalEliminarComponent } from './modals/modal-eliminar/modal-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    RegistrarComponent,
    PeliculasComponent,
    ModalPeliculaComponent,
    AdministradorComponent,
    ModalAgregarComponent,
    ModificarPeliculaComponent,
    ModalEliminarComponent
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
