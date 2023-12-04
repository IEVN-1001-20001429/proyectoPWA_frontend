import { Component, OnInit } from '@angular/core';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarComponent } from 'src/app/modals/modal-agregar/modal-agregar.component';
import { ModificarPeliculaComponent } from 'src/app/modals/modificar-pelicula/modificar-pelicula.component';
import { ModalEliminarComponent } from 'src/app/modals/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  
  listaPeliculas: any[] = [];

  constructor(private servicioBackend: ServicioBackendService, private modalService: NgbModal) {}

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

  abrirModal(pelicula: any): void {
    const modalRef = this.modalService.open(ModalAgregarComponent, { size: 'lg' });
    modalRef.componentInstance.pelicula = pelicula;
  }

  abrirModalAgregar(): void{
    this.modalService.open(ModalAgregarComponent, { size: 'ml' });
  }

  abrirModalEditar(pelicula: any):void {
    const modalRef = this.modalService.open(ModificarPeliculaComponent, { size: 'ml' });
    modalRef.componentInstance.pelicula = pelicula;
  }

  abrirModalEliminar(id:any):void {
    const modalRef = this.modalService.open(ModalEliminarComponent, { size: 'ml' });
    modalRef.componentInstance.id = id;
  }
}
