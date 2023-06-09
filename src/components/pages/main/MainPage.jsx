import React, { useEffect, useState } from 'react';
import {
  Circle,
  GeolocationControl,
  Map,
  Placemark,
  RulerControl,
  TrafficControl,
  TypeSelector,
  YMaps,
} from '@pbe/react-yandex-maps';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import CardOrder from '../../UI/CardOrder';
import { mPageContext } from '../../context/MainPageContext';

export default function MainPage({ orders, user }) {
  const {
    allOrders,
    setAllOrders,
    inpSearch,
    setInpSearch,
    searchFood,
    setSearchFood,
  } = mPageContext();

  const changeHandler = (e) => {
    setInpSearch(e.target.value);
  };

  useEffect(() => {
    let timer;
    if (inpSearch.trim()) {
      timer = setTimeout(() => {
        axios.post('/api/search', { inpSearch }).then(({ data }) => setSearchFood(data));
      }, 500);
    }
    return () => clearInterval(timer);
  }, [inpSearch]);

  return (
    <>
      <form className="search">
        <input
          name="search"
          type="text"
          id="search"
          placeholder="Искать"
          onChange={changeHandler}
        />
        <button type="submit" className="search-submit">
          Искать
        </button>
      </form>
      <Row>
        {searchFood.map((food) => (
          <Col key={food.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                style={{ height: '300px', objectFit: 'cover' }}
                variant="top"
                src={`${food.img}`}
              />
              <Card.Body>
                <Card.Text>Название: {food.name}</Card.Text>
                <Card.Text>Цена: {food.price} руб.</Card.Text>
                <Card.Text>Cкидка {food.discount}%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <YMaps
        query={{
          ns: 'use-load-option',
          load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
        }}
      >
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          style={{ width: '700px', height: '500px', margin: '10px auto' }}
        >
          {allOrders.map((order) => (
            <Placemark
              key={order.id}
              defaultGeometry={order.destination.split(',')}
              properties={{
                balloonContentBody: order.name,
              }}
            />
          ))}
          <GeolocationControl options={{ float: 'left' }} />
          <RulerControl options={{ float: 'right' }} />
          <TrafficControl options={{ float: 'right' }} />
          <TypeSelector options={{ float: 'right' }} />
          <Circle
            geometry={[[55.706529, 37.597009], 3000]}
            options={{
              draggable: true,
              fillColor: '#DB709377',
              strokeColor: '#990066',
              strokeOpacity: 0.8,
              strokeWidth: 5,
            }}
          />
        </Map>
      </YMaps>
      {allOrders.map((order) => (
        <CardOrder key={order.id} order={order} user={user} setAllOrders={setAllOrders} />
      ))}
    </>
  );
}
