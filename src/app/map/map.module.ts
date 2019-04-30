import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarmapaComponent } from './mostrarmapa/mostrarmapa.component';
import { AgmCoreModule } from '@agm/core';
import { MapaDetailComponent } from './mapa-detail/mapa-detail.component';

@NgModule({
  imports: [
    CommonModule, 
    AgmCoreModule
  ],
  declarations: [MostrarmapaComponent, MapaDetailComponent],
  exports: [MostrarmapaComponent]
})
export class MapModule { }
