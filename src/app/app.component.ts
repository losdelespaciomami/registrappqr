import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserI } from './model/models';
import { FirestoreService } from './services/firestore.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ComunicacionService } from './services/comunicacion.service';
>>>>>>> e02cf71 (version 2.0)

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
<<<<<<< HEAD
  constructor() {}
=======

  stateUser() {
    return this.authfirebase.authState
  }

  login: boolean = false;
  logeado: boolean = false;
  roles: 'Alumno' | 'Profesor' = null;
  nombre: string;
  zona: string;

  constructor(private authfirebase: AngularFireAuth,
    private router: Router,
    private firestore: FirestoreService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private api: ComunicacionService) {

  }

  ngOnInit() {
    this.stateUser().subscribe(res => {
      if (res) {
        console.log('Esta logeado')
        this.logeado = true;
        this.getUsuarios(res.uid);
      } else {
        console.log('No esta logeado')
        this.logeado = false;
        this.router.navigate(["/home"])
      }
    });
    this.recuperarZona();
  }

  getUsuarios(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe(res => {
      if (res) {
        this.roles = res.Rol;
        this.nombre = res.Nombre;
      }
    })
  }


  logout() {
    this.authfirebase.signOut();
  }

  async cerrarSesion() {
    const alert = await this.alertCtrl.create({
      header: '¿Estas seguro de Cerrar Sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirmar',
          handler: () => {
            this.logout();
            this.router.navigate(["/home"])
          }
        }
      ]
    });

    await alert.present();
  }

  private loading;

  async paginar() {
    this.loadingCtrl.create({
      message: 'Cargando...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });

    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  recuperarZona() {
    this.api.getZona().subscribe(
      (data) => {
        console.log(data);
        this.zona = data.week_number;
      },
      (e) => { console.log(e); }
    )
  }

>>>>>>> e02cf71 (version 2.0)
}
