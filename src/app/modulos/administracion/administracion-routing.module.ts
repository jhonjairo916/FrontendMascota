import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';

const routes: Routes = [
  {
    path:"crear-asesor",
    component: CrearAsesorComponent
  },
  {
    path:"editar-asesor",
    component: EditarAsesorComponent
  },
  {
    path:"eliminar-asesor",
    component: EliminarAsesorComponent
  },
  {
    path:"buscar-asesor",
    component: BuscarAsesorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
