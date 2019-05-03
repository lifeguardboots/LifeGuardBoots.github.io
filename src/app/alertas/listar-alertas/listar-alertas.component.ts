import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../alertas.service';
import { Alertas } from '../alertas';
declare let L;
@Component({
  selector: 'app-listar-alertas',
  templateUrl: './listar-alertas.component.html',
  styleUrls: ['./listar-alertas.component.css']
})
export class ListarAlertasComponent implements OnInit {


  constructor(private alertasService: AlertasService, private router: Router) { }

  alertas: Alertas[];
  persona_id: number;
  selectedAlerta: Alertas;

  getAlertas(): void {
    this.alertasService.getAlertas().subscribe(alertas => this.alertas = alertas);
  }

  private recorrido(){

    var lati = this.selectedAlerta.latitud;
    var longi = this.selectedAlerta.longitud;
    const map = L.map('map').setView([lati, longi], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
 
       L.circle([lati, longi], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 1
    }).addTo(map)
  }

  private recorrido1(){

    var lati = this.selectedAlerta.latitud;
    var longi = this.selectedAlerta.longitud;
    const map = L.map('map').setView([lati, longi], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
 
       L.circle([lati, longi], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 1
    }).addTo(map)

    L.circle([lati, longi], {
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 0.5,
      radius: 4
  }).addTo(map)
  }


  ngOnInit() {
    this.getAlertas();
  }
}
