import React from 'react';

export default function AccountForm() {
  return (
    <div className="form-container">
      <form className="account-form" action="/">
        <p className="form-text">Название заказа:</p>
        <input type="text" id="name" name="name" placeholder="Введите название блюда:" />
        <p className="form-text">Фото заказа:</p>
        <input type="text" id="img" name="img" placeholder="Загрузите картинку:" />
        <p className="form-text">Стоимость заказа:</p>
        <input type="text" id="price" name="price" placeholder="Введите стоимость заказа:" />
        <p className="form-text"> Размер скидки:</p>
        <input type="text" id="discount" name="discount" placeholder="Введите размер скидки:" />
        <button type="submit" className="btn-form">
          Добавить новый заказ:
        </button>
      </form>
    </div>
  );
}
