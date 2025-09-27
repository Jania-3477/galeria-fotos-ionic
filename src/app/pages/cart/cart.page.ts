import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule] // <--- aquí está la clave
})
export class CartPage implements OnInit {
  cart: any[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    this.loadCart();
  }

  async ionViewWillEnter() {
    this.loadCart();
  }

  async loadCart() {
    this.cart = (await this.storage.get('cart')) || [];
  }

  async removeItem(index: number) {
    this.cart.splice(index, 1);
    await this.storage.set('cart', this.cart);
  }

  async clearCart() {
    this.cart = [];
    await this.storage.set('cart', []);
  }
}
