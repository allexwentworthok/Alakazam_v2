import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductosService } from 'src/app/services/productos.service';
import { Subscription } from 'rxjs';
import { RespuestaTopHeadlines } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {
  headline$ : Subscription;
  headlines : any[];
  ofertas : RespuestaTopHeadlines [] = [];


 

constructor(  private productosService: ProductosService,
              private navCtrl: NavController) { }

ngOnInit() {

  this.fetchData();
}


fetchData() {
  this.headline$ =  this.productosService.getOfertas()
    .subscribe(resp => {
    console.log(resp);
    this.headlines = resp;
    this.ofertas = resp;
    
  })
}




onClick() {
  this.navCtrl.navigateBack('tabs/tabs/tab2');
}
}
