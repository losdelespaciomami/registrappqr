import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor() { 
    
  }
>>>>>>> e02cf71 (version 2.0)

  ngOnInit() {
  }

<<<<<<< HEAD
}
=======
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, Clases: 'N° de clases registradas', Asistencia: '17'},
    {position: 2, Clases: 'Clase 1', Asistencia: 'Clase 1'},
  ];

  displayedColumns: string[] = ['Clases', 'Asistencia'];
  dataSource = this.ELEMENT_DATA;

}

export interface PeriodicElement {
  position: number;
  Clases: string;
  Asistencia: string;
}

>>>>>>> e02cf71 (version 2.0)
