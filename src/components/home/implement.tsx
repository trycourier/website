import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Implement = styled.section`
  ${tw`md:flex py-24`}
`;

const ImplementText = styled.div`
  ${tw`md:w-1/2`}
  & h2 {
    ${tw`m-0 p-0 text-3xl mb-8`}
  }
  & p {
    ${tw`m-0 p-0 text-sm mt-4`}
  }
`;

const ImplementImageWrapper = styled.div`
  ${tw`md:w-1/2 text-right`}
`;

const ImplementComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "Code Block@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Implement>
      <ImplementText>
        <h2>Implement in Seconds</h2>
        <p>Our simple REST API takes only seconds to integrate, or you can leverage our Segment connector to automatically wire up existing events without writing any code.</p>
        <p>Even better: Courier’s Visual Editor lets you move the templates for all of your channels out of your codebase, so maintenance is a breeze!</p>
      </ImplementText>
      <ImplementImageWrapper>
        <Image image={img} />
      </ImplementImageWrapper>
    </Implement>
  );
};

export default ImplementComponent;
