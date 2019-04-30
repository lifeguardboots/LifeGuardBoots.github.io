import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHistorialComponent } from './listar-historial/listar-historial.component';
import { HistorialDetailComponent } from './historial-detail/historial-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarHistorialComponent, HistorialDetailComponent],
  exports: [ListarHistorialComponent]
})
export class HistorialModule { }
