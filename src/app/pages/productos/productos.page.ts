import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/interfaces/interfaces';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: Resultado [] = [];

  constructor(private productosServices: ProductosService) { }

  ngOnInit() {


      this.productosServices.getTopHeadlines()
    .subscribe( resp => {
      console.log('Hola Mundo', resp.resultados );
      this.productos.push(...resp.resultados);
    });
  }

}
