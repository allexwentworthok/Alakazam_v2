import { Component, OnInit, Input } from '@angular/core';
import { Resultado } from 'src/app/interfaces/interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  @Input() productos: Resultado [] = [];
  buscados: any[] = [];
    textoBuscar = '';
    @Input() enAgregados = false; 
  constructor(public productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getBuscados()
    .subscribe( buscados => {
      console.log(buscados);
      this.buscados = buscados;
    });



  }

  buscar( event ) {
    console.log ('event');
    this.textoBuscar = event.detail.value;
  }

}
