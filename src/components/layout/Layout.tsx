import React from 'react';
import { ILayout } from '../../typings/components/Layout';
import { NavBar } from '../navbar/NavBar';



export const Layout = ({}: ILayout) => {
  return (
    <div className="Layoutcontainer">
      <NavBar />
    </div>
  );
};
