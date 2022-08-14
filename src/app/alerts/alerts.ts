import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private alertController: AlertController) {  }

  async emptyForm(){
    const alert = await this.alertController.create({
      header: 'Datos incompletos',
      message: 'Tienes que llenar todos los campos.',
      buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }

  async incorrectPassword(){
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'El mail o la contrasela son incorrectos..',
      buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }

}
