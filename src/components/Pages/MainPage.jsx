import React, { useState } from 'react'
import { Circle, GeolocationControl, Map, Placemark, RulerControl, TrafficControl, TypeSelector, YMaps } from '@pbe/react-yandex-maps';
import CardOrder from '../UI/CardOrder';



export default function MainPage({orders}) {
  const [allOrders, setAllOrders] = useState(orders);

  // console.log('main===============',orders);
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
  >
    <Placemark
      defaultGeometry={[55.706529, 37.597009]}
      properties={{
        balloonContentBody:
          "Заказ ",
      }}
    />
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
