// import { Viewer } from 'photo-sphere-viewer';
// import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';
// import desktopPano from '../assets/pano-desktop.jpg';
// import logoMarker from '../assets/logo-map-marker.png';
// import markerIcon from '../assets/map-marker-blue.png';

// const viewer = new Viewer({
//   container: document.querySelector('#panorama'),
//   panorama: desktopPano,
//   navbar: ['autorotate', 'zoomOut', 'zoomRange', 'zoomIn', 'fullscreen'],
//   defaultLong: 0.75,
//   defaultLat: -0.11,
//   plugins: [
//     [
//       MarkersPlugin,
//       {
//         markers: [
//           {
//             id: 'malownicza-enklawa-marker',
//             longitude: 0.75,
//             latitude: -0.32,
//             image: logoMarker,
//             width: 70,
//             height: 100,
//             anchor: 'bottom center',
//             tooltip: 'Teren inwestycji Malownicza Enklawa'
//           },
//           {
//             id: 'wewel-marker',
//             longitude: 1.33,
//             latitude: 0.02,
//             image: markerIcon,
//             width: 35,
//             height: 50,
//             anchor: 'bottom center',
//             tooltip: 'Zamek na na Wawelu'
//           },
//           {
//             id: 'las-wolski-marker',
//             longitude: 2.67,
//             latitude: 0.13,
//             image: markerIcon,
//             width: 35,
//             height: 50,
//             anchor: 'bottom center',
//             tooltip: 'Las Wolski'
//           }
//         ]
//       }
//     ]
//   ]
// });

// viewer.on('click', function(e, data) {
//   console.log(data.longitude, data.latitude);
// });
