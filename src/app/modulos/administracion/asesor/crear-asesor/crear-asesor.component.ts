import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';
@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    //'idEmpleado':['',[Validators.required]],
    'documento':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'cargo':['',[Validators.required]],
    'area':['',[Validators.required]],
    'salario':['',[Validators.required]],
    'sucursal':['',[Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private servicioAsesor: AsesorService,
    private router: Router) { }

  ngOnInit(): void {
  }
  GuardarAsesor(){
    let documento = this.fgValidador.controls['documento'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let area = this.fgValidador.controls['area'].value;
    let salario = parseInt(this.fgValidador.controls['salario'].value);
    let cargo = this.fgValidador.controls['cargo'].value;
    let sucursalId = this.fgValidador.controls['sucursal'].value;
    let p = new ModeloAsesor();
    p.documento = documento;
    p.nombre = nombre;
    p.apellidos = apellidos;
    p.cargo = cargo;
    p.area = area;
    p.salario = salario;
    p.sucursalId = sucursalId;
    this.servicioAsesor.CrearAsesor(p).subscribe((datos: ModeloAsesor)=>{
      alert("Registro exitoso");
      this.router.navigate(["administracion/listar-asesores"]);
    },(error:any)=>{
      console.log(error);
      alert("Error al registrar el empleado");
    })

   /*this.servicioAsesor.CrearAsesor(p).subscribe({
      complete: () => { alert("bien") }, // completeHandler
      error: () => {alert("error")},    // errorHandler 
      next: () => { alert("mal")}     // nextHandler
    */
  }

}
