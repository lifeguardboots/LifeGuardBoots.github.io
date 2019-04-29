import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarmapaComponent } from './mostrarmapa/mostrarmapa.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule, 
    AgmCoreModule
  ],
  declarations: [MostrarmapaComponent],
  exports: [MostrarmapaComponent]
})
export class MapModule { }
