import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../historial.service';
import { Router } from '@angular/router';
import { Peloton } from '../peloton';
import { HistorialDetail } from '../historial-detail';

declare let L;

@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.css']
})
export class ListarHistorialComponent implements OnInit {

  constructor(private historialService: HistorialService, private router: Router) { }

  peloton: Peloton[];
  persona_id: number;
  selectedHistorial: HistorialDetail;

  getPeloton(): void {
    this.historialService.getPeloton().subscribe(peloton => this.peloton = peloton);
  }

  private recorrido(){
    var lati = this.selectedHistorial.coordenadas[0].latitud;
    var longi_inicial = this.selectedHistorial.coordenadas[0].longitud;
    
    const map = L.map('map').setView([lati, longi_inicial], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (let index = 0; index < this.selectedHistorial.coordenadas.length; index++) {
      console.log("LATITUD", this.selectedHistorial.coordenadas[index].latitud);
      var coord = "Ubicacion: [" + this.selectedHistorial.coordenadas[index].latitud + "," + this.selectedHistorial.coordenadas[index].longitud + "]";
      var longi = this.selectedHistorial.coordenadas[index].longitud;
       L.circle([this.selectedHistorial.coordenadas[index].latitud, longi], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 1
    }).addTo(map)
    .bindPopup(coord)

      
    }

    /** 
    this.selectedHistorial.coordenadas.forEach(element => {
      L.circle(this.selectedHistorial.coordenadas[element.latitud, element.longitud], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 1
    }).addTo(map)
    });*/
  }

  
    onSelected(persona_id: number): void {
      this.persona_id = persona_id;
      this.selectedHistorial = new HistorialDetail();
      this.historialService.getPelotonDetail(persona_id).subscribe(o => {this.selectedHistorial = o;
        console.log("En la lista") ;
       console.log(o) ;
       this.recorrido();
      });
    }
    

  ngOnInit() {
    this.getPeloton();
  }

}
