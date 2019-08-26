import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductosService } from 'src/app/services/productos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {
  
 slidesOpts = {
    slidesPerView: 1.1,
    freeMode: true,
    spaceBetween: 1,
    centeredSlides: false,

  };

  slides: { img: string, titulo: string, descuento: string, comercio: string }[] = [
    {
      img:'http://tiendaconsol.coop/322-large_default/yerba-mate-playadito-x-1kg.jpg',
      titulo: 'Playadito Yerba Mate',
      descuento: '$67.99',
      comercio: 'Diarco'
    },
    {
      img:'https://http2.mlstatic.com/arveja-okey-340-grs-D_NQ_NP_751888-MLA31024304442_062019-Q.jpg',
      titulo: 'Okey Arvejas',
      descuento: '$13,49',
      comercio: 'Diarco'
    },
    {
      img:'https://cdn.shopify.com/s/files/1/2538/5286/products/asado-tira-crudo2_400x.jpg?v=1544379534',
      titulo: 'Asado de Tira x kg',
      descuento: '$169',
      comercio: 'ChangoMas'
    },
    {
      img:'http://jscarnicerias.com.ar/storage/app/uploads/public/5c4/9b5/348/5c49b53482738610068883.png',
      titulo: 'Bife Americano x Kg',
      descuento: '$210',
      comercio: 'ChangoMas'
    },
    {
      img:'https://carnemexicana.files.wordpress.com/2015/07/lomo-de-res-crudo.jpg',
      titulo: 'Bola de Lomo',
      descuento: '$220',
      comercio: 'ChangoMas'
    },
    {
      img:'https://carnemexicana.files.wordpress.com/2015/07/diezmillo-de-res-crudo.jpg?w=300&h=199',
      titulo: 'Paleta x Kg',
      descuento: '$210',
      comercio: 'ChangoMas'
    },
    {
      img:'https://www.hiperlibertad.com.ar/wp-content/uploads/2019/08/HIPER_AHORRO_ORGÁNICAS_4.jpg',
      titulo: 'Paty Express 4 und.',
      descuento: '$93.74',
      comercio: 'Libertad'
    },
    {
      img:'https://walmartar.vteximg.com.br/arquivos/ids/835562-292-292/Cafe-Nescafe-Dolca-Suave-170-Gr-1-12923.jpg?v=636687339193430000',
      titulo: 'Dolca Cafe Insta',
      descuento: '$52.99',
      comercio: 'Vital'
    },
    
    
    
     
];


constructor(private navCtrl: NavController) { }

ngOnInit() {
}
onClick() {
  this.navCtrl.navigateBack('tabs/tabs/tab2');
}
}
