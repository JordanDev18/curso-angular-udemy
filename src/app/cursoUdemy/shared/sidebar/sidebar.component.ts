import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';
import { NavbarService } from 'src/app/services/shared/navbar.service';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(
    public _sideBar: SidebarService,
    public _navBar: NavbarService
    
    ) { }

  ngOnInit() {
  }


}
