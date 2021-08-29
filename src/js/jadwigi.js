import { Viewer } from 'photo-sphere-viewer';
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';
import desktopPano from '../assets/jadwigi-mobile.jpg';
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
import restaurantMarker from '../assets/restaurant-marker.svg';

const viewer = new Viewer({
  container: document.querySelector('#jadwigi-pano'),
  panorama: desktopPano,
  navbar: ['autorotate', 'zoomOut', 'zoomRange', 'zoomIn', 'fullscreen'],
  defaultLong: 4.8364408526373825,
  defaultLat: -0.12197216024974145,
  plugins: [
    [
      MarkersPlugin,
      {
        markers: [
          {
            id: 'przystanek1-marker',
            longitude: 4.270724036733202,
            latitude: -0.1643814824191292,
            image: busMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przystanek autobusowy - 240m'
          },
          {
            id: 'przystanek2-marker',
            longitude: 0.7124675572035847,
            latitude: -0.31906084830042536,
            image: busMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przystanek autobusowy - 120m'
          },
          {
            id: 'park-decjusza-marker',
            longitude: 4.237912796250878,
            latitude: -0.07195959333469792,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Park Decjusza - 470m'
          },
          {
            id: 'parking-marker',
            longitude: 4.173701129647233,
            latitude: -0.09049070659803693,
            image: parkingMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Parking - 440m'
          },
          {
            id: 'gospoda-na-woli-marker',
            longitude: 4.003562362686374,
            latitude: -0.05012699342152227,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Gospoda Na Woli - 650m'
          },
          {
            id: 'asia-deli-sushi-bar-marker',
            longitude: 4.020425298884687,
            latitude: -0.041227378724719266,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Asia Deli Sushi Bar - 720m'
          },
          {
            id: 'portobello-marker',
            longitude: 4.096034821646631,
            latitude: -0.045321040747143604,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja Portobello - 710m'
          },
          {
            id: 'goodlood-marker',
            longitude: 4.0881264063028615,
            latitude: -0.03546264919034514,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Good Lood - 790m'
          },
          {
            id: 'nakielny-marker',
            longitude: 4.063495640277937,
            latitude: -0.025662422331040213,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Nakielny - 980m'
          },
          {
            id: 'kocyk-marker',
            longitude: 4.0784424999296425,
            latitude: -0.03012315035414015,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep spożywczy "Kocyk" - 880m'
          },
          {
            id: 'projekt-strzelnica-marker',
            longitude: 4.069545697792157,
            latitude: -0.025531314558378204,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja "Projekt Strzelnica" - 1.1km'
          },
          {
            id: 'leviatan-marker',
            longitude: 4.05474979836024,
            latitude: -0.023059419852115237,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep Leviatan - 1.2km'
          },
          {
            id: 'korty-tenisowe-marker',
            longitude: 4.172106127998941,
            latitude: -0.0294598585076149,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Korty Tenisowe - 1.2km'
          },
          {
            id: 'szkola-marker',
            longitude: 5.047429202135759,
            latitude: -0.04046330114173591,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Szkoła podstawowa nr.72 - 410m'
          },
          {
            id: 'przedszkole-marker',
            longitude: 5.016126305794039,
            latitude: -0.02885730713176904,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: '"Kochane Przedszkole" - 320m'
          },
          {
            id: 'przedszkole-2-marker',
            longitude: 4.965430504199502,
            latitude: -0.03640247203000602,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przedszkole nr. 78 - 340m'
          },
          {
            id: '27-porcji-marker',
            longitude: 4.694258216501888,
            latitude: -0.04726228299012947,
            image: restaurantMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Restauracja "27 Porcji" - 480m'
          },
          {
            id: 'las-wolski-marker',
            longitude: 6.2024200387050366,
            latitude: 0.09538937459153685,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Las Wolski i Ogród Zoologiczny - 1.6km'
          },
          {
            id: 'kopiec-pilsudskiego-marker',
            longitude: 6.238201144734193,
            latitude: 0.093780547495385,
            image: treeMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Kopiec Józefa Piłsudskiego - 1.6km'
          },
          {
            id: 'przedszkole-abc-marker',
            longitude: 0.309580616314518,
            latitude: 0.012982614198620235,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przedszkole ABC - 1.1km'
          },
          {
            id: 'przedszkole-waldorfowskie-marker',
            longitude: 0.843486830517999,
            latitude: -0.0396512990217448,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Przedszkole - 730m'
          },
          {
            id: 'niepubliczne-przedszkole-marker',
            longitude: 3.4921440827483448,
            latitude: -0.04613411491555297,
            image: schoolMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Niepubliczne Przedszkole Dwujęzyczne - 1.1km'
          },
          {
            id: 'basen-marker',
            longitude: 2.8010599389770174,
            latitude: -0.09492810752175629,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Basen - 390m'
          },
          {
            id: 'lodowisko-marker',
            longitude: 2.7499595124759724,
            latitude: -0.10447670881259108,
            image: sportMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Lodowisko - 390m'
          },
          {
            id: 'rynek-marker',
            longitude: 3.9789037210058327,
            latitude: -0.0027052951689161553,
            image: museumMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Rynek Główny - 5km'
          },
          {
            id: 'lidl-marker',
            longitude: 2.7699824853144506,
            latitude: -0.019809432732849297,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep Lidl - 1.5km'
          },
          {
            id: 'zaba-marker',
            longitude: 3.038996794393623,
            latitude: -0.019223893081906862,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep Żabka - 1km'
          },
          {
            id: 'zdrowa-zywnosc-marker',
            longitude: 3.0917365925902733,
            latitude: -0.019259894294719748,
            image: shopMarker,
            width: 35,
            height: 50,
            anchor: 'bottom center',
            tooltip: 'Sklep Ze Zdrową Żywnością - 1km'
          },
          {
            id: 'polygon',
            polylineRad: [
              [4.962143166702246, -0.7804786519809164],
              [5.362109468290262, -0.3425936133185703],
              [5.6199541838788685, -0.3602111242283381],
              [5.569110936586916, -0.9233666653979342],
              [4.962143166702246, -0.7804786519809164]
            ],
            svgStyle: {
              fill: 'rgba(200, 0, 0, 0.2)',
              stroke: 'rgba(200, 0, 50, 0.8)',
              strokeWidth: '2px'
            },
            tooltip: {
              content: 'Teren inwestycji Enklawa Jadwigi',
              position: 'right bottom'
            }
          }
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
