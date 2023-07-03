
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';
@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: ['./accout-settings.component.css']
})
export class AccoutSettingsComponent implements OnInit {
  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
      this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link)
    this._ajustes.aplicarAjustes(tema)
  }

  aplicarCheck(link: any) {
    let selectores = Array.from(document.getElementsByClassName('selector'));

    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }


  colocarCheck() {
    let selectores = Array.from(document.getElementsByClassName('selector'));

    let tema = this._ajustes.ajustes.tema;
    for (let ref of selectores) {

      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}



