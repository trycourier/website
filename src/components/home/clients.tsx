import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Image from "../image";
import colors from "../../colors";

const Clients = styled.div`
  ${tw`py-8 md:py-24 md:pb-12`}
  background: ${colors.white};
`;

const ClientsText = styled.div`
  ${tw`text-center`}
  & h2 {
    ${tw`m-0 p-0 text-3xl`}
    color: #2f3e5a;
  }
`;

const ClientsImageWrapper = styled.div``;
const ClientQuote = styled.div`
  ${tw`max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl`}
`;

const ClientQuoteText = styled.div `
  ${tw`text-base text-gray-600 leading-normal`}
`;

const ClientQuoteAuthor = styled.div``;
const ClientQuoteImage = styled.div`
  ${tw`flex-shrink-0`}
`;

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
        <h2>Trusted by</h2>
      </ClientsText>
      <ClientsImageWrapper>
        <Image image={img} />
      </ClientsImageWrapper>
      <ClientQuote>
        <ClientQuoteText>
          We were building out a new team to focus entirely on our notification infrastructure when we found Courier. Now we support even more channels with one line of code – and our product managers & designers can design the templates without engineering help.
        </ClientQuoteText>
        <ClientQuoteAuthor>
          Eric Koslow, CTO & Co-Founder @ Lattice
        </ClientQuoteAuthor>
        <ClientQuoteImage>
          <Image image={img} />
        </ClientQuoteImage>
      </ClientQuote>
    </Clients>
  );
};

export default ClientsComponent;
