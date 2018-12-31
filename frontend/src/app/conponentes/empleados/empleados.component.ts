import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/modelos/empleado';

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  addEmpleado(form: NgForm){
    if(form.value._id){

      this.empleadoService.putEmpleado(form.value)
        .subscribe(res =>{
          this.resetForm(form);
          M.toast({html: 'Se he actualizado correctamente', classes: 'rounded'});
          this.getEmpleados();
        });
    }
    else{
      this.empleadoService.postEmpleado(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Se añadio correctamente', classes: 'rounded'});
        this.getEmpleados();
      });
    }
  }

  getEmpleados(){

    this.empleadoService.getEmpleados()
    .subscribe(res => {
      this.empleadoService.empleados = res as Empleado[];
      console.log(res);
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.empleadoService.seleccionarEmpleado = new Empleado();
    }
  }

  editarEmpleado(empleado: Empleado){

    this.empleadoService.seleccionarEmpleado = empleado;
  }


  borrarEmpleado(_idEmpleado: string){

    if(confirm('¿Estas seguro que quieres eliminarlo?')){

      this.empleadoService.deleteEmpleado(_idEmpleado)
      .subscribe(res => {
        this.getEmpleados();
        M.toast({html: 'Se añadio eliminado correctamente', classes: 'rounded'});
      });
    } 
  }
}
