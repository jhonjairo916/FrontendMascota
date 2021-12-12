import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as cryptoJs from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  //Se valida informacion y se genera comunicacion bidirecional entre frontend y backend
  fgValidador: FormGroup = this.fb.group({
    'usuario':['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }
   IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    //let claveCifrada = cryptoJs.MD5(clave).toString()
    this.servicioSeguridad.identificar(usuario, clave).subscribe((datos:any)=>{
      //ok
      alert("datos Correctos");
    },(error:any)=>{
      console.log(error);
      alert("Datos invalidos.");
    })
  }

}
