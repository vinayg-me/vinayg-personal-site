import React from 'react';
import { ILayout } from '../../typings/components/Layout';
import { FooterComponent } from '../footer/Footer';
import { NavBar } from '../navbar/NavBar';

export const Layout = ({ children }: ILayout) => {
  return (
    <div className="LayoutContainer">
      <NavBar />
      <div className="LayoutContent">{children}</div>
      <FooterComponent />
    </div>
  );
};
