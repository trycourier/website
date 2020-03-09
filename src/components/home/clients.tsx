import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "../image";

const Clients = styled.div`
  ${tw`py-8 md:py-24 md:pb-12`}
`;

const ClientsText = styled.div`
  ${tw`text-center`}
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
    color: #2f3e5a;
  }
`;

const ClientsImageWrapper = styled.div``;

const ClientsComponent: React.FC = () => {
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
    <Clients>
      <ClientsText>
        <h2>Connect any Client</h2>
      </ClientsText>
      <ClientsImageWrapper>
        <Image image={img} />
      </ClientsImageWrapper>
    </Clients>
  );
};

export default ClientsComponent;
