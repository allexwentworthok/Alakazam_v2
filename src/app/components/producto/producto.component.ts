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
  @Input() enAgregados;

  constructor( public actionSheetCtrl: ActionSheetController,
               private datalocalService: DataLocalService ) { }

  ngOnInit() {

    console.log('Agregados', this.enAgregados)
  }

  async lanzarMenu() {

      let guardarBorrarBtn;

      if (this.enAgregados) {
        guardarBorrarBtn = {
          text: 'Borrar Producto',
          icon: 'trash',
          handler: () => {
            console.log('Borrar');
            this.datalocalService.borrarProducto( this.producto );
          }
        }
      }
        else {

          guardarBorrarBtn = {
            text: 'Agregar',
            icon: 'heart',
            handler: () => {
              console.log('Favorite clicked');
              this.datalocalService.guardarProducto( this.producto );
            }
          };
        }
      

      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Opciones',
        buttons: [ 
          
          guardarBorrarBtn,
          
          {
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


