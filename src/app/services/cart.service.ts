import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _storage: Storage | null = null;
  private cart: any[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    const saved = await this._storage.get('cart');
    this.cart = saved || [];
  }

  addToCart(product: any) {
    this.cart.push(product);
    this._storage?.set('cart', this.cart);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this._storage?.set('cart', this.cart);
  }

  getCart() {
    return this.cart;
  }
}
