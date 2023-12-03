import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './InicioSesion/iniciosesion/iniciosesion.component';
import { RegistrarComponent } from './registrar/registrar/registrar.component';
import { PeliculasComponent } from './peliculas/peliculas/peliculas.component'

const routes: Routes = [
  {path: '', redirectTo: '/ruta-IniciosesionComponent', pathMatch: 'full'},
  {path: 'ruta-IniciosesionComponent', component:IniciosesionComponent },
  {path: 'ruta-RegistrarComponent', component:RegistrarComponent},
  {path: 'catalogo', component:PeliculasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
