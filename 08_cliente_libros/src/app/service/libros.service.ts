import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../model/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
url:string="http://localhost:8000/";
  constructor(private http:HttpClient) { }
  tematicas():Observable<string[]>{
    return this.http.get<string[]>(this.url+"tematicas");
  }
  catalogo():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url+"catalogo");
  }
  libroPorIsbn(isbn:number):Observable<Libro>{
    return this.http.get<Libro>(this.url+"libro/"+isbn);
  }
  nuevoLibro(libro:Libro):Observable<void>{
    return this.http.post<void>(this.url+"alta",libro);
  }
}
