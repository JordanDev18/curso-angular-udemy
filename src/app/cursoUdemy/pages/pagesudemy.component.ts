import { Component, OnInit } from '@angular/core';
declare function init_plugins(): any;
@Component({
  selector: 'app-pagesudemy',
  templateUrl: './pagesudemy.component.html',
  styleUrls: ['./pagesudemy.component.css']
})
export class PagesudemyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  init_plugins();
  }

}
