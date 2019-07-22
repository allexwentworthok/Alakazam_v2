import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Resultado } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

    productos: Resultado [] = [];

  constructor(private storage: Storage) { 
    this.cargarAgregados();

  }

  guardarProducto( producto: Resultado) {
    const existe = this.productos.find(noti => noti.id === producto.id );

    if (!existe) {
    this.productos.unshift(producto);
    this.storage.set('Agregados', this.productos);
  }
  }

  async cargarAgregados() {

     const Agregados = await this.storage.get('Agregados');

     if (Agregados) {
      this.productos = Agregados;
     }


     console.log('async await', Agregados);

  }


}
