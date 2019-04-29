import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';



const mb = environment.mapbox;


@Injectable({
  providedIn: 'root'
})

export class MapService {

  constructor(private db: AngularFireDatabase) {
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
