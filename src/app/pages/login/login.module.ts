import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule]
})
export class LoginModule {}

