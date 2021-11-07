import * as React from 'react';
import { Container } from 'react-bulma-components';
import { Landing } from '../components/landing/Landing';
import { Layout } from '../components/layout/Layout';
import '../styles/_all.scss';

// markup
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div className="mainBody">
          <Container>
            <Landing />
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
