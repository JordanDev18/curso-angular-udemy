import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


import { Router } from '@angular/router';

declare function init_plugins(): any ;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma!: FormGroup;

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required)
    }, { validators: this.sonIguales('password', 'password2') });

    this.forma.setValue({
      nombre: 'Test',
      correo: 'test@test.com',
      password: '123456',
      password2: '123456'
    });
  }

  sonIguales(campo1: string, campo2: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      return;
    }
    console.log(this.forma);
    // Resto de la lógica para registrar el usuario
   }
}