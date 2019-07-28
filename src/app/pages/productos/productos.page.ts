import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/interfaces/interfaces';
import { ProductosService } from 'src/app/services/productos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  slides: { img: string, titulo: string, desc: string }[] = [
    
    {
      img:'/assets/assets/slides/052-coupon-1.svg',
    titulo: 'Las mejores ofertas',
    desc: 'Esta semana no tenemos ofertas disponibles',
    },
];


constructor(private navCtrl: NavController) { }

ngOnInit() {
}
onClick() {
  this.navCtrl.navigateBack('tabs/tabs/tab2');
}
}
