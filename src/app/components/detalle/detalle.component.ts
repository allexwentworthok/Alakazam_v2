import { Component, OnInit, Input } from '@angular/core';
import { ComerciosPage } from 'src/app/pages/comercios/comercios.page';
import { ProductosService } from 'src/app/services/productos.service';
import { RespuestaTopHeadlines, Resultado } from 'src/app/interfaces/interfaces';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
@Input() name;
@Input() img;
@Input() content;
@Input() precio;
@Input() comercio;
productos: RespuestaTopHeadlines;
@Input() producto: Resultado;
  @Input() enAgregados;
  constructor(private productosService: ProductosService,
              private modalCtrl: ModalController,
              public actionSheetCtrl: ActionSheetController,
               public datalocalService: DataLocalService) { }

  ngOnInit() {
    // console.log ('producto', this.name, this.precio)
    this.productosService.getTopHeadlines()
    .subscribe (resp => {
      console.log(resp);
      this.producto = resp;
    }); 
  
  }
  async regresar(){
    const modal = await this.modalCtrl.getTop();
modal.dismiss();
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
      };
    } else {

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
