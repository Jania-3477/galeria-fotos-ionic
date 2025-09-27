import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,   // <- necesario para *ngIf, *ngFor, currency pipe
    FormsModule,    // <- necesario para [(ngModel)]
    IonicModule,    // <- necesario para que reconozca <ion-...>
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
