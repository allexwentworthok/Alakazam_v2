import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Resultado } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

    productos: Resultado [] = [];

  constructor(public toastController: ToastController,
              private storage: Storage) { 
    this.cargarAgregados();

  }
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  guardarProducto( producto: Resultado) {
    const existe = this.productos.find(noti => noti.id === producto.id );

    if (!existe) {
    this.productos.unshift(producto);
    this.storage.set('Agregados', this.productos);
  }

    this.presentToast('Agregado a la lista');
  }

  async cargarAgregados() {

     const Agregados = await this.storage.get('Agregados');

     if (Agregados) {
      this.productos = Agregados;
     }


     console.log('async await', Agregados);

  }

  borrarProducto( producto: Resultado ) {
    this.productos = this.productos.filter( noti => noti.name !== producto.name );
    this.storage.set('Agregados', this.productos);
    this.presentToast('Eliminado de la lista');
  }

    
}
