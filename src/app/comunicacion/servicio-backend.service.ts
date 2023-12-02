import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
