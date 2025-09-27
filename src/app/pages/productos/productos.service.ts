import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  

  productos = [
    { id: 1, nombre: 'iphone', precio: 150, imagen: 'assets/img/producto1.jpg' },
    { id: 2, nombre: 'Auriculares', precio: 80, imagen: 'assets/img/producto2.jpg' },
    { id: 3, nombre: 'Reloj', precio: 200, imagen: 'assets/img/producto3.jpg' },
    { id: 4, nombre: 'Zapatos', precio: 100, imagen: 'assets/img/producto4.jpg' },
    { id: 5, nombre: 'Mochila', precio: 70, imagen: 'assets/img/producto5.jpg' },
  ];

  constructor() {}

  getProductos() {
    return this.productos;
  }
}
