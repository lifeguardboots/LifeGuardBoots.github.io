import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../map.service';
import { ActivatedRoute } from '@angular/router';
import { PelotonDetail } from '../mostrarmapa/peloton-detail';

@Component({
  selector: 'app-mapa-detail',
  templateUrl: './mapa-detail.component.html',
  styleUrls: ['./mapa-detail.component.css']
})
export class MapaDetailComponent implements OnInit {

  public isCollapsed = false;
  
  /**
    * The component's constructor
    * @param aprobacionService The approbation's service
    * @param route The route element which helps to obtain the approbation's id
    */
  constructor(
    private mapService: MapService,
    private route: ActivatedRoute
  ) { }

  /**
    * The approbation whose details we want to show
    */
  @Input() pelotonDetail: PelotonDetail;

  /**
    * The approbation's id retrieved from the address
    */
  persona_id: number;


  /**
    * The method which retrieves the comment (detail) of an approbation
    */
  getPelotonDetail(): void {
    this.mapService.getPelotonDetail(this.persona_id)
      .subscribe(pelotonDetail => {
        
        this.pelotonDetail = pelotonDetail;
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
      this.pelotonDetail = new PelotonDetail();
      this.getPelotonDetail();
    }
    console.log("Detail:  ", this.pelotonDetail)

    }
}
