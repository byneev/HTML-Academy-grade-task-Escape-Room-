import { Map, TileLayer, Marker } from 'leaflet';
import { useState } from 'react';
import { COORDS_LATITUDE, COORDS_LONGITUDE } from 'utils/const';

const useMap = (container) => {
  const [map, setMap] = useState(null);

  if (map === null) {
    const instance = new Map(container, {
      center: [COORDS_LATITUDE, COORDS_LONGITUDE],
      zoom: 6,
    })
    const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    });
    instance.addLayer(layer);
    new Marker([COORDS_LATITUDE, COORDS_LONGITUDE])
    .addTo(instance);
    setMap(instance);
  }

  return map;
}

export { useMap };
