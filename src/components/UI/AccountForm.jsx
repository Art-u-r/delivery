import React from 'react';

export default function AccountForm() {
  //   const [form, setForm] = useState({
  //     name: '',
  //     img: '',
  //     price: '',
  //     discount: '',
  //   });

  //   const submitHandler = async (event) => {
  //     event.preventDefault();
  //     const response = await axios.post(`/api/account/order/${id}`);
  //   };

  return (
    <div className="form-container">
      <form className="account-form" action="/">
        <p className="form-text">Название заказа:</p>
        <input type="text" id="name" name="name" placeholder="Введите название блюда:" />

        <p className="form-text">Фото заказа:</p>

        {/* <input type="text" id="img" name="img" placeholder="Загрузите картинку:" /> */}
        <button className="btn-multer" type="button">
          Загрузите картинку
        </button>
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
