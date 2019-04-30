import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlertasComponent } from './listar-alertas/listar-alertas.component';
import { AlertasDetailComponent } from './alertas-detail/alertas-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarAlertasComponent, AlertasDetailComponent],
  exports: [ListarAlertasComponent]
})
export class AlertasModule { }
