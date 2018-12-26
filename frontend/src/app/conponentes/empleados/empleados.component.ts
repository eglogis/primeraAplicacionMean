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
  }

  addEmpleado(form: NgForm){
    this.empleadoService.postEmpleado(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Se añadio correctamente', classes: 'rounded'});
      });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.empleadoService.seleccionarEmpleado = new Empleado();
    }
  }

}
