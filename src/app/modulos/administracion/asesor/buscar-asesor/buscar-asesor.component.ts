import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-buscar-asesor',
  templateUrl: './buscar-asesor.component.html',
  styleUrls: ['./buscar-asesor.component.css']
})
export class BuscarAsesorComponent implements OnInit {
ListadoRegistros: ModeloAsesor[]=[];
id:string="";
constructor(private servicioAsesor: AsesorService, 
  private router: Router ,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.ObtenerListadoProductos();
    this.id = this.route.snapshot.params["id"];
  }
  ObtenerListadoProductos(){
    this.servicioAsesor.ObtenerAsesor().subscribe((datos: ModeloAsesor[])=>{
      this.ListadoRegistros = datos;
    })
  }
 
}
