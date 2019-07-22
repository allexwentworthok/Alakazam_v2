import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ProductoComponent,
  ProductosComponent],

  exports: [
    ProductosComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
