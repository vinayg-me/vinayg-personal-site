import React from 'react';
import { Container, Footer } from 'react-bulma-components';
import { IFooter } from '../../typings/components/Footer';

export const FooterComponent = ({}: IFooter) => {
  return (
    <Footer backgroundColor="primary-light">
      <Container>
        <p className='has-text-primary'>Developed by Vinay G</p>
      </Container>
    </Footer>
  );
};
