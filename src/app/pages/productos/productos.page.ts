import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  standalone: true,
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [CommonModule, IonicModule, HttpClientModule],
})
export class ProductosPage {
  productos: any[] = [];

  constructor(
    private productosSvc: ProductosService,
    private carritoSvc: CarritoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productosSvc.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: () => console.error('Error cargando productos')
    });
  }

  agregarAlCarrito(producto: any) {
    this.carritoSvc.addProducto(producto);
    alert(`${producto.nombre} agregado al carrito`);
  }

  verCarrito() {
    this.router.navigate(['/carrito']);
  }
}
