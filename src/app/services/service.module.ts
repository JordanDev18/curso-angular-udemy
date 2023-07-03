import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SidebarService,SharedService } from './service.index';
import { NavbarService } from './shared/navbar.service';


@NgModule({
  declarations: [],
  providers:[
    SettingsService,
     SidebarService,
     NavbarService
    //  SharedService
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
