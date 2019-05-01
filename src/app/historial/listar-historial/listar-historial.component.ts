import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../historial.service';
import { Router } from '@angular/router';
import { Peloton } from '../peloton';
import { HistorialDetail } from '../historial-detail';

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

  
    onSelected(persona_id: number): void {
      this.persona_id = persona_id;
      this.selectedHistorial = new HistorialDetail();
      this.historialService.getPelotonDetail(persona_id).subscribe(o => {this.selectedHistorial = o;
        console.log("En la lista") ;
       console.log(o) ;
      });
    }
    

  ngOnInit() {
    this.getPeloton();
  }

}
