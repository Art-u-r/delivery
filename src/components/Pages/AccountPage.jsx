import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AccountForm from '../UI/AccountForm';
import AccountCard from '../UI/AccountCard';

export default function AccountPage({ orders }) {
  const [orderList, setOrderList] = useState(orders);

  const [filterOrders, setFilterOrders] = useState([]);

  useEffect(() => {
    axios('/api/account/active').then((res) => setFilterOrders(res.data));
  }, [filterOrders.length]);

  const deleteHandler = async (id) => {
    const result = await axios.delete(`/api/account/order/${id}`);
    if (result.status === 200) {
      setOrderList((prev) => prev.filter((order) => order.id !== id));
    }
  };

  return (
    <>
      <h2 className="title">Личный кабинет</h2>
      <div className="wrapper">
        <AccountForm setOrderList={setOrderList} />
        <div className="left-container">
          {orderList?.map((order) => (
            <AccountCard order={order} key={order.id} deleteHandler={deleteHandler} />
          ))}
        </div>
        <div className="left-container">
          <h3 className="title">Активные заказы</h3>
          {filterOrders?.map((order) => (
            <AccountCard order={order} key={order.id} deleteHandler={deleteHandler} />
          ))}
        </div>
      </div>
    </>
  );
}
