import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class LoginPage {
  usuario = '';
  password = '';

  // Usuarios de prueba
  private usuarios = [
    { usuario: 'admin', password: '1234' },
    { usuario: 'test', password: 'abcd' }
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.usuarios.find(
      u => u.usuario === this.usuario && u.password === this.password
    );

    if(user){
      // Redirige a la página de productos/galería
      this.router.navigate(['/productos']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
