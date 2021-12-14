import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-editar-asesor',
  templateUrl: './editar-asesor.component.html',
  styleUrls: ['./editar-asesor.component.css']
})
export class EditarAsesorComponent implements OnInit {
  id:string="";
  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
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
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }
  BuscarProducto(){
    this.servicioAsesor.BuscarAsesorPorId(this.id).subscribe((datos:ModeloAsesor)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["documento"].setValue(datos.documento);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["area"].setValue(datos.area);
      this.fgValidador.controls["salario"].setValue(datos.salario);
      this.fgValidador.controls["cargo"].setValue(datos.cargo);
      this.fgValidador.controls["sucursal"].setValue(datos.sucursalId);
    });
  }
  EditarAsesor(){
    let id = this.fgValidador.controls['id'].value;
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
    p.idEmpleado = this.id;
    this.servicioAsesor.EditarAsesor(p).subscribe((datos: ModeloAsesor)=>{
      alert("Actualizacion exitoso");
      this.router.navigate(["administracion/listar-asesores"]);
    },(error:any)=>{
      console.log(error);
      alert("Error al registrar el empleado");
    })
  }

}
