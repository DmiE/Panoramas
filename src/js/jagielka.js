import { Viewer } from 'photo-sphere-viewer';
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';
import desktopPano from '../assets/jagielka-desktop.jpg';
import logoMarker from '../assets/logo-marker.svg';
import markerIcon from '../assets/map-marker-blue.png';
import shopMarker from '../assets/shop-marker.svg';
import busMarker from '../assets/bus-marker.svg';
import treeMarker from '../assets/tree-marker.svg';
import hospitalMarker from '../assets/hospital-marker.svg';
import schoolMarker from '../assets/school-marker.svg';
import sportMarker from '../assets/sport-marker.svg';
import museumMarker from '../assets/museum-marker.svg';
import parkingMarker from '../assets/parking-marker.svg';
import restaurantMarker from '../assets/restaurant-marker.svg'

const viewer = new Viewer({
  container: document.querySelector('#jagielka-pano'),
  panorama: desktopPano,
  navbar: ['autorotate', 'zoomOut', 'zoomRange', 'zoomIn', 'fullscreen'],
  defaultLong: 0.75,
  defaultLat: -0.11,
  plugins: [
    [
      MarkersPlugin,
      {
        markers: [
          {
            id: 'przystanek1-marker',
            longitude: 2.41,
            latitude: -0.11,
            image: busMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przystanek autobusowy - 200m'
          },
          {
            id: 'przystanek2-marker',
            longitude: 3.586,
            latitude: -0.153,
            image: busMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przystanek autobusowy - 250m'
          },
          {
            id: 'las-wolski-marker',
            longitude: 2.388,
            latitude: 0.092,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Las Wolski i Ogród Zoologiczny - 1700m'
          },
          {
            id: 'kopiec-pilsudskiego-marker',
            longitude: 2.18,
            latitude: 0.105,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Kopiec Józefa Piłsudskiego - 1200m'
          },
          {
            id: 'leviatan-marker',
            longitude: 3.65,
            latitude: 0.015,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep spożywczy - 2000m'
          },
          {
            id: 'przedszkole-marker',
            longitude: 3.86,
            latitude: -0.083,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: '"Moje Przedszkole" - 650m'
          },
          {
            id: 'szkola-marker',
            longitude: 0.41,
            latitude: -0.091,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Publiczna Szkoła Podstawowa - 1000m'
          },
          {
            id: 'orlik-marker',
            longitude: 0.43,
            latitude: -0.091,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Orlik - 1050m'
          },
          {
            id: 'stadnina-marker',
            longitude: 4.864,
            latitude: -0.218,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Klub turystyki konnej - 170m'
          },
          {
            id: 'uniwersytet-marker',
            longitude: 3.79,
            latitude: -0.001,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Obserwatorium Astronomiczne UJ - 1200m'
          },
          {
            // polygon marker
            id: 'polygon',
            polylineRad: [
              [1.3860, -1.064],
              [0.6300, -0.797],
              [6.0042, -0.8534],
              [6.244, -0.4080],
              [0.3392, -0.4226],
              [0.7150, -0.7683],
              [1.416, -1.000],
              [1.3860, -1.064]
            ],
            svgStyle: {
              fill: 'rgba(200, 0, 0, 0.2)',
              stroke: 'rgba(200, 0, 50, 0.8)',
              strokeWidth: '2px'
            },
            tooltip: {
              content: 'Teren inwestycji Enklawa Jagiełka',
              position: 'right bottom'
            }
          },
          {
            id: 'park-wola-marker',
            longitude: 1.75,
            latitude: 0.021,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Park Rozrywki Wola - 2,8km',
          },
          {
            id: 'przedszkole-abc-marker',
            longitude: 1.60,
            latitude: -0.018,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przedszkole ABC - 1400m'
          },
          {
            id: 'przedszkole-waldorfowskie-marker',
            longitude: 1.382,
            latitude: -0.015,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przedszkole Waldorfowskie - 1800m'
          },
          {
            id: 'jubilat-marker',
            longitude: 1.41,
            latitude: -0.015,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep spożywczo - przemysłowy - 1000m'
          },
          {
            id: 'bacowka-marker',
            longitude: 1.69,
            latitude: 0.022,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep spożywczy Bacówka Towary Tradycyjne - 3,1km'
          },
          {
            id: 'portobello-marker',
            longitude: 1.68,
            latitude: 0.022,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja Portobello - 3,1km'
          },
          {
            id: 'wloszczyzna-marker',
            longitude: 1.71,
            latitude: 0.015,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja Włoszczyzna - 3,1km'
          },
          {
            id: '27-porcji-marker',
            longitude: 1.77,
            latitude: 0.021,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja "27 Porcji" - 2,8km'
          },
          {
            id: 'park-decjusza-marker',
            longitude: 1.73,
            latitude: 0.021,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Park Decjusza - 2,8km'
          },
          {
            id: 'parking-marker',
            longitude: 0.836,
            latitude: -0.042,
            image: parkingMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Parking Park and Ride - 2km<br/>Kolejka do dworca centralnego, dojazd kolejki 5 min',
          },
          {
            id: 'gospoda-marker',
            longitude: 1.663,
            latitude: 0.0164,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Gospoda na Woli - 3,1km'
          },
        ]
      }
    ]
  ]
});

viewer.on('click', function(e, data) {
  console.log(data.longitude, data.latitude);
});

var markersPlugin = viewer.getPlugin(MarkersPlugin);

markersPlugin.on('select-marker', function(e, marker, data) {
  markersPlugin.hideAllTooltips();
  marker.showTooltip(e);
});