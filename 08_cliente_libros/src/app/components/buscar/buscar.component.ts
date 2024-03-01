import { Component } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  libro:Libro;
  isbn:number;
  constructor(private librosService:LibrosService){

  }
  buscar():void{
    this.librosService.libroPorIsbn(this.isbn).subscribe(data=>this.libro=data);
  }
}
