import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Poly
  //Polygon,
  //LatLngBounds, 
  //Marker, 
  //ILatLng,
  //CameraPosition,
  //MarkerOptions,
  //Marker,
  //Environment
} from '@ionic-native/google-maps';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  map: GoogleMap;
  tesh = {lat: 19.409765, lng: -99.316140};
  markerVariable = null;
  
  eiCoords = [
    {lat: 19.408845, lng: -99.317095},
    {lat: 19.409010, lng: -99.316719},
    {lat: 19.408817, lng: -99.316623},
    {lat: 19.408653, lng: -99.317001}
  ];
  // Edificio A
  eaCoords = [
    {lat: 19.409455, lng: -99.316025},
    {lat: 19.409627, lng: -99.315636},
    {lat: 19.409819, lng: -99.315735},
    {lat: 19.409647, lng: -99.316121}
  ];

  // Edificio G
  egCoords = [
      {lat: 19.409396, lng: -99.316841},
      {lat: 19.409525, lng: -99.316575},
      {lat: 19.409756, lng: -99.316701},
      {lat: 19.409629, lng: -99.316966}, 
  ];    

  // Edificio F
  efCoords = [
      {lat: 19.410114, lng: -99.316298},
      {lat: 19.410264, lng: -99.315921},
      {lat: 19.410482, lng: -99.316019},
      {lat: 19.410332, lng: -99.316395}
  ];

  // Edificio H
  ehCoords = [
      {lat: 19.410327, lng: -99.315809}, 
      {lat: 19.410487, lng: -99.315341},
      {lat: 19.410693, lng: -99.315421},
      {lat: 19.410532, lng: -99.315889}
  ];

  // Edificio C
  ecCoords = [
      {lat: 19.409894, lng: -99.315590}, 
      {lat: 19.410008, lng: -99.315331},
      {lat: 19.409895, lng: -99.315277},
      {lat: 19.409778, lng: -99.315544}
  ];

  // Edificio B
  ebCoords = [
      {lat: 19.409165, lng: -99.317231}, 
      {lat: 19.409292, lng: -99.316949},
      {lat: 19.409171, lng: -99.316886},
      {lat: 19.409044, lng: -99.317170}
  ];

  user:any[] = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public googleMaps: GoogleMaps,
    public restProvider: RestProvider
  ) {
    this.user = restProvider.user;
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
    this.loadMap();
  }

  loadMap(){
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: this.tesh,
        zoom: 17
      },
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#d9e1f4"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#ecf0fa"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ],
      'gestures': {
        'scroll': false,
        'tilt': false,
        'rotate': false,
        'zoom': false
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      //this.getPosition();
    })
    .catch(error =>{
      console.log(error);
    });

    this.map.addPolygon({
      'points': this.eiCoords,
      'fillColor' : 'rgb( 109, 103, 201)',
      'strokeWidth': 0,
      'text': 'A'
    });

    this.map.addPolygon({
      'points': this.eaCoords,
      'fillColor' : 'rgb( 109, 103, 201)',
      'strokeWidth': 0,
      'text': 'A'
    });

    this.map.addPolygon({
      'points': this.egCoords,
      'fillColor' : 'rgb( 109, 103, 201)',
      'strokeWidth': 0,
      'text': 'A'
    });

    this.map.addPolygon({
      'points': this.efCoords,
      'fillColor' : 'rgb( 109, 103, 201)',
      'strokeWidth': 0,
      'text': 'A'
    });

    this.map.addPolygon({
      'points': this.ehCoords,
      'fillColor' : 'rgb( 109, 103, 201)',
      'strokeWidth': 0,
      'text': 'A'
    });

    this.map.addPolygon({
      'points': this.ecCoords,
      'fillColor' : 'rgb( 109, 103, 201)',
      'strokeWidth': 0,
      'text': 'A'
    });

    this.map.addPolygon({
      'points': this.ebCoords,
      'fillColor' : 'rgb( 109, 103, 201)',
      'strokeWidth': 0,
      'text': 'A'
    });    
  }

  getPosition(): void{

    this.map.getMyLocation()
    .then(response => {
      this.map.moveCamera({
        target: response.latLng
      });
      /*
      this.map.addMarker({
        title: 'My Position',
        icon: 'blue',
        animation: 'DROP',
        position: response.latLng
      });    
      */
      let contain: boolean = Poly.containsLocation(response.latLng, this.ebCoords);
  
      if (contain) {
      }

    })
    .catch(error =>{
      console.log(error);
    });
  }
  
}
