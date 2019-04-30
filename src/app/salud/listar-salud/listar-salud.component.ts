import { Component, OnInit } from '@angular/core';
import { SaludService } from '../salud.service';
import { Router } from '@angular/router';
import { SaludDetail } from '../salud-detail';
import { Salud } from '../salud';

@Component({
  selector: 'app-listar-salud',
  templateUrl: './listar-salud.component.html',
  styleUrls: ['./listar-salud.component.css']
})
export class ListarSaludComponent implements OnInit {

  constructor(private saludService: SaludService, private router: Router) { }

  salud: Salud[];
  persona_id: number;
  selectedSalud: SaludDetail;

  getSalud(): void {
    this.saludService.getSalud().subscribe(salud=> this.salud = salud);
    
  }

  
    onSelected(persona_id: number): void {
      this.persona_id = persona_id;
      this.selectedSalud = new SaludDetail();
      this.saludService.getSaludDetail(persona_id).subscribe(o => {this.selectedSalud = o;
        console.log("En la lista") ;
       console.log(o) ;
      });
    }
    

  ngOnInit() {
    this.getSalud();
  }

}
