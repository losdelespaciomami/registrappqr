import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserI } from 'src/app/model/models';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-scanqr',
  templateUrl: './scanqr.page.html',
  styleUrls: ['./scanqr.page.scss'],
})
export class ScanqrPage implements OnInit {

  stateUser() {
    return this.authfirebase.authState
  }
  valores : any;
  elementType: NgxQrcodeElementTypes.CANVAS
  login: boolean = false;
  logeado: boolean = false;
  roles: 'Alumno' | 'Profesor' = null;
  nombre: string;
  
  
  constructor(private authfirebase: AngularFireAuth, 
              private router: Router,
              private firestore: FirestoreService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
    
  }
  now = new Date();
  fecha = this.now.toLocaleDateString();
  data = {nombreDocente: 'x', fecha: this.now.toLocaleDateString() , token:'?'};
  valoresA = JSON.stringify(this.data);

  
  ngOnInit() {
    this.stateUser().subscribe(res => {
      if (res) {
        this.logeado = true;
        this.getUsuarios(res.uid);
      } else {
        this.logeado = false;
      }
    });
  }
  
  getUsuarios(uid: string){
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe(res => {
      if (res) {
        this.roles = res.Rol;
        this.nombre = res.Nombre;
      }
    })
  }

  
  creado: boolean = false;

  async generarQr() {
    const loading = await this.loadingCtrl.create({
      message: 'Generado Código, espere...',
      spinner: 'circles',
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.valores = JSON.stringify(this.data);
    }, 2000);
  }

  async exito() {
    const loading = await this.loadingCtrl.create({
      message: '¡Asistencia Registrada!',
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigate(["/registrapp"])
    }, 1500);

  }

  async asistencia() {
    const loading = await this.loadingCtrl.create({
      message: 'Registrando su asistencia, espere...',
      spinner: 'circles',
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.gpsActivo();
    }, 2000);

  }

  async gpsActivo() {
    const alert = await this.alertCtrl.create({
      header: 'Porfavor, active el GPS',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirmar',
          handler: () => {
            this.exito();
          }
        }
      ]
    });

    await alert.present();
  }

}
