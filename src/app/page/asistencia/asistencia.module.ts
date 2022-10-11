import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaPageRoutingModule } from './asistencia-routing.module';

import { AsistenciaPage } from './asistencia.page';

<<<<<<< HEAD
=======
import { LibreriasModule } from 'src/app/module/material/material.module';

>>>>>>> e02cf71 (version 2.0)
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    AsistenciaPageRoutingModule
=======
    AsistenciaPageRoutingModule,
    LibreriasModule
>>>>>>> e02cf71 (version 2.0)
  ],
  declarations: [AsistenciaPage]
})
export class AsistenciaPageModule {}
