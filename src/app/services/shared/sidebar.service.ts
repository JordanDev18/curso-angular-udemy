import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any =[
    {
      titulo: 'Angular drive',
      icono: 'mdi mdi-gauge',
      subMenu:[
       { titulo: 'DashBoard', url: '/dashboard'},
       {titulo: 'ProgressBar', url: '/progress'},
       {titulo: 'Graficas', url: '/graficas1'},
       {titulo: 'Account', url: '/account'},
       {titulo: 'Tarea', url: '/rxjs'}

      ]
    },
    {
      titulo: 'Angular Udemy',
      icono: 'mdi mdi-gauge',
      subMenu:[
       { titulo: 'DashBoard', url: '/dashboard'},
       {titulo: 'Materials', url:'/material'}
       


      ]
    }
  ];

  menuu: any =[
    {
     titulo: 'material',
      subMenu2:[
       //{ titulo: 'Material botton', url: '/material-botones'},
       { titulo: 'Material card', url: '/material-card'},
       { titulo: 'Material dialog', url: '/material-dialog'},
       { titulo: 'Material input', url: '/material-input'},
       { titulo: 'Material expansivo', url: '/material-panel-expansivo'},
       { titulo: 'Material tabs', url: '/material-tabs"'}
       
      ]
    }
  ]

  constructor() { }


}
