import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Carrito</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item *ngFor="let producto of carrito">
          {{producto.nombre}} - {{producto.precio | currency}}
        </ion-item>
      </ion-list>
      <ion-button color="danger" (click)="vaciarCarrito()">Vaciar Carrito</ion-button>
    </ion-content>
  `
})
export class Tab3Page {
  carrito: any[] = [];
  private storage!: Storage;

  constructor() { this.initStorage(); }

  async initStorage() {
    this.storage = new Storage({});
    await this.storage.create();
    const datos = await this.storage.get('carrito');
    if (datos) this.carrito = datos;
  }

  async vaciarCarrito() {
    this.carrito = [];
    await this.storage.remove('carrito');
  }
}
