import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.css']
})
export class ModalAgregarComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  miArchivo: File | null=null;

  titulo:string = '';
  fecha:string = '';
  genero:string = '';
  sinopsis:string = '';
  estudio:string = ''
  

  constructor(public activeModal: NgbActiveModal, private servicioBackend: ServicioBackendService){}

  onFileSelected(): void {
    const input = this.fileInput.nativeElement;
    if (input.files && input.files.length > 0) {
      this.miArchivo = input.files[0];
    }
  }

  enviarDatosAgregar(){
    if(this.titulo != '' && this.fecha != '' && this.genero != '' && this.sinopsis != '' && this.estudio != '' && this.miArchivo?.name != null){
      const datos = {
        titulo: this.titulo,
        fecha: this.fecha,
        genero: this.genero,
        sinopsis: this.sinopsis,
        estudio: this.estudio,
        imagen: this.miArchivo?.name,
      };
  
      this.servicioBackend.agregarPelicula(datos).subscribe(
        (respuesta: any) => {
          console.log('Respuesta del backend:', respuesta);
          if(respuesta.exito){
            alert("Se registro la pelicula con exito")
          }else{
            alert("Hubo un problema al registrar la pelicula")
          }
          // Manejar la respuesta del backend aquí
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Manejar errores aquí
        }
      );
    }else{
      alert("Te faltan campos por llenar");
    }
  }
}
