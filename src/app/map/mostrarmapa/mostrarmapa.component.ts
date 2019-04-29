import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';
import { GeoJson, FeatureCollection } from '../map';

declare var H: any;
declare let L;
declare let tomtom: any;

@Component({
  selector: 'app-mostrarmapa',
  //template: '<div #mapElement style="height:200px"></div>',
  templateUrl: './mostrarmapa.component.html',
  styleUrls: ['./mostrarmapa.component.css']
})
export class MostrarmapaComponent implements OnInit {

  ngOnInit() {
    const map = L.map('map').setView([4.570868, -74.2973328], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    
    var circle = L.circle([4.570868, -74.2973328], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 1
  }).addTo(map)
  .setLatLng([4.570868, -74.2973328])
  .bindPopup('<img src="../../../assets/cristancho.jpg" width="90px" height="100px"><br><p>Cristancho, Carlos</p><br><p></p> 4.570868, -74.2973328' )
  .openPopup();


  
}


  /** 
  ngOnInit() {
    const map = tomtom.L.map('map', {
      key: 'AOM0gweA35Z7NhBIwdcIPm02gY3QuRJF',
      basePath: '/assets/sdk',
      center: [ 4.570868, -74.2973328 ],
      zoom: 6,
      source : 'vector'
    });

}*/
}




  /** 
  private platform: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  public constructor() {
      this.platform = new H.service.Platform({
        
          "app_id": "yed0f567gYqHCrIoDzyD",
          "app_code": "NMlampFEWH9rpsUhLZjAEg"
      });
  }

  public ngOnInit() { }

  public ngAfterViewInit() {
      let defaultLayers = this.platform.createDefaultLayers();
      let map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.normal.map,
          {
              zoom: 6,
              center: { lat: 4.570868, lng: -74.2973328 }
          }
      );
  }
}
  */




  /** 
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  */

 
  /** map: mapboxgl.Map;
  @ViewChild('mapElement') mapElement: ElementRef;
  constructor() { }

  ngOnInit() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoic29maWFhbHZhcmV6bG9wZXoiLCJhIjoiY2ptZjU0N3JrMGR5ZzNxcnNtanlsbGxwZiJ9.TiqdpJq0bSw-PkJgwY3DVA';
      this.map = new mapboxgl.Map({
        container: this.mapElement.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v9'
    })
  }
 
  ngAfterViewInit(){
      this.map = new mapboxgl.Map({
          container: this.mapElement.nativeElement,
          style: 'mapbox://styles/mapbox/streets-v9'
      })
      setTimeout(() => {
        console.log(this.map.nativeElement.innerText);
      }, 1000);
  }   */


  /** 
 /// default settings
 map: mapboxgl.Map;
 style = 'mapbox://styles/mapbox/outdoors-v9';
 lat = 4.5709;
 lng = 74.2973;
 message = 'Hello World!';

 // data
 source: any;
 markers: any;

 constructor(private mapService: MapService) {
}

ngOnInit() {
  this.markers = this.mapService.getMarkers()
  this.initializeMap()
}

private initializeMap() {
  /// locate the user
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.map.flyTo({
        center: [this.lng, this.lat]
      })
    });
  }

  this.buildMap()

}

buildMap() {
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: 13,
    center: [this.lng, this.lat]
  });


  /// Add map controls
  this.map.addControl(new mapboxgl.NavigationControl());


  //// Add Marker on Click
  this.map.on('click', (event) => {
    const coordinates = [event.lngLat.lng, event.lngLat.lat]
    const newMarker   = new GeoJson(coordinates, { message: this.message })
    this.mapService.createMarker(newMarker)
  })


  /// Add realtime firebase data on map load
  this.map.on('load', (event) => { 
    this.map.addSource('customMarker', {


      type: 'geojson',


      data: {


        type: 'FeatureCollection',


        features: []


      }


  });

  const markers = this.mapService.getMarkers();


     const data = {


       type: 'FeatureCollection',


       features: markers


     };


this.map.getSource('customMarker').setData(data);

this.map.addLayer({


  id: 'customMarketid',


  source: 'customMarker',


  type: 'symbol',


  layout: {


    'text-field': '{message}',


    'text-size': 24,


    'text-transform': 'uppercase',


    'icon-image': 'marker-15',


    'text-offset': [0, 1.5]


  },


  paint: {


    'text-color': '#f16624',


    'text-halo-color': '#fff',


    'text-halo-width': 2


  }


});})}}
*/

/** 
    /// register source
    this.map.addSource('firebase', {
       type: 'geojson',
       data: {
         type: 'FeatureCollection',
         features: []
       }
    });

    /// get source
    this.source = this.map.getSource('firebase')

    /// subscribe to realtime database and set data source
    this.markers.subscribe(markers => {
        let data = new FeatureCollection(markers)
        this.source.setData(data)
    })

    /// create map layers with realtime data
    this.map.addLayer({
      id: 'firebase',
      source: 'firebase',
      type: 'symbol',
      layout: {
        'text-field': '{message}',
        'text-size': 24,
        'text-transform': 'uppercase',
        'icon-image': 'rocket-15',
        'text-offset': [0, 1.5]
      },
      paint: {
        'text-color': '#f16624',
        'text-halo-color': '#fff',
        'text-halo-width': 2
      }
    })

  })

}



/// Helpers

removeMarker(marker) {
  this.mapService.removeMarker(marker.$key)
}

flyTo(data: GeoJson) {
  this.map.flyTo({
    center: data.geometry.coordinates
  })
}

}*/