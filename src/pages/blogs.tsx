import { graphql } from 'gatsby';
import React from 'react';
import { Container } from 'react-bulma-components';
import { Helmet } from 'react-helmet';
import { ComingSoon } from '../components/comingSoon/ComingSoon';
import { Layout } from '../components/layout/Layout';
import { IBlogs } from '../typings/pages/BlogsPage';

const Blogs = ({ data }: IBlogs) => {
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

export const BlogsQuery = graphql`
  query BlogsQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;

export default Blogs;