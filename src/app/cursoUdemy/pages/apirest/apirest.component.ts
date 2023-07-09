import { Component, OnInit } from '@angular/core';
declare function init_plugins(): any;
@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.component.html',
  styleUrls: ['./apirest.component.css']
})
export class ApirestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  init_plugins();
  }

}
