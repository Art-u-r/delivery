
import axios from 'axios';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


export default function NavBar({ user }) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await axios('/api/auth/logout');
      window.location = '/';
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar color="warning" light expand container>
        <NavbarBrand href="/" className="me-auto">
          Delivery-kebab
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          {(user && user?.isCourier && (
            <>
              <p style={{ paddingLeft: '30px' }}> Здравствуй, {user.name}</p>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/privat">Личный кабинет</NavLink>
                </NavItem>
                <NavLink onClick={logoutHandler} style={{ cursor: 'pointer' }}>
                  Выйти
                </NavLink>
              </Nav>
            </>
          )) ||
            (user && !user?.isCourier && (
              <>
                <p style={{ paddingLeft: '30px' }}> Здравствуй, {user.name}</p>
                <NavLink onClick={logoutHandler} style={{ cursor: 'pointer' }}>
                  Выйти
                </NavLink>
              </>
            )) || (
              <Nav navbar>
                <NavItem>
                  <NavLink href="/auth/login" style={{ cursor: 'pointer' }}>
                    Войти
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/auth/join">Зарегистрироваться</NavLink>
                </NavItem>
              </Nav>
            )}
        </Collapse>
      </Navbar>
    </div>
  );
}
