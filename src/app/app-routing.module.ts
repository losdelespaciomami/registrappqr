import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
=======
>>>>>>> e02cf71 (version 2.0)
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
<<<<<<< HEAD
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./page/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./page/generarqr/generarqr.module').then( m => m.GenerarqrPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./page/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'docenteinicio',
    loadChildren: () => import('./page/docenteinicio/docenteinicio.module').then( m => m.DocenteinicioPageModule)
  },
  {
    path: 'cursosdocente',
    loadChildren: () => import('./page/cursosdocente/cursosdocente.module').then( m => m.CursosdocentePageModule)
=======
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registrapp',
    loadChildren: () => import('./page/registrapp/registrapp.module').then( m => m.RegistrappPageModule)
  },
  {
    path: 'scanqr',
    loadChildren: () => import('./page/scanqr/scanqr.module').then( m => m.ScanqrPageModule)
  },
  {
    path: 'recuperarpassword',
    loadChildren: () => import('./page/recuperarpassword/recuperarpassword.module').then( m => m.RecuperarpasswordPageModule)
>>>>>>> e02cf71 (version 2.0)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./page/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
<<<<<<< HEAD
    path: 'reprobados',
    loadChildren: () => import('./page/reprobados/reprobados.module').then( m => m.ReprobadosPageModule)
  },
  {
    path: 'asistenciaalumno',
    loadChildren: () => import('./page/asistenciaalumno/asistenciaalumno.module').then( m => m.AsistenciaalumnoPageModule)
  },
  {
    path: 'scanearqr',
    loadChildren: () => import('./page/scanearqr/scanearqr.module').then( m => m.ScanearqrPageModule)
  },
=======
    path: 'asistencia-profesor',
    loadChildren: () => import('./page/asistencia-profesor/asistencia-profesor.module').then( m => m.AsistenciaProfesorPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./page/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'entretencion',
    loadChildren: () => import('./page/entretencion/entretencion.module').then( m => m.EntretencionPageModule)
  },
  {
    path: 'cursosdocente',
    loadChildren: () => import('./page/cursosdocente/cursosdocente.module').then( m => m.CursosdocentePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page/p404/p404.module').then( m => m.P404PageModule)
  }
>>>>>>> e02cf71 (version 2.0)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule {}
>>>>>>> e02cf71 (version 2.0)
