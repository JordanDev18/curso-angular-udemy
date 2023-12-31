import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  menu: any = [
    {
      titulo: 'Categorias',
      url: '/categorias/list-categorias'
    },
    {
      titulo: 'Material dialog',
      url: '/material/material-dialog'
    },
    {
      titulo: 'Material input',
      url: '/material/material-input'
    },
    {
      titulo: 'Material expansivo',
      url: '/material/material-panel-expansivo'
    },
    {
      titulo: 'Material tabs',
      url: '/material/material-tabs'
    }
  ];

  constructor() {}
}
