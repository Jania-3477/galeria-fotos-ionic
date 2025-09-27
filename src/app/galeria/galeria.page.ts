import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class GaleriaPage {
  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productos = this.productosService.getProductos();
  }
}
