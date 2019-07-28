import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Resultado } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    productos: Resultado [] = [];
    buscados: any[] = [];
    textoBuscar = '';

  constructor(public productosService: ProductosService,
              public datalocalService: DataLocalService,
              public productosServices: ProductosService) {}

  ngOnInit() {

      this.productosService.getBuscados()
      .subscribe( buscados => {
        console.log(buscados);
        this.buscados = buscados;
      });


      this.productosServices.getTopHeadlines()
    .subscribe( resp => {
      console.log('Hola Mundo', resp.resultados );
      this.productos.push(...resp.resultados);
    });
  }
  buscar( event ) {
    this.textoBuscar = event.detail.value;
  }
}
