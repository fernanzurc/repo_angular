import { Pais } from './../../model/Paises';
import { PaisesService } from './../../service/paises.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  continenteSel:string;
  continentes:string[];
  paises:Pais[];
  constructor(private paisesService:PaisesService) {
    this.cargaContinentes();
  }

  cargaPaisesContinente():void{
    this.paisesService.paisesContinente(this.continenteSel).subscribe(data=>this.paises=data);
  }

  cargaContinentes():void{
    this.paisesService.continentes().subscribe(data=>this.continentes=data);
  }
}
