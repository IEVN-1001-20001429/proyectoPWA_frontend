import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './InicioSesion/iniciosesion/iniciosesion.component';
import { RegistrarComponent } from './registrar/registrar/registrar.component';

const routes: Routes = [
  {path: 'ruta-IniciosesionComponent', component:IniciosesionComponent },
  {path: 'ruta-RegistrarComponent', component:RegistrarComponent},
  { path: '', redirectTo: '/ruta-IniciosesionComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
