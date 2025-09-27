import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/products`);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { username, password });
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }
}
