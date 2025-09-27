import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { IonList, IonItem, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  carrito: any[] = [];

  constructor(private productosSvc: ProductosService) {}

  ngOnInit() {
    this.carrito = this.productosSvc.getCarrito();
  }
}
