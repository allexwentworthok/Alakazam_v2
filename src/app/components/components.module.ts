import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { PipesModule } from '../pipes/pipes.module';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  entryComponents:[
    DetalleComponent
  ],
  declarations: [ProductoComponent,
  ProductosComponent, DetalleComponent],

  exports: [
    ProductosComponent,
    DetalleComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
