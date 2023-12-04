import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioBackendService {
  constructor(private http: HttpClient) { }

  buscarUsuario(datos: any) {
    //'http://localhost:5000' es la URL del backend Flask
    const url = `http://localhost:5000/user?email=${datos.parametro1}&password=${datos.parametro2}`;

    return this.http.get(url);
  }

  registrarUsuario(datos: any){
    const url = `http://localhost:5000/user_registration`;
    const body = {
      email: datos.parametro1,
      password: datos.parametro2
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url,body,{headers});
  }

  recolectarPeliculas(){
    const url = `http://localhost:5000/movies`;

    return this.http.get(url);
  }

  //Metodos para el CRUD de las peliculas
  agregarPelicula(datos: any){
    const url = `http://localhost:5000/movie_registration`;
    const body = {
      titulo: datos.titulo,
      fecha: datos.fecha,
      genero: datos.genero,
      sinopsis: datos.sinopsis,
      estudio: datos.estudio,
      imagen: datos.imagen,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url,body,{headers});
  }

  //Metodo para eliminar pelicula
  eliminarPelicula(id:any){
    const url = `http://localhost:5000/movie_delete`;
    const body = {
      id: id
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url,body,{headers});
  }

  //Metodo para modificar una pelicula
  modificarPelicula(datos:any){
    const url = `http://localhost:5000/movie_edit`;
    const body = {
      id: datos.id,
      titulo: datos.titulo,
      fecha: datos.fecha,
      genero: datos.genero,
      sinopsis: datos.sinopsis,
      estudio: datos.estudio,
      imagen: datos.imagen,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url,body,{headers});
  }

  //Metodo para subir imagenes al ServicioBackendService
  subirImagen(archivo: File):Observable<any> {
    const formData = new FormData();
    formData.append('archivo', archivo);

    return this.http.post(`http://localhost:5000/subir-archivo`, formData);
  }
}
