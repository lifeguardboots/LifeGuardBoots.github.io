import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Peloton } from "./peloton";
import { HistorialDetail } from "./historial-detail";



const API_URL = "../../assets"
const data = "/peloton1.json"
@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) {
  }
   /**
    * Returns the Observable object containing the list of approbations retrieved from the API
    * @returns The list of approbations in real time.
    */
   getPeloton(): Observable<Peloton[]> {
    return this.http.get<Peloton[]>(API_URL + data);
}

/**
 * Returns the Observable object containing the approbation, with its detail, retrieved from the API
 * @param aprobacionId id of the approbation to be retrieved.
 * @returns the approbation, with its detail.
 * getPelotonDetail(personaId:number): Observable<PelotonDetail> {
  //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
  return this.http.get<PelotonDetail>(API_URL + "/pel1-sol" + personaId + ".json");
 */

getPelotonDetail(personaId:number): Observable<HistorialDetail> {
  //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
  return this.http.get<HistorialDetail>(API_URL + "/coordenadas" + personaId + ".json");
}


}
