import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  getCarrito(): any[] {
    throw new Error('Method not implemented.');
  }
  addCarrito(producto: any) {
    throw new Error('Method not implemented.');
  }
  private http = inject(HttpClient);
  // API gratuita de productos: https://fakestoreapi.com/products
  private apiUrl = 'https://fakestoreapi.com/products';

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
