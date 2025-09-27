import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { Tab1Page } from './tab1/tab1.page';
import { ProductosPage } from './pages/productos/productos.page';
import { CarritoPage } from './pages/carrito/carrito.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'tab1', component: Tab1Page },
  { path: 'productos', component: ProductosPage },
  { path: 'carrito', component: CarritoPage },
];
