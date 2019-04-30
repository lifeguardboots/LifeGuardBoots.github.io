import { Component, OnInit, Input } from '@angular/core';
import { SaludService } from '../salud.service';
import { ActivatedRoute } from '@angular/router';
import { SaludDetail } from '../salud-detail';

@Component({
  selector: 'app-salud-detail',
  templateUrl: './salud-detail.component.html',
  styleUrls: ['./salud-detail.component.css']
})
export class SaludDetailComponent implements OnInit {

  public isCollapsed = false;
  
  /**
    * The component's constructor
    * @param aprobacionService The approbation's service
    * @param route The route element which helps to obtain the approbation's id
    */
  constructor(
    private saludService: SaludService,
    private route: ActivatedRoute
  ) { }

  /**
    * The approbation whose details we want to show
    */
  @Input() saludDetail: SaludDetail;

  /**
    * The approbation's id retrieved from the address
    */
  persona_id: number;


  /**
    * The method which retrieves the comment (detail) of an approbation
    */
  getSaludDetail(): void {
    this.saludService.getSaludDetail(this.persona_id)
      .subscribe(saludDetail => {
        
        this.saludDetail = saludDetail;
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
      this.saludDetail = new SaludDetail();
      this.getSaludDetail();
    }
    console.log("Detail:  ", this.saludDetail)

    }
}
