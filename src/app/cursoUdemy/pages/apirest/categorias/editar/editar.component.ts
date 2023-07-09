import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasRequest } from 'src/app/modelo/categoria.request';
import { ApirestService } from 'src/app/services/apirest/apirest.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  nombre: any;
  datos : any = {};
  id:any;

  constructor(private router: Router, private route: ActivatedRoute , private services: ApirestService){
  }
  
  ngOnInit(): void {
    let params:any = this.route.snapshot.params;
    this.id = params.id;
    this.hacerPeticion(this.id);
    //this.hacerPeticion(id);
  }

  closeModal() {
    // Aquí puedes realizar acciones adicionales al cerrar el modal, si es necesario
    setTimeout(()=>{
      this.router.navigate(['/categorias/list-categorias'])
    },3000)
  }

  closeModal1() {
    // Aquí puedes realizar acciones adicionales al cerrar el modal, si es necesario
      this.router.navigate(['/categorias/list-categorias'])
  }

  hacerPeticion(id : any){
    this.services.getCategoriasById(id).subscribe({
      next : data => {
        this.datos = data
      },
      error : error =>{
        console.log("Error" , error)
      }
    })
  }

  submitForm() {
    let modelo : CategoriasRequest = {nombre: this.nombre}
    // Validacion si el campo nombre es vacio
    if (!this.nombre) {
      // Validación personalizada: el campo "Nombre" está vacío
      this.closeModal1();
       Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por favor ingrese un nombre',
        showConfirmButton: false,
        timer: 3500
      })
      return

    }
  // Fin validacion campo vacío

    this.services.editCategorias(modelo , this.id).subscribe({
      next: data =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title:  'Editado con exito ',
          showConfirmButton: false,
          timer: 3500
        })
        setTimeout(() => {
          this.router.navigate(['/categorias/list-categorias']).then(() => {
            setTimeout(() => {
              window.location.reload();
            });
          });
        }, 3000); // Coloca el tiempo de espera deseado antes de ejecutar la redirección (en este caso, 3000 ms = 3 segundos)
        
      
      },
      error: error =>{
        console.log("Error" + error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al guardar sigue intentando ',
          showConfirmButton: false,
          timer: 3500
        })
        setTimeout(() => {
          this.router.navigate(['/categorias/list-categorias']).then(() => {
            setTimeout(() => {
              window.location.reload();
            }); // Coloca el tiempo de espera deseado en milisegundos (en este caso, 2000 ms = 2 segundos)
          });
        }, 3000); // C
      }
    })
    
    console.log('Nombre:', this.nombre);
    
    this.closeModal();
  }

}
