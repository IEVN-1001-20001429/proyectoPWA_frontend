import { Component} from '@angular/core';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  datos:any;
  email:string = "";
  password:string = "";

  constructor(private servicioBackend: ServicioBackendService, private router: Router) {}

  buscarUsuario() {
    const datos = {
      parametro1: this.email,
      parametro2: this.password,
    };

    this.servicioBackend.buscarUsuario(datos).subscribe(
      (respuesta: any) => {
        console.log('Respuesta del backend:', respuesta);
        if(respuesta.exito){
          alert("Se valido el usuario")
          this.router.navigate(['/catalogo']); // Aqui debe de ir la ruta de la pagina
        }else{
          alert("El email o contraseña son incorrectos")
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
