import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
  Spinner,
} from 'reactstrap';

export default function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [modal, setModal] = useState(false);
  const [modalDeal, setModalDeal] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleDeal = () => setModalDeal(!modalDeal);

  const [anim, setAnim] = useState(false);

  const submitHandler = async (e) => {
    await fetch('/auth/sign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
  };
  const clickHandler = () => {
    setAnim(true);
    setTimeout(() => {
      window.location = '/';
    }, 1300);
  };
  return (
    <div>
      <Navbar color="warning" light expand container>
        <NavbarBrand href="/" className="me-auto">
          Delivery-kebab
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink onClick={toggle} style={{ cursor: 'pointer' }}>
                Войти
              </NavLink>
              <Modal isOpen={modal} toggle={toggle}>
                <form onSubmit={submitHandler}>
                  <ModalHeader toggle={toggle}>Войти как покупатель</ModalHeader>
                  <ModalBody>
                    <div>
                      <FormGroup floating>
                        <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
                        <Label for="exampleEmail">Email</Label>
                      </FormGroup>{' '}
                      <FormGroup floating>
                        <Input
                          id="examplePassword"
                          name="password"
                          placeholder="Password"
                          type="password"
                        />
                        <Label for="examplePassword">Password</Label>
                      </FormGroup>{' '}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    {anim ? (
                      <Button color="dark" disabled>
                        <Spinner size="sm">Loading...</Spinner>
                        <span> Loading</span>
                      </Button>
                    ) : (
                      <Button color="dark" onClick={clickHandler} outline>
                        Войти
                      </Button>
                    )}{' '}
                    <Button color="secondary" onClick={toggle} outline>
                      Закрыть
                    </Button>
                  </ModalFooter>
                </form>
              </Modal>
            </NavItem>
            <NavItem>
              <NavLink href="/auth/join">Зарегистрироваться</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
