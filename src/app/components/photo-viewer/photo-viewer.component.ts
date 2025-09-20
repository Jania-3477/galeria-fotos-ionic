import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UserPhoto } from '../../services/photo.service';

@Component({
  selector: 'app-photo-viewer',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Foto</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="close()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <img [src]="photo?.webviewPath" style="width: 100%; height: auto; border-radius: 12px;" />
    </ion-content>
  `
})
export class PhotoViewerComponent {
  @Input() photo!: UserPhoto;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }
}
