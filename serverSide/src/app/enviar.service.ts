import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnviarService {

    api  = 'http://localhost:3131/api/solicitud/nuevaSolicitud';
  constructor(private http: HttpClient) { }
  upload(datos: any): Observable<any> {
    return this.http.post(this.api, datos);
  }
}
