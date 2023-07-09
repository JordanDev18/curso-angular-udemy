import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest/apirest.service';
import { CategoriasRenponse } from 'src/app/modelo/categorias';
import { CategoriasRequest } from 'src/app/modelo/categoria.request';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-caterorias',
  templateUrl: './caterorias.component.html',
  styleUrls: ['./caterorias.component.css']
})
export class CateroriasComponent implements OnInit {
  datos?: Array<CategoriasRenponse>;
  showModal: boolean = false;
  nombre: string = '';
  id: any;

  constructor(private servicios: ApirestService , private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.getCategorias();
  }
  
  getCategorias(){
    this.servicios.getCategorias().subscribe(
      {
        next:data => {
          this.datos = data
          // console.log(data)
        },

        error:error =>{
          console.log("Error:" + error)
        }
      }
    )
  }
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitForm() {
    let modelo : CategoriasRequest= {nombre: this.nombre};

  // Validacion si el campo nombre es vacio
    if (!this.nombre) {
      // Validación personalizada: el campo "Nombre" está vacío
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por favor ingrese un nombre',
        showConfirmButton: false,
        timer: 3500
      })
      this.closeModal();
      return; // Detener el envío del formulario
    }
  // Fin validacion campo vacío

  // ************************************************************************

  // agregar una categoria
    this.servicios.addCategorias(modelo).subscribe(
      {
        next: data =>{
          modelo = data;
          console.log(data);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: this.nombre + '  ' + 'Guardado con exito ',
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
            title: this.nombre + '  ' + 'Error al guardar sigue intentando ',
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
      }
    )

    console.log('Nombre:', this.nombre);
    this.closeModal();
  }


  deleteCategoriaById(id: any){
    Swal.fire({
      title: '¿Realmente desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'No',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicios.deleteCategoria(id).subscribe(
          {
            next : data =>{
              if (data.estado == 'ok'){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'ok',
                  text: 'Se elimino correctamente',
                  timer: 2500
                });
                setTimeout(() => {
                  this.router.navigate(['/categorias/list-categorias']).then(() => {
                    setTimeout(() => {
                      window.location.reload();
                    }); // Coloca el tiempo de espera deseado en milisegundos (en este caso, 2000 ms = 2 segundos)
                  });
                }, 3000);
              }else{
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Ups..',
                  text: 'No es posible eliminar el registro',
                  timer: 2500
                });
                setTimeout(() => {
                    this.router.navigate(['/categorias/list-categorias']).then(() => {
                      setTimeout(() => {
                        window.location.reload();
                      }); // Coloca el tiempo de espera deseado en milisegundos (en este caso, 2000 ms = 2 segundos)
                    });
                  }, 3000);
              }
            },
            error : error =>{
              
            }
          }
        )
      }
    })
  }
  
}
