import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

menu: any[] =[
  {
   titulo: 'Dashboard-dinamyc',
   icono: 'mdi mdi-gauge',
   submenu: [
     { titulo: 'Main', url: '/' },
     { titulo: 'ProgressBar', url: 'progress' },
     { titulo: 'Gráficas', url: 'grafica1' },
   ]
  },
  {
    titulo: 'Promesas',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'promesas' , url: 'promesas' }
    ]
  },
  {
    titulo: 'rxjs',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'rxjs' , url: 'rxjs' }
    ]
  }
]



  constructor() { }
}
