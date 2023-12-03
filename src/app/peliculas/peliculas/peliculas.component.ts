import { Component, OnInit } from '@angular/core';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  listaPeliculas: any[] = [];

  constructor(private servicioBackend: ServicioBackendService) {}

  ngOnInit(){
    this.servicioBackend.recolectarPeliculas().subscribe(
      (respuesta: any) => {
        console.log('Respuesta del backend:', respuesta);
        if(respuesta.exito){
          this.listaPeliculas = respuesta.peliculas;
          console.log(this.listaPeliculas);
        }else{
          alert("No hay peliculas")
        }
        // Manejar la respuesta del backend aquí
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        // Manejar errores aquí
      }
    );
  }
}
