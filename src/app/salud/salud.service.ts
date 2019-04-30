import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salud } from './salud';
import { Observable } from 'rxjs';
import { SaludDetail } from './salud-detail';


const API_URL = "../../assets"
const data = "/salud.json"

@Injectable({
  providedIn: 'root'
})

export class SaludService {

  constructor(private http: HttpClient) {
  }

  /**
    * Returns the Observable object containing the list of approbations retrieved from the API
    * @returns The list of approbations in real time.
    */
   getSalud(): Observable<Salud[]> {
    return this.http.get<Salud[]>(API_URL + data);
}

/**
 * Returns the Observable object containing the approbation, with its detail, retrieved from the API
 * @param aprobacionId id of the approbation to be retrieved.
 * @returns the approbation, with its detail.
 * 
 * 
}
 */
getSaludDetail(personaId:number): Observable<SaludDetail> {
  //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
  return this.http.get<SaludDetail>(API_URL + "/salud-" + personaId + ".json");
}



}
