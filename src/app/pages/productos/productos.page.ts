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
 

constructor(private navCtrl: NavController) { }

ngOnInit() {
}
onClick() {
  this.navCtrl.navigateBack('tabs/tabs/tab2');
}
}
