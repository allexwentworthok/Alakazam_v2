import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    
    {
      img:'/assets/assets/slides/013-barcode-1.svg',
    titulo: 'Escanea códigos de barra',
    desc: 'Aún esta función esta en proceso beta, muy pronto estara disponible para vos',
    },
];


constructor(private navCtrl: NavController) { }

ngOnInit() {
}
onClick() {
  this.navCtrl.navigateBack('tabs/tabs/tab2');
}
}
