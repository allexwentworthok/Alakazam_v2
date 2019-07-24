import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

    slides: { img: string, titulo: string, desc: string }[] = [
        {
          img:'/assets/assets/slides/008-shop.svg',
          titulo: 'Busca los mejores precios',
          desc: 'En los locales seleccionados',
        },
        {
          img:'/assets/assets/slides/003-shopping-list.svg',
          titulo: 'Organiza tu lista',
          desc: 'Agrega y elimina, organizala como vos quieras.',
        },
        {
          img:'/assets/assets/slides/013-barcode-1.svg',
        titulo: 'Escanea códigos de barra',
        desc: 'Escanea todos los productos seleccionados',
        },
    ];

    
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
    onClick() {
      this.navCtrl.navigateBack('tabs/tabs/tab2');
    }
}
