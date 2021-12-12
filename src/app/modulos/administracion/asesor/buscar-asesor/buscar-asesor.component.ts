import { Component, OnInit } from '@angular/core';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-buscar-asesor',
  templateUrl: './buscar-asesor.component.html',
  styleUrls: ['./buscar-asesor.component.css']
})
export class BuscarAsesorComponent implements OnInit {
ListadoRegistros: ModeloAsesor[]=[];
  constructor(private asesorServicio: AsesorService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }
  ObtenerListadoProductos(){
    this.asesorServicio.ObtenerAsesor().subscribe((datos: ModeloAsesor[])=>{
      this.ListadoRegistros = datos;
    })
  }
}
