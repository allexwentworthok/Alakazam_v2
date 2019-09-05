import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Resultado } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';

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
              public loadingCtrl: LoadingController  ) {}

  ngOnInit() {

     this.presentLoading();
      
    this.fetchData();

      this.productosService.getBuscados()
      .subscribe( buscados => {
        
        this.buscados = buscados;
      });


    }


    async presentLoading() {
      const loading = await this.loadingCtrl.create({
        message: 'Cargando',
        duration: 5000
      });
      await loading.present();
  
      const { ...resp } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
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
  