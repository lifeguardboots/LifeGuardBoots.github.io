import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlertasComponent } from './listar-alertas/listar-alertas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ListarAlertasComponent],
  exports: [ListarAlertasComponent]
})
export class AlertasModule { }
