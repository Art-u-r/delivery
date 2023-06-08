import React, { useState } from 'react'
import { Circle, GeolocationControl, Map, Placemark, RulerControl, TrafficControl, TypeSelector, YMaps } from '@pbe/react-yandex-maps';
import CardOrder from '../../UI/CardOrder';



export default function MainPage({orders}) {
  const [allOrders, setAllOrders] = useState(orders);

  async function geocodeAddress(address) {
    try {
      const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=c509d972-b6aa-48a2-8472-e6a254b6e5d2&format=json&geocode=${encodeURIComponent(address)}`);
      const data = await response.json();
      
      // Парсинг координат из ответа
      const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      const longitude = parseFloat(coordinates[0]);
      const latitude = parseFloat(coordinates[1]);
      
      return [latitude, longitude];
    } catch (error) {
      console.error('Ошибка при геокодировании адреса:', error);
      return null;
    }
  }

  const address = 'Чечня, Россия';

  async function getLocation() {
    const coordinates = await geocodeAddress(address);
    console.log(coordinates); // Вывод координат в формате [широта, долгота]
}

getLocation();

  
  return (
    <>
    <YMaps
    query={{
      ns: "use-load-option",
      load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
    }}
    >
    <Map
    defaultState={{
      center: [55.75, 37.57],
      zoom: 9,
      controls: ["zoomControl", "fullscreenControl"],
    }}
    style={{width: "700px", height: "500px", margin: '10px auto'}}
  >
    {allOrders.map((order) => (

    <Placemark
      key={order.id}
      defaultGeometry={order.destination.split(',')}
      properties={{
        balloonContentBody:
          order.name,
      }}
    />
    ))}
    <GeolocationControl options={{ float: "left" }} />
    <RulerControl options={{ float: "right" }} />
    <TrafficControl options={{ float: "right" }} />
    <TypeSelector options={{ float: "right" }} />
    <Circle
      geometry={[[55.706529, 37.597009], 5000]}
      options={{
        draggable: true,
        fillColor: "#DB709377",
        strokeColor: "#990066",
        strokeOpacity: 0.8,
        strokeWidth: 5,
      }}
    />
  </Map>
  </YMaps>
    {allOrders.map((order) => (
      <CardOrder key={order.id} order={order} />
    ))}
    </>
  )
}
