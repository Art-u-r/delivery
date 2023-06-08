import React from 'react';

export default function AccountCard({ order, deleteHandler }) {
  return (
    <div className="card-container">
      <div className="content-wrapper">
        <div className="img-container">
          <img className="img-card" src={order.img} alt="img" />
        </div>
        <p className="card-text">{order.name}</p>
        <p className="card-text">{order.price}</p>
        <p className="card-text">{order.price - (order.price * order.discount) / 100}</p>
      </div>

      <button onClick={() => deleteHandler(order.id)} type="button" className="btn-card">
        Удалить
      </button>
    </div>
  );
}
