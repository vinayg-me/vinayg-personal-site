import React from 'react';
import { Box, Columns, Section, Heading, Icon } from 'react-bulma-components';
import { ILanding } from '../../typings/components/Landing';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ReactChild } from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

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

  const TextContent = ({ children }: { children: ReactChild }) => {
    return (
      <Heading
        tablet={{
          textSize: 4,
        }}
        mobile={{
          textSize: 4,
        }}
        desktop={{
          textSize: 3,
        }}
        renderAs="p"
        textColor="primary"
      >
        {children}
      </Heading>
    );
  };

  return (
    <Section className="landingSection">
      <Box className="landingBox">
        <Columns>
          <Column className="profilePicContainer" paddingless>
            <div className="imageContainer">
              {vinayImage && <GatsbyImage image={vinayImage} alt="Test" />}
            </div>
            <div className="headlineContainer">
              <Heading
                renderAs="h1"
                textColor="primary"
                textWeight="bold"
                textAlign="center"
                tablet={{
                  textSize: 3,
                }}
                mobile={{
                  textSize: 3,
                }}
                desktop={{
                  textSize: 2,
                }}
              >
                Vinay Gopalaiah
              </Heading>
              <div className="socialIconsContainer">
                <IconContext.Provider
                  value={{
                    size: '2rem',
                  }}
                >
                  <Icon size="large">
                    <a
                      href="https://www.linkedin.com/in/vinaygopalaiah/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow me on Linkedin"
                    >
                      <FaLinkedin />
                    </a>
                  </Icon>
                  <Icon size="large">
                    <a
                      href="https://twitter.com/gopalaiahvinay"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow me on Twitter"
                    >
                      <FaTwitter />
                    </a>
                  </Icon>
                  <Icon size="large">
                    <a
                      href="https://www.instagram.com/gopalvinay/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow me on Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </Icon>
                  <Icon size="large">
                    <a
                      href="https://github.com/vinayg-me"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow me on Github"
                    >
                      <FaGithub />
                    </a>
                  </Icon>
                </IconContext.Provider>
              </div>
              <Heading
                tablet={{
                  textSize: 4,
                }}
                mobile={{
                  textSize: 4,
                }}
                desktop={{
                  textSize: 3,
                }}
                renderAs="h2"
                textAlign="center"
                textColor="light-blue"
              >
                Principal Software Engineer @{' '}
                <a
                  className="cp-link"
                  href="https://codeparva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="CodeParva Technologies"
                >
                  CodeParva Technologies Pvt Ltd
                </a>
              </Heading>
            </div>
            <Columns>
              <Column className="aboutDescriptionColumn">
                <TextContent>
                  I am a Principal Software Engineer with an experience of 7+ years in software
                  development, architecting and delivering high quality websites and mobile
                  applications (Hybrid) in various industries. I have a proven track record of
                  delivering high quality products to customers. I have extensively worked with
                  Small to Medium sized companies and enjoyed the challenges of building scalable,
                  performant and cost effective solutions.
                </TextContent>
                <TextContent>
                  Well versed with modern web technologies and frameworks, including React, Node,
                  GraphQL, Angular, Django. I love to learn new technologies and am always looking
                  to improve my skills.
                </TextContent>
                <TextContent>
                  Outside work, I love to read self help books, technical articles, watch movies,
                  play board games and love playing outdoor sports like Football, Cricket &
                  Volleyball. I enjoy taking occassional road trips to explore new places & local
                  culture.
                </TextContent>
                <TextContent>
                  I like mentoring and helping others learn new skills and technologies. Please feel
                  free to reach out to me if you have any questions or want to work together.
                </TextContent>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Box>
    </Section>
  );
};
