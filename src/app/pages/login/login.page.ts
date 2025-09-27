import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,  // 👈 standalone component
  imports: [CommonModule, FormsModule, IonicModule]
})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  onLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      console.log('Login exitoso');
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
