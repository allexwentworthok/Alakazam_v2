import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'comercios', loadChildren: './pages/comercios/comercios.module#ComerciosPageModule' },
  { path: '', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'productos', loadChildren: './pages/productos/productos.module#ProductosPageModule' },  { path: 'escaner', loadChildren: './pages/escaner/escaner.module#EscanerPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
