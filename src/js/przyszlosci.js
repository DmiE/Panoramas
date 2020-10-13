import { Viewer } from 'photo-sphere-viewer';
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';
import desktopPano from '../assets/przyszlosci-desktop.jpg';
import logoMarker from '../assets/logo-marker.svg';
import markerIcon from '../assets/map-marker-blue.png';
import shopMarker from '../assets/shop-marker.svg';
import busMarker from '../assets/bus-marker.svg';
import treeMarker from '../assets/tree-marker.svg';
import hospitalMarker from '../assets/hospital-marker.svg';
import schoolMarker from '../assets/school-marker.svg';
import sportMarker from '../assets/sport-marker.svg';
import museumMarker from '../assets/museum-marker.svg'
import parkingMarker from '../assets/parking-marker.svg';
import restaurantMarker from '../assets/restaurant-marker.svg'

const viewer = new Viewer({
  container: document.querySelector('#przyszlosci-pano'),
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
            id: 'enklawa-przyszlosci-marker',
            longitude: 0.75,
            latitude: -0.32,
            image: logoMarker,
            width: 70,
            height: 100,
            anchor: 'bottom center',
            tooltip: 'Teren inwestycji Enklawa Przyszłości'
          },
          {
            id: 'przystanek1-marker',
            longitude: 1.18,
            latitude: -0.079,
            image: busMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przystanek autobusowy - 450m'
          },
          {
            id: 'przystanek2-marker',
            longitude: 3.28,
            latitude: -0.36,
            image: busMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przystanek autobusowy - 200m'
          },
          {
            id: 'kryspinow-marker',
            longitude: 4.85,
            latitude: 0.021,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Zalew Kryspinów - 3,5km'
          },
          {
            id: 'las-wolski-marker',
            longitude: 2.67,
            latitude: 0.13,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Las Wolski i Ogród Zoologiczny - 1500m'
          },
          {
            id: 'kopiec-pilsudskiego-marker',
            longitude: 2.71,
            latitude: 0.13,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Kopiec Józefa Piłsudskiego - 750m'
          },
          {
            id: 'leviatan-marker',
            longitude: 0.43,
            latitude: -0.001,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep spożywczy - 2000m'
          },
          {
            id: 'biedronka-marker',
            longitude: 0.91,
            latitude: 0.003,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep spożywczy - 2200m'
          },
          {
            id: 'orlik-marker',
            longitude: 6.02,
            latitude: -0.024,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Orlik - 1000m'
          },
          {
            id: 'szkola-podstawowa-marker',
            longitude: 6.00,
            latitude: -0.024,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Publiczna Szkoła Podstawowa - 900m'
          },
          {
            id: 'uniwersytet-marker',
            longitude: 0.25,
            latitude: -0.05,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Uniwersytet Rolniczy - 500m'
          },
          {
            id: 'park-wola-marker',
            longitude: 1.75,
            latitude: 0.021,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Park Rozrywki Wola - 2km',
          },
          {
            id: 'przedszkole-abc-marker',
            longitude: 1.57,
            latitude: -0.018,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przedszkole ABC - 750m'
          },
          {
            id: 'przedszkole-waldorfowskie-marker',
            longitude: 1.254,
            latitude: -0.038,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przedszkole Waldorfowskie - 1200m'
          },
          {
            id: 'jubilat-marker',
            longitude: 1.21,
            latitude: -0.087,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep spożywczo - przemysłowy - 450m'
          },
          {
            id: 'bacowka-marker',
            longitude: 1.69,
            latitude: 0.022,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep spożywczy Bacówka Towary Tradycyjne - 2350m'
          },
          {
            id: 'portobello-marker',
            longitude: 1.68,
            latitude: 0.022,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja Portobello - 2350m'
          },
          {
            id: 'wloszczyzna-marker',
            longitude: 1.71,
            latitude: 0.015,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja Włoszczyzna - 2300m'
          },
          {
            id: '27-porcji-marker',
            longitude: 1.77,
            latitude: 0.021,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja "27 Porcji" - 2km'
          },
          {
            id: 'park-decjusza-marker',
            longitude: 1.73,
            latitude: 0.021,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Park Decjusza - 2km'
          },
          {
            id: 'parking-marker',
            longitude: 0.515,
            latitude: -0.021,
            image: parkingMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Parking Park and Ride - 1600m<br/>Kolejka do dworca centralnego, dojazd kolejki 5 min',
          },
          {
            id: 'gospoda-marker',
            longitude: 1.65,
            latitude: 0.017,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Gospoda na Woli - 2300m'
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