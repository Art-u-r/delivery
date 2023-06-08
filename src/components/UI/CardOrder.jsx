import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function CardOrder({order}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${order.img}`} />
      <Card.Body>
        <Card.Title>{order.name}</Card.Title>
        <Card.Text>
          {order.price} рублей
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cкидка {order.discount}%</ListGroup.Item>
        <ListGroup.Item>Адрес: {order.destination}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="link">Купить</Button>
      </Card.Body>
    </Card>
  )
}
