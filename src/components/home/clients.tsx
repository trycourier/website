import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Container from "../container";
import Image from "../image";
import colors from "../../colors";
import lattice from "../../images/clients/lattice.svg";
import blissfully from "../../images/clients/blissfully.svg";
import eatgeek from "../../images/clients/eatgeek.svg";
import hutsy from "../../images/clients/hutsy.svg";
import savvy from "../../images/clients/savvy.svg";
import aarida from "../../images/clients/aarida.svg";
import beacons from "../../images/clients/beacons.svg";

const Clients = styled(Container)`
  ${tw`py-8 md:py-24 md:pb-12`}
  background: ${colors.white};
`;

const ClientsText = styled.div`
  ${tw`text-left`}
  & h4 {
    ${tw`m-0 p-0 text-3xl`}
    color: ${colors.textHeader};
  }
`;

const ClientsImageWrapper = styled.div`
  ${tw`py-8 md:py-24 md:pb-12`}
  background: ${colors.white};
`;
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

const ClientImage = styled.img`
  position: absolute;
  opacity: 0.6;
`

const ClientsComponent: React.FC = () => {
  
  const { eric } = useStaticQuery(graphql`
    query {
      eric: file(relativePath: { eq: "clients/eric@2x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  // const { lattice, blissfully, eatgeek, hutsy, savvy, aarida, beacons } = useStaticQuery(graphql`
  //   query {
  //     lattice: file(relativePath: { eq: "clients/lattice@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 120) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     blissfully: file(relativePath: { eq: "clients/blissfully@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 120) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     eatgeek: file(relativePath: { eq: "clients/eatgeek@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 120) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     hutsy: file(relativePath: { eq: "clients/hutsy@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 120) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     savvy: file(relativePath: { eq: "clients/savvy@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 120) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     aarida: file(relativePath: { eq: "clients/aarida@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 120) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     beacons: file(relativePath: { eq: "clients/beacons@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 120) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Clients>
      <ClientsText>
        <h4>Trusted by</h4>
      </ClientsText>
      <ClientsImageWrapper>
        <ClientImage src={lattice} />
        <ClientImage src={blissfully} />
        <ClientImage src={eatgeek} />
        <ClientImage src={hutsy} />
        <ClientImage src={savvy} />
        <ClientImage src={aarida} />
        <ClientImage src={beacons} />
      </ClientsImageWrapper>
      <ClientQuote>
        <ClientQuoteText>
          We were building out a new team to focus entirely on our notification infrastructure when we found Courier. Now we support even more channels with one line of code – and our product managers & designers can design the templates without engineering help.
        </ClientQuoteText>
        <ClientQuoteAuthor>
          Eric Koslow, CTO & Co-Founder @ Lattice
        </ClientQuoteAuthor>
        <ClientQuoteImage>
          <Image image={eric} />
        </ClientQuoteImage>
      </ClientQuote>
    </Clients>
  );
};

export default ClientsComponent;
