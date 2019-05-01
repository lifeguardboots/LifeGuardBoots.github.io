import { Component, OnInit, Input } from '@angular/core';
import { HistorialService } from '../historial.service';
import { ActivatedRoute } from '@angular/router';
import { HistorialDetail } from '../historial-detail';

declare let L;

@Component({
  selector: 'app-historial-detail',
  templateUrl: './historial-detail.component.html',
  styleUrls: ['./historial-detail.component.css']
})

export class HistorialDetailComponent implements OnInit {

  public isCollapsed = false;
  
  /**
    * The component's constructor
    * @param aprobacionService The approbation's service
    * @param route The route element which helps to obtain the approbation's id
    */
  constructor(
    private historialService: HistorialService,
    private route: ActivatedRoute
  ) { }

  /**
    * The approbation whose details we want to show
    */
  @Input() historialDetail: HistorialDetail;


  /**
    * The approbation's id retrieved from the address
    */
  persona_id: number;


  /**
    * The method which retrieves the comment (detail) of an approbation
    */
  getHistorialDetail(): void {
    this.historialService.getPelotonDetail(this.persona_id)
      .subscribe(historialDetail => {
        
        this.historialDetail = historialDetail;
      });
  }

  

 

  /**
    * The method which initializes the component
    * We need to initialize the approbation so that it is never considered as undefined
    */
    ngOnInit() { 
    this.persona_id = +this.route.snapshot.paramMap.get('id');
    console.log("detail: ", this.persona_id);
    if (this.persona_id) {
      this.historialDetail = new HistorialDetail();
      this.getHistorialDetail();
    }
    console.log("Detail:  ", this.historialDetail);
    
    


    /** 
    for (let index = 0; index < this.historialDetail.coordenadas.length; index++) {
      var circle = L.circle(this.historialDetail.coordenadas[index], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 1
    }).addTo(map)
      
    }
    */

    }



}
