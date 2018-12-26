//define metodos para poder ser utilizados en cualquier parte de nuestra aplicacion
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelos/empleado';
import { EmpleadosComponent } from '../conponentes/empleados/empleados.component'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  seleccionarEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API = 'http://localhost:3000/api/empleados'

  constructor(private http: HttpClient) {
    this.seleccionarEmpleado = new Empleado();
   }

  getEmpleados(){

    return this.http.get(this.URL_API);
  }

  postEmpleado(Empleado: Empleado){

    return this.http.post(this.URL_API, Empleado)
  }

  putEmpleado(Empleado: Empleado){

    return this.http.put(this.URL_API + `/${Empleado._id}`, Empleado);
  }

  deleteEmpleado(Empleado: Empleado){

    return this.http.delete(this.URL_API + `/${Empleado._id}`);
  }

}
