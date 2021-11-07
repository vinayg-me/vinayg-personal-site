import { graphql } from 'gatsby';
import * as React from 'react';
import { Container } from 'react-bulma-components';
import { Helmet } from 'react-helmet';
import { Landing } from '../components/landing/Landing';
import { Layout } from '../components/layout/Layout';
import '../styles/_all.scss';
import { IIndexPage } from '../typings/pages/IndexPage';

// markup
const IndexPage = ({ data }: IIndexPage) => {
  const {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
  } = data;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content={description} />
      </Helmet>
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

export const IndexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;

export default IndexPage;
