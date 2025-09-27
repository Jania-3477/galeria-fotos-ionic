import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carritoKey = 'carrito';

  constructor() {}

  // ✅ Método que agrega un producto al carrito
  addProducto(producto: any) {
    const carrito = this.obtenerCarrito();
    carrito.push(producto);
    this.guardarCarrito(carrito);
  }

  guardarCarrito(carrito: any[]) {
    localStorage.setItem(this.carritoKey, JSON.stringify(carrito));
  }

  obtenerCarrito(): any[] {
    const data = localStorage.getItem(this.carritoKey);
    return data ? JSON.parse(data) : [];
  }

  vaciarCarrito() {
    localStorage.removeItem(this.carritoKey);
  }
}
