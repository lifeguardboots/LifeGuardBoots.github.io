import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../alertas.service';
import { Alertas } from '../alertas';

@Component({
  selector: 'app-listar-alertas',
  templateUrl: './listar-alertas.component.html',
  styleUrls: ['./listar-alertas.component.css']
})
export class ListarAlertasComponent implements OnInit {


  constructor(private alertasService: AlertasService, private router: Router) { }

  alertas: Alertas[];
  persona_id: number;
  //selectedHistorial: HistorialDetail;

  getAlertas(): void {
    this.alertasService.getAlertas().subscribe(alertas => this.alertas = alertas);
  }



    /** 
   
    onSelected(persona_id: number): void {
      this.persona_id = persona_id;
      this.selectedHistorial = new HistorialDetail();
      this.historialService.getPelotonDetail(persona_id).subscribe(o => {this.selectedHistorial = o;
        console.log("En la lista") ;
       console.log(o) ;
       this.recorrido();
      });
    }*/

  

  ngOnInit() {
    this.getAlertas();
  }
}
