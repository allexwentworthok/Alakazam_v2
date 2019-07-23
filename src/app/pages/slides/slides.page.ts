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
          img:'/assets/assets/slides/productos-todos.svg',
          titulo: 'Busca los mejores precios',
          desc: '',
        },
        {
          img:'/assets/assets/slides/productos-listas.svg',
          titulo: 'Organiza tu lista',
          desc: '',
        },
        {
          img:'/assets/assets/slides/productos-codigo.svg',
        titulo: 'Escanea códigos de barra',
        desc: '',
        },
    ];

    
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
    onClick() {
      this.navCtrl.navigateBack('tabs/tabs/tab2');
    }
}
