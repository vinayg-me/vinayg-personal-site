import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { Container, Navbar } from 'react-bulma-components';
import { INavBar } from '../../typings/components/NavBar';


export const NavBar = ({}: INavBar) => {
  const { Brand, Burger, Container: NavBarContainer, Item, Menu } = Navbar;
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar backgroundColor="primary-light" active={showMenu}>
      <Container>
        <Brand>
          <Item renderAs="a" href="#">
            <StaticImage
              src="../../images/3784_Vinay Gopalaiah_01.png"
              alt="Vinay Gopalaiah Brand Logo"
              width={80}
              height={80}
              placeholder='blurred'
              layout='fixed'
            />
          </Item>
          <Burger onClick={handleClick} />
        </Brand>
        <Menu>
          <NavBarContainer>
            <Item className="has-text-primary" renderAs={Link} to="/">
              About Me
            </Item>
            <Item renderAs={Link} to="/" className="has-text-primary">
              Projects
            </Item>
            <Item renderAs={Link} to="/" className="has-text-primary">
              Blogs
            </Item>
            <Item renderAs={Link} to="/" className="has-text-primary">
              Contact
            </Item>
          </NavBarContainer>
        </Menu>
      </Container>
    </Navbar>
  );
};
