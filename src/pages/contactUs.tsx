import { graphql } from 'gatsby';
import React, {  } from 'react';
import { Container } from 'react-bulma-components';
import { Helmet } from 'react-helmet';
import { ComingSoon } from '../components/comingSoon/ComingSoon';
import { Layout } from '../components/layout/Layout';
import { IContactUs } from '../typings/pages/ContactUsPage';

const ContactUs = ({ data }: IContactUs) => {
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
            <ComingSoon />
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export const ContactUsQuery = graphql`
  query ContactUsQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;

export default ContactUs;
