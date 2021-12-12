import { Component, OnInit } from '@angular/core';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-eliminar-asesor',
  templateUrl: './eliminar-asesor.component.html',
  styleUrls: ['./eliminar-asesor.component.css']
})
export class EliminarAsesorComponent implements OnInit {

  constructor(private servicioAsesor: AsesorService) { }

  ngOnInit(): void {
  }
  EliminarAsesor(documento: string){
    
  }
}
