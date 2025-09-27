import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductosService } from '../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, CurrencyPipe]
})
export class Tab1Page {
  productos: any[] = [];
  carrito: any[] = [];

  constructor(private productosService: ProductosService, private router: Router) {}

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => {
  this.productos = data;
});

  }

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    alert(`${producto.nombre} agregado al carrito`);
  }

  irAGaleria() {
    this.router.navigate(['/galeria']);
  }

  verCarrito() {
    this.router.navigate(['/carrito'], { state: { carrito: this.carrito } });
  }
}
