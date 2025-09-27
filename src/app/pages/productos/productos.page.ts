import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe(data => {
        this.products = data;
      });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.title} agregado al carrito`);
  }
}
