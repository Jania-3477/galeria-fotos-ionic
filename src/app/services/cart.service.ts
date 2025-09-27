
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Preferences } from '@capacitor/preferences';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];
  private cartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  private CART_KEY = 'my_cart';

  constructor() {
    this.loadCart();
  }

  /** 📥 Cargar carrito desde almacenamiento local */
  private async loadCart() {
    const { value } = await Preferences.get({ key: this.CART_KEY });
    if (value) {
      this.cart = JSON.parse(value);
      this.cartSubject.next(this.cart);
    }
  }

  /** 💾 Guardar carrito en almacenamiento local */
  private async saveCart() {
    await Preferences.set({
      key: this.CART_KEY,
      value: JSON.stringify(this.cart)
    });
    this.cartSubject.next(this.cart);
  }

  /** ➕ Agregar producto */
  async addToCart(product: CartItem) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
    await this.saveCart();
  }

  /** ➖ Quitar producto por ID */
  async removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
    await this.saveCart();
  }

  /** ♻️ Actualizar cantidad */
  async updateQuantity(productId: number, quantity: number) {
    const product = this.cart.find(p => p.id === productId);
    if (product) {
      product.quantity = quantity > 0 ? quantity : 1;
      await this.saveCart();
    }
  }

  /** 🗑️ Vaciar carrito */
  async clearCart() {
    this.cart = [];
    await this.saveCart();
  }

  /** 📊 Calcular total */
  getTotal(): number {
    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  /** 🔄 Observable para escuchar cambios */
  getCartObservable() {
    return this.cartSubject.asObservable();
  }

  /** 📦 Obtener snapshot actual */
  getCartItems(): CartItem[] {
    return [...this.cart];
  }

  /** 🔎 Cantidad total de productos */
  getItemCount(): number {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }
}

