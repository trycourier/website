import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Providers = styled.div`
  ${tw`py-8 md:py-24 md:pb-12`}
`;

const ProvidersText = styled.div`
  ${tw`text-center`}
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
    color: #2f3e5a;
  }
`;

const ProvidersImageWrapper = styled.div`
`;

const ProvidersComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "Provider Logos@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Providers>
      <ProvidersText>
        <h2>Connect any provider</h2>
      </ProvidersText>
      <ProvidersImageWrapper>
        <Image image={img} />
      </ProvidersImageWrapper>
    </Providers>
  );
};

export default ProvidersComponent;