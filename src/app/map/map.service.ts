import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Peloton } from './mostrarmapa/peloton';
import { Observable } from 'rxjs';
import { PelotonDetail } from './mostrarmapa/peloton-detail';

const API_URL = "../../assets"
const data = "/peloton1.json"

const mb = environment.mapbox;


@Injectable({
  providedIn: 'root'
})

export class MapService {

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
    mapboxgl.accessToken = mb.accessToken
  }

  
  getMarkers(): AngularFireList<any> {
    return this.db.list('/markers')
  }
  

  createMarker(data: GeoJson) {
    return this.db.list('/markers')
                  .push(data)
  }

  removeMarker($key: string) {
    return this.db.object('/markers/' + $key).remove()
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
 * 
 */

getPelotonDetail(personaId:number): Observable<PelotonDetail> {
  //console.log(cambioId+" "+API_URL + "cambio-" + cambioId+".json");
  return this.http.get<PelotonDetail>(API_URL + "/pel1-sol" + personaId + ".json");
}


  /** getMarkers() {


    const geoJson = [{
 
 
      'type': 'Feature',
 
 
      'geometry': {
 
 
        'type': 'Point',
 
 
        'coordinates': ['4.4', '72.3']
 
 
      },
 
 
      'properties': {
 
 
        'message': 'ALVAREZ LOPEZ, MARIA SOFIA'
 
 
      }
 
 
    }, {
 
 
      'type': 'Feature',
 
 
      'geometry': {
 
 
        'type': 'Point',
 
 
        'coordinates': ['4.401', '72.301' ]
 
 
      },
 
 
      'properties': {
 
 
        'message': 'FULANITO DE TAL'
 
 
      }
 
 
    }];
 
 
    return geoJson;
 
 
 }
 */
 
 }
