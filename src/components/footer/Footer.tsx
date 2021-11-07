import React from 'react';
import { Container, Footer } from 'react-bulma-components';
import { IFooter } from '../../typings/components/Footer';

export const FooterComponent = ({}: IFooter) => {
  return (
    <Footer backgroundColor="primary-light">
      <Container>
        <p className="has-text-primary has-text-centered">
          <small>&copy; Copyright 2021, Vinay Gopalaiah</small>
        </p>
      </Container>
    </Footer>
  );
};
