import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Col, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import AlertWarning from '../../../ui/AlertWarning';
import AlertSuccess from '../../../ui/AlertSuccess';

export default function JoinPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isEmpty, setIsEmpty] = useState('');
  const [confirm, setConfirm] = useState('');
  const [anim, setAnim] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen((prev) => !prev);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setAnim(true);
      const data = Object.fromEntries(new FormData(e.target));
      const response = await axios.post('/api/auth/join', data);
      if (response.data === 'OK') {
        setSuccess('Регистрация прошла успешно');
        const timer = setTimeout(() => {
          window.location = '/';
        }, 2000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      const err = error?.response?.status;
      if (err === 400) {
        setAnim(false);
        setIsEmpty('Не все поля заполнены');
      }
      if (err === 406) {
        setAnim(false);
        setIsEmpty('Пользователь с таким email уже существует');
      }
    }
  };
  const reCapchaHandler = (value) => {
    if (value) {
      const timer = setTimeout(() => {
        setDisabled(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  };
  const handler = (e) => {
    if (e.target.checked) {
      setConfirm('confirmation');
    }
  };
  return (
    <div style={{ margin: '30px', paddingLeft: '80px', paddingRight: '150px' }}>
      <h4 style={{ paddingBottom: '70px' }}>Зарегистрироваться</h4>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="text">Имя*</Label>
              <Input id="exampleText" name="name" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email*</Label>
              <Input id="exampleEmail" name="email" type="email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Пароль*</Label>
              <Input id="examplePassword" name="password" type="password" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={1} />
        </Row>
        <p>Я - Курьер</p>
        <input type="checkbox" onChange={handler} name={confirm} />
        <ReCAPTCHA
          sitekey="6LcVdHImAAAAANSNii7Zg0fi4zPqOT4M_BlHWjCY"
          onChange={reCapchaHandler}
          style={{ paddingBottom: '10px' }}
        />
        {(isEmpty && <AlertWarning isEmpty={isEmpty} />) ||
          (success && <AlertSuccess success={success} />)}
        {anim ? (
          <Button color="dark" disabled>
            <Spinner size="sm">Loading...</Spinner>
            <span> Loading</span>
          </Button>
        ) : (
          <Button color="warning" disabled={disabled}>
            Подтвердить
          </Button>
        )}
      </Form>
    </div>
  );
}
