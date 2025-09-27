import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, CurrencyPipe]
})
export class CarritoPage {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    // Obtener carrito desde LocalStorage
    this.carrito = this.carritoService.obtenerCarrito();
  }

  // Propiedad para calcular total
  get total(): number {
    return this.carrito.reduce((sum, p) => sum + p.precio, 0);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.carrito = [];
  }
}
