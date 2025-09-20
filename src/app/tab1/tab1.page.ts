import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab1Page {
  photo: string | null = null;

  async takePhoto() {
    console.log('📸 Intentando abrir cámara...');
    
    const permStatus = await Camera.requestPermissions({ permissions: ['camera'] });
    console.log('🔑 Estado permisos:', permStatus);

    if (permStatus.camera !== 'granted') {
      alert('Debes habilitar el permiso de cámara en Ajustes');
      return;
    }

    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    console.log('✅ Foto capturada:', capturedPhoto);

    this.photo = capturedPhoto.webPath || null;
  }
}
