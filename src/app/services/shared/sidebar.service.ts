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
       {titulo: 'API', url:'/categorias'},
       {titulo: 'Material', url:'/material'}
       


      ]
    }
  ];

  menuu: any =[
    {
     titulo: 'material'
    }
  ]

  constructor() { }


}
