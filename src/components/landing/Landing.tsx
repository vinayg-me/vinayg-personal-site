import React from 'react';
import { Box, Columns, Section, Tile, Heading } from 'react-bulma-components';
import { ILanding } from '../../typings/components/Landing';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Landing = ({}: ILanding) => {
  const { Column } = Columns;
  const landingImageData = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "Vinay Linkedin New Enhanced.jpg" }) {
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
  const vinayImage = getImage(landingImageData.file);

  return (
    <Section className="landingSection">
      <Box className="landingBox">
        <Tile kind="ancestor" className="landingAncestor">
          <Tile kind="parent" className="landingParent">
            <Tile kind="child" className="landingChild">
              <Columns>
                <Column className="profilePicContainer" paddingless>
                  <div className="imageContainer">
                    {vinayImage && <GatsbyImage image={vinayImage} alt="Test" />}
                  </div>
                  <div className="headlineContainer">
                    <Heading
                      size={2}
                      renderAs="h1"
                      textColor="primary"
                      textWeight="bold"
                      textAlign="center"
                    >
                      Vinay Gopalaiah
                    </Heading>
                    <div className="socialIconsContainer">
                        <p>Follow Me: <span></span></p>
                    </div>
                    <Heading size={3} renderAs="h2" textColor="accent" textAlign="center">
                      Principal Software Engineer @ Codeparva Technologies Pvt Ltd
                    </Heading>
                  </div>
                  <Columns>
                    <Column className="aboutDescriptionColumn">
                      <Heading size={3} renderAs="p" textColor="primary">
                        I am a software engineer with a passion for building scalable, maintainable
                        and secure applications. I have worked on a wide range of technologies and
                        have a proven track record of delivering high quality products to customers.
                      </Heading>
                      <Heading size={3} renderAs="p" textColor="primary">
                        7+ years of experience in software development, architecting and delivering
                        high quality websites, mobile applications and dashboards in various
                        industries.
                      </Heading>
                      <Heading size={3} renderAs="p" textColor="primary">
                        A full stack developer, well versed with modern web technologies and frameworks, including React,
                        Node, GraphQL, Angular, Django. I love to learn new technologies and am
                        always looking to improve my skills.
                      </Heading>
                    </Column>
                  </Columns>
                </Column>
              </Columns>
            </Tile>
          </Tile>
        </Tile>
      </Box>
    </Section>
  );
};
