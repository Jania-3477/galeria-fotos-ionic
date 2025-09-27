import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { Tab1Page } from './tab1/tab1.page';
import { GaleriaPage } from './galeria/galeria.page';
import { CarritoPage } from './carrito/carrito.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'productos', component: Tab1Page },
  { path: 'galeria', component: GaleriaPage },
  { path: 'carrito', component: CarritoPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
