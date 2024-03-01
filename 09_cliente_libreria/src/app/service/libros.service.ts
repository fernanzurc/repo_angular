import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../model/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  usuario:string="admin";
  password:string="admin";
  url:string="http://localhost:9000/";
  constructor(private http:HttpClient,private headers:HttpHeaders) { }
  tematicas():Observable<string[]>{
    return this.http.get<string[]>(this.url+"tematicas");
  }
  catalogo():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url+"catalogo");
  }
  libroPorIsbn(isbn:number):Observable<Libro>{
    let cadBase64=btoa(this.usuario+":"+this.password);
    //añadir encabezado Authorization
    this.headers.set("Authorization","Basic "+cadBase64);
    return this.http.get<Libro>(this.url+"libro/"+isbn,{headers:this.headers});
  }
  nuevoLibro(libro:Libro):Observable<void>{
    return this.http.post<void>(this.url+"alta",libro);
  }


}
