import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';
import * as fs from 'fs-extra';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {
  @Input() pelicula: any;
  @ViewChild('fileInput') fileInput!: ElementRef;

  miArchivo: File = new File(["Hola"], "ejemplo.txt");

  titulo:string = '';
  fecha:string = '';
  genero:string = '';
  sinopsis:string = '';
  estudio:string = ''
  

  constructor(public activeModal: NgbActiveModal, private servicioBackend: ServicioBackendService){}

  ngOnInit(){
    this.titulo = this.pelicula.titulo;
    this.fecha = this.pelicula.fecha;
    this.genero = this.pelicula.genero;
    this.sinopsis = this.pelicula.sinopsis;
    this.estudio = this.pelicula.estudio;
  }
  onFileSelected(): void {
    const input = this.fileInput.nativeElement;
    if (input.files && input.files.length > 0) {
      this.miArchivo = input.files[0];
    }
  }

  guardarArchivo(){
    if (this.miArchivo) {
      this.servicioBackend.subirImagen(this.miArchivo).subscribe(
        response => {
          console.log('Archivo subido exitosamente:', response);
        },
        error => {
          console.error('Error al subir el archivo:', error);
        }
      );
    }
  }

  enviarDatosModificar(){
    const datos = {
      id: this.pelicula.id,
      titulo: this.titulo,
      fecha: this.fecha,
      genero: this.genero,
      sinopsis: this.sinopsis,
      estudio: this.estudio,
      imagen: this.miArchivo?.name,
    };

    this.servicioBackend.modificarPelicula(datos).subscribe(
      (respuesta: any) => {
        console.log('Respuesta del backend:', respuesta);
        if(respuesta.exito){
          alert("Se modifico la pelicula con exito")
        }else{
          alert("Hubo un problema al modificar la pelicula")
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
