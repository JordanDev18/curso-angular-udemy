import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes ={
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.cargarAjustes();
  }

//guardar en el localStore y convertimos el objeto AJUSTES en string con JSON.stringify
  guardarAjustes(){
    
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes ))
    console.log('guardado en el local store');

  
  }

  //obtener los ajustes cargarlo y setearlo en AJUSTES reconvierto el STRING en un objeto con JSON.parce

  cargarAjustes() {
    const ajustesGuardados = localStorage.getItem('ajustes');
  
    if (ajustesGuardados) {
      try {
        this.ajustes = JSON.parse(ajustesGuardados);
        console.log('Cargado desde localStorage');

        this.aplicarAjustes(this.ajustes.tema)
      } catch (error) {
        console.error('Error al analizar JSON:', error);
        // Manejar el error de análisis JSON aquí
      }
    } else {
      console.log('Usando valores por defecto');
    }
  }


  aplicarAjustes( tema: string){
    let url = `assets/css/colors/${tema}.css`;
    const elementoTema = this.document.querySelector('#tema');
    if (elementoTema) {
      elementoTema.setAttribute('href', url);
    }

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}



interface Ajustes {
  temaUrl: string;
  tema: string;
}
