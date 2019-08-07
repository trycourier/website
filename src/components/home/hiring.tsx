import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import BackgroundImage from 'gatsby-background-image';

import colors from "../../colors";

const Hiring = styled.section`
  ${tw`py-24 mx-auto text-center`}
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
    color: #2f3e5a;
  }
  & p {
    ${tw`text-base md:w-1/2 mx-auto`}
  }
  & a {
    ${tw`no-underline text-sm border border-solid py-3 px-8 rounded-full`}
    background-color: ${colors.berry};
    color: white;
    line-height: 60px;
  }
`;

const HiringComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "city@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 460) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const bgStyle = {
    backgroundSize: '320px 235px',
    backgroundPosition: 'center right'
  };

  return (
    <Hiring>
      <BackgroundImage fluid={img.childImageSharp.fluid} style={bgStyle}>
        <h2>We're hiring!</h2>
        <p>We're all in this together. We believe in honesty, figuring things out as a team, and placing high standards on ourselves. We're headquartered in the heart of San Francisco, with easy acccess to BART, CalTrain, and Muni.</p>
        <a target="_blank" href="https://jobs.lever.co/trycourier">I'm intrigued!</a>
      </BackgroundImage>
    </Hiring>
  );
}

export default HiringComponent;