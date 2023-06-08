import React from 'react';

export default function AccountForm({ setOrderList }) {
  //   const [form, setForm] = useState({
  //     name: '',
  //     img: '',
  //     price: '',
  //     discount: '',
  //   });

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('discount', formData.discount);
    data.append('destination', formData.destination);
    data.append('img', formData.img);
    console.log('formData', formData);
    const response = await fetch(`/api/account/order/`, {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body: data,
    });
    console.log('response', response.data);
    // if (response.status === 200) {
    // console.log('response', response);
    setOrderList((prev) => [...prev, response.data]);
    // alert('Заказ добавлен');
    // }
  };

  return (
    <div className="form-container">
      <form className="account-form" onSubmit={submitHandler} encType="multipart/form-data">
        <p className="form-text">Название заказа:</p>
        <input type="text" id="name" name="name" placeholder="Введите название блюда:" />

        <p className="form-text">Фото заказа:</p>

        <input type="file" id="img" name="img" placeholder="Загрузите картинку:" />

        {/* <button className="btn-multer" type="button">
          Загрузите картинку
        </button> */}
        <p className="form-text">Стоимость заказа:</p>
        <input type="text" id="price" name="price" placeholder="Введите стоимость заказа:" />
        <p className="form-text"> Размер скидки:</p>
        <input type="text" id="discount" name="discount" placeholder="Введите размер скидки:" />
        <p className="form-text"> Адрес заказа:</p>
        <input type="text" id="discount" name="destination" placeholder="Введите адрес заказа:" />
        <button type="submit" className="btn-form">
          Добавить новый заказ:
        </button>
      </form>
    </div>
  );
}
