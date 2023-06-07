import axios from 'axios';
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Form, Button, Col, FormGroup, Input, Label, Row, FormText } from 'reactstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import AlertExample from '../../../ui/Alert';

const MarkdownPreview = lazy(() => import('../../ui/CookiePolicy'));

export default function JoinPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isEmpty, setIsEmpty] = useState('');
  const [confirm, setConfirm] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen((prev) => !prev);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(e.target));
      console.log(data);
      const response = await axios.post('/api/auth/join', data);
    } catch (error) {
      const err = error.response.status;
      if (err === 400) {
        setIsEmpty('Не все поля заполнены');
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
      setConfirm('confirmation')
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
        <p>Я-КУРЬЕР</p>
        <input type="checkbox" onChange={handler} name={confirm} />
        <ReCAPTCHA
          sitekey="6LcVdHImAAAAANSNii7Zg0fi4zPqOT4M_BlHWjCY"
          onChange={reCapchaHandler}
          style={{ paddingBottom: '10px' }}
        />
        {isEmpty && <AlertExample isEmpty={isEmpty} />}
        <Button color="dark" disabled={disabled}>
          Подтвердить
        </Button>
      </Form>
    </div>
  );
}
