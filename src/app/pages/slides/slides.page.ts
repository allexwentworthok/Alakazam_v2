import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };

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
          img:'/assets/assets/slides/productos-ofertas.svg',
        titulo: 'Encontra las mejores ofertas',
        desc: 'En los comercios adheridos',
        },
    ];

    
  constructor(  dataLocalService: DataLocalService,
                private navCtrl: NavController) { }

  ngOnInit() {
  }
    onClick() {
      this.navCtrl.navigateBack('tabs/tabs/tab2');
    }



    slidesDidLoad(slides: IonSlides) {
  slides.startAutoplay();
}
}
