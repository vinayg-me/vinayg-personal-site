import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Heading } from 'react-bulma-components';
import { IComingSoon } from '../../typings/components/ComingSoon';

export const ComingSoon = ({}: IComingSoon) => {
  const wipImageData = useStaticQuery(graphql`
    query wipImageQuery {
      file(relativePath: { eq: "WorkInProgress.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 225
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            transformOptions: { cropFocus: CENTER }
          )
        }
      }
    }
  `);
  const wipImage = getImage(wipImageData.file);
  return (
    <div className="ComingSoonContainer">
      <Heading renderAs="h2" size={2} textAlign="center" textColor="white">
        WIP - Work In Progress
      </Heading>
      <div className="imageContainer">
        {wipImage && <GatsbyImage image={wipImage} alt="Page Under Contruction Image" />}
      </div>
    </div>
  );
};
