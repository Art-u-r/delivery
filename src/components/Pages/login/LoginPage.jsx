import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Form, Button, Col, FormGroup, Input, Label, Row, Spinner, Alert } from 'reactstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import AlertWarning from '../../UI/AlertWarning';
import AlertSuccess from '../../UI/AlertSuccess';

export default function LoginPage() {
  const [disabled, setDisabled] = useState(true);
  const [isEmpty, setIsEmpty] = useState('');
  const [anim, setAnim] = useState(false);
  const [success, setSuccess] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCse, setUpperCase] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setAnim(true);
      const data = Object.fromEntries(new FormData(e.target));
      const response = await axios.post('/api/auth/login', data);
      if (response.data === 'OK') {
        setSuccess('Успешная аутентификация');
        const timer = setTimeout(() => {
          window.location = '/';
        }, 2000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      const err = error?.response?.status;
      console.log(error);
      if (err === 400) {
        setAnim(false);
        setIsEmpty('Не все поля заполнены');
      }
      if (err === 408) {
        setAnim(false);
        setIsEmpty('Пользователь с таким email не существует');
      }
      if (err === 409) {
        setAnim(false);
        setIsEmpty('Пароль указан неверно');
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

  return (
    <div style={{ margin: '30px', paddingLeft: '80px', paddingRight: '150px' }}>
      <h4 style={{ paddingBottom: '70px' }}>Войти под своей учетной записью</h4>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email*</Label>
              <Input id="exampleEmail" name="email" type="email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Пароль*</Label>
              <Input
                ref={ref}
                onChange={changeHandler}
                id="examplePassword"
                name="password"
                type="password"
              />
              <Alert color="primary">
                <div style={{ display: 'flex' }}>
                  <p style={aStyle}>8,</p> <p style={bStyle}>a-z,</p>
                  <p style={cStyle}> A-Z,</p>
                  <p style={dStyle}> !?*-_,</p>
                  <p style={eStyle}> 0-9,</p>
                </div>
              </Alert>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={1} />
        </Row>
        <ReCAPTCHA
          sitekey="6LcVdHImAAAAANSNii7Zg0fi4zPqOT4M_BlHWjCY"
          onChange={reCapchaHandler}
          style={{ paddingBottom: '10px' }}
        />
        {(isEmpty && <AlertWarning isEmpty={isEmpty} />) ||
          (success && <AlertSuccess success={success} />)}
        {anim ? (
          <Button color="warning" disabled>
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
