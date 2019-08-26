import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Resultado } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    productos: Resultado [] = [];
    buscados: any[] = [];
    textoBuscar = '';
    headline$ : Subscription;
    headlines : any[];

  constructor(public productosService: ProductosService,
              public datalocalService: DataLocalService,
              ) {}

  ngOnInit() {
      
    this.fetchData();

      this.productosService.getBuscados()
      .subscribe( buscados => {
        
        this.buscados = buscados;
      });


    }

    buscar( event ) {
      this.textoBuscar = event.detail.value;
    }

    async fetchData() {
        this.headline$ = await this.productosService.getTopHeadlines().subscribe(resp =>{
          console.log(resp);
          this.headlines = resp;
          this.productos.push(...resp);
        })
    }

    



  }
  