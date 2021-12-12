import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAsesor } from '../modelos/asesor.modelo';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  ObtenerAsesor(): Observable<ModeloAsesor[]>
  {
    return this.http.get<ModeloAsesor[]>(`${this.url}/empleados`);
  }
  CrearAsesor(asesor: ModeloAsesor): Observable<ModeloAsesor>
  {
    return this.http.post<ModeloAsesor>(`${this.url}/empleados`,asesor,{
      headers: new HttpHeaders({

      })
    });

  }
  EditarAsesor(asesor: ModeloAsesor): Observable<ModeloAsesor>
  {
    return this.http.put<ModeloAsesor>(`${this.url}/empleados`,asesor,{
      //Falta crear metodos para obtener token
      headers: new HttpHeaders({
        //'Authorization': 'Bearer '
      })

    });

  }
  EliminarAsesor(id:string): Observable<any>
  {
    return this.http.delete(`${this.url}/empleados/${id}`,{
      //Falta crear metodos para obtener token
      headers: new HttpHeaders({
       // 'Authorization': 'Bearer '
      })

    });

  }
}
