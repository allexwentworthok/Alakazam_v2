import { Component, OnInit, Input } from '@angular/core';
import { Resultado } from 'src/app/interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.scss'],
  })
export class ProductoComponent implements OnInit {

  @Input() producto: Resultado;

  constructor( public actionSheetCtrl: ActionSheetController,
               private datalocalService: DataLocalService ) { }

  ngOnInit() {}

  async lanzarMenu() {


      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Opciones',
        buttons: [ {
          text: 'Agregar',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
            this.datalocalService.guardarProducto( this.producto );
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }
  }


