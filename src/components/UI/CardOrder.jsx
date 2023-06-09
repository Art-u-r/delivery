import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';
import axios from 'axios';

export default function CardOrder({order, user, setAllOrders}) {
  const [changeState, setchangeState] = useState(false);

  const editHandler = async (id) => {
    try {
      const response = await axios.patch('/api/editState', {id});
      if (response.status === 200) {
        setAllOrders((prev) => prev.map((el) => el.id === id ? response.data : el)) 
        setchangeState(true);
      } 
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

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
      {user ? 
      (
        <Button onClick={()=>editHandler(order.id)} variant="link">Купить</Button>
      ) : (
        <>
          <Button
            id="UncontrolledPopover"
            type="button"
          >
            Купить
          </Button>
          <UncontrolledPopover
            placement="bottom"
            target="UncontrolledPopover"
          >
            <PopoverHeader>
              Доступно для зарегистрированных пользователей
            </PopoverHeader>
            <PopoverBody>
              Для покупки, пожалуйста, войдите в свой личный кабинет
            </PopoverBody>
          </UncontrolledPopover>
        </>
        )
      }
      </Card.Body>
    </Card>
  )
}
