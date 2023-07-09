import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ValidaSelectDirectiveValidator } from '../../validaciones/valida-select.directive';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  usuario: any;
  paises: any;
  users: Array<any> = [];
  //variable formReactive
  formulario: FormGroup;

  constructor() { 
    this.usuario = {
      nombre: "",
      correo: "",
      telefono: "",
      pais: ""
    };
    //variables del formulario reactivo
    this.formulario = new FormGroup({
      
      nombre: new FormControl(
        this.usuario.nombre, [
          Validators.required,
          Validators.minLength(4)
        ]
        
        ),
      correo: new FormControl(
        this.usuario.correo, [
          Validators.required,
          Validators.minLength(4),

        ]
        ),
      telefono: new FormControl(
        this.usuario.telefono, [
          Validators.required,
          Validators.minLength(10),
          // Validators.pattern("^[0-9]*$")
        ]
        ),
      pais: new FormControl()
    }, {validators : ValidaSelectDirectiveValidator});
  }

  ngOnInit() {
    this.paises = [
      {
        nombre: "Colombia"
      },
      {
        nombre: "Chile"
      }
    ];
  }

  seleccioneCheckbox: boolean = false;
 //check del formulario normal

  // checkbox(evento: any) {
  //   this.seleccioneCheckbox = evento.target.checked;
  //   if (this.seleccioneCheckbox) {
  //     alert("Sí");
  //   } else {
  //     alert("No");
  //   }
  // }

  //invocacion de los getters del formulario importante(para todos los formularios reactivos)
  get nombre(){return this.formulario.get("nombre")!;}
  get correo(){return this.formulario.get("correo")!;}
  get telefono(){return this.formulario.get("telefono")!;}
  get pais(){return this.formulario.get("pais")!;}

  //metodo enviar formulario REACTIVO

  enviarReactive(){
    let dato = (this.formulario.value.nombre+'   |  '+this.formulario.value.correo+'   |  '+this.formulario.value.telefono+'   |  '+this.formulario.value.pais)
    //alert(this.formulario.value.nombre+'   |  '+this.formulario.value.correo+'   |  '+this.formulario.value.telefono+'   |  '+this.formulario.value.pais)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: dato + '  ' + 'Guardado con exito ',
      showConfirmButton: false,
      timer: 1500
    })
  }

  //formulario normal
  // enviar() {
  //   this.users.push({
  //     nombre: this.usuario.nombre,
  //     correo: this.usuario.correo,
  //     telefono: this.usuario.telefono,
  //     pais: this.usuario.pais
  //   });
  //   alert(this.usuario.nombre + ' ' + this.usuario.correo + ' ' + this.usuario.telefono + ' ' + this.usuario.pais);
  // }
}