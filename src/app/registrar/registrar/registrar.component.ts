import { Component } from '@angular/core';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  email:string = "";
  password:string = "";
  comprobacionPassword:string = "";

  constructor(private servicioBackend: ServicioBackendService, private router: Router) {}

  registrarUsuario(){
    if(this.password === this.comprobacionPassword){
      const datos = {
        parametro1: this.email,
        parametro2: this.password,
      };
  
      if(datos.parametro1 == '' || datos.parametro2 == ''){
        alert("Te faltan campos por llenar");
      }else{
        this.servicioBackend.registrarUsuario(datos).subscribe(
          (respuesta: any) => {
            console.log('Respuesta del backend:', respuesta);
            if(respuesta.exito){
              alert("El usuario ha sido registrado")
              this.router.navigate(['/catalogo']); // Aqui debe de ir la ruta de la pagina de peliculas
            }else{
              alert("El correo ya fue registrado")
            }
            // Manejar la respuesta del backend aquí
          },
          (error) => {
            console.error('Error en la solicitud:', error);
            // Manejar errores aquí
          }
        );
      }

    }else{
      alert("Las contraseñas no coinciden");
    }
  }
}
