import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "../image";
import NoCode from "./no-code";

import styled from "@emotion/styled";
import { Desktop, Mobile } from "../container";
import { Flex, Quote, QuoteBox, QuoteText, Rel } from "./client-quote";

const StyledQuote = styled(Quote)`
  top: -32px;
  @media (max-width: 768px) {
    top: -96px;
  }
`;

const StyledNoCode = styled(NoCode)`
  left: 165px;
  top: -10px;
  transform: rotate(45deg);
`;

const ClientImage = styled(Rel)`
  flex: 1;
  max-width: 160px;
  margin: 32px auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px auto 24px auto;
  }
`;

const QuoteComponent2: React.FC = () => {
  const { segment } = useStaticQuery(graphql`
    query {
      segment: file(relativePath: { eq: "logo-segment@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <StyledQuote>
      <Desktop>
        <Flex>
          <QuoteBox>
            <Flex>
              <ClientImage>
                <Image image={segment} />
              </ClientImage>
              <QuoteText style={{ marginLeft: 16, flex: 5 }}>
                Connect Segment and watch all of your events flow into Courier.
                Anyone can easily pick an event, add one or more notification
                channels, and use our Notification Design Studio to start
                delivering new notifications without engineers shipping any
                code.
              </QuoteText>
              <Rel style={{ flex: 1 }}>
                <NoCode />
              </Rel>
            </Flex>
          </QuoteBox>
        </Flex>
      </Desktop>
      <Mobile>
        <QuoteBox>
          <ClientImage>
            <Image image={segment} />
          </ClientImage>
          <QuoteText style={{ flex: 5 }}>
            Connect Segment and watch all of your events flow into Courier.
            Anyone can easily pick an event, add one or more notification
            channels, and use our Notification Design Studio to start delivering
            new notifications without engineers shipping any code.
          </QuoteText>
        </QuoteBox>
      </Mobile>
    </StyledQuote>
  );
};

export default QuoteComponent2;
