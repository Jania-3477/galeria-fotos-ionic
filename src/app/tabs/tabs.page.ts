import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" [routerLink]="'/tabs/tab1'">
          <ion-icon name="home"></ion-icon>
          <ion-label>Inicio</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" [routerLink]="'/tabs/tab2'">
          <ion-icon name="list"></ion-icon>
          <ion-label>Productos</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" [routerLink]="'/tabs/tab3'">
          <ion-icon name="cart"></ion-icon>
          <ion-label>Carrito</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
      <ion-router-outlet></ion-router-outlet>
    </ion-tabs>
  `,
})
export class TabsPage {}
