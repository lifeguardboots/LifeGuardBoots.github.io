import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSaludComponent } from './listar-salud/listar-salud.component';
import { SaludDetailComponent } from './salud-detail/salud-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarSaludComponent, SaludDetailComponent]
})
export class SaludModule { }
