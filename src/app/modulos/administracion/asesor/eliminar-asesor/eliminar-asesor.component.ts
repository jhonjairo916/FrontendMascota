import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-eliminar-asesor',
  templateUrl: './eliminar-asesor.component.html',
  styleUrls: ['./eliminar-asesor.component.css']
})
export class EliminarAsesorComponent implements OnInit {
  id:string="";
  constructor(private servicioAsesor: AsesorService, 
    private router: Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.EliminarAsesor(this.id);
  }
  EliminarAsesor(id: string){
    //alert("hola"+this.id);
    this.servicioAsesor.EliminarAsesor(this.id).subscribe((id)=>{
      alert("Eliminacion exitoso");
      this.router.navigate(["administracion/listar-asesores"]);
    },(error:any)=>{
      console.log(error);
      alert("Error al Eliminar el empleado");
    })
    
  }
}
