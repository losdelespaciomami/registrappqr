import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
=======
import { Routes, RouterModule } from '@angular/router';

>>>>>>> e02cf71 (version 2.0)
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: HomePage,
=======
    component: HomePage
>>>>>>> e02cf71 (version 2.0)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports: [RouterModule],
>>>>>>> e02cf71 (version 2.0)
})
export class HomePageRoutingModule {}
