import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Permissions } from '@capacitor/permissions';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor() {
    this.requestPermissions();
  }

  // 🔹 Pedir permisos al iniciar
  private async requestPermissions() {
    try {
      const status = await Permissions.query({ name: 'camera' as any });
      if (status.state !== 'granted') {
        await Permissions.request({ name: 'camera' as any });
      }

      // Android 13+ requiere permiso de fotos
      const images = await Permissions.query({ name: 'photos' as any });
      if (images.state !== 'granted') {
        await Permissions.request({ name: 'photos' as any });
      }
    } catch (err) {
      console.warn('Error solicitando permisos:', err);
    }
  }

  // 🔹 Tomar una foto y guardarla en memoria
  public async addNewToGallery() {
    try {
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });

      this.photos.unshift({
        filepath: new Date().getTime() + '.jpeg',
        webviewPath: capturedPhoto.webPath,
      });
    } catch (err) {
      console.error('Error al tomar la foto:', err);
    }
  }
}
