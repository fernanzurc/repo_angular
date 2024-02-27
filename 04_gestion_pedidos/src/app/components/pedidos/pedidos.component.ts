import { Pedido } from './../../model/Pedido';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedidos:Pedido[]=[];
  pedido:Pedido;
  tablaVisible:boolean=false;
  constructor(){
    this.pedido=new Pedido();
  }
  agregarPedido():void{
    this.pedidos.push(this.pedido);
    this.pedido=new Pedido();
    console.log(this.pedido);
  }
  verPedidos():void{
    this.tablaVisible=true;
  }
}
