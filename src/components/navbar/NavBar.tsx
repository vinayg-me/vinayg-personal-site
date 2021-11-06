import React from 'react';
import { Container, Navbar } from 'react-bulma-components';
import { INavBar } from '../../typings/components/NavBar';

export const NavBar = ({}: INavBar) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item href="#">
              <Navbar.Link>First</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="#">Subitem 1</Navbar.Item>
                <Navbar.Item href="#">Subitem 2</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item href="#">After divider</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="#">Second</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container>
            <Navbar.Item href="#">At the end</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};
