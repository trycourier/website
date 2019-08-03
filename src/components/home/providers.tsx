import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Image from "../image";

const Providers = styled.div`
`;

const ProvidersText = styled.div`
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