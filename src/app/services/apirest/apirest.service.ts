import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoriasRequest } from 'src/app/modelo/categoria.request';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  api?:string;
  cabecero = {
    'content-type' : 'application/json',
    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTAsImlhdCI6MTY4ODg2NTk3OSwiZXhwIjoxNjkxNDU3OTc5fQ.osEbOABORUTB5hbaxJIMlp3EDV-nUr_ptRsH9zbxUiQ'
  }

  constructor(private http: HttpClient ) {
    this.api = environment.api;
   }

   getCategorias(): Observable<any>{
    return this.http.get(`${this.api}categorias`, {headers: this.cabecero});
   }
   getCategoriasById(id: any): Observable<any>{
    return this.http.get(`${this.api}categorias/${id}`, {headers: this.cabecero});
   }
   addCategorias(modelo: CategoriasRequest): Observable<any>{
    return this.http.post(`${this.api}categorias`, modelo , {headers: this.cabecero})
   }
   editCategorias(modelo: CategoriasRequest , id : any): Observable<any>{
    return this.http.put(`${this.api}categorias/${id}`, modelo, {headers: this.cabecero})
   }
   deleteCategoria(id: any): Observable<any>{
    return this.http.delete(`${this.api}categorias/${id}`, {headers: this.cabecero})
   }
}
