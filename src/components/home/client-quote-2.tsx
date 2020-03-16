import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "../image";
import NoCode from "./no-code";

import { Flex, Quote, QuoteBox, QuoteText, Rel } from "./client-quote";

const QuoteComponent2: React.FC = () => {
  const { segment } = useStaticQuery(graphql`
    query {
      segment: file(relativePath: { eq: "logo-segment@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Quote style={{ top: "-64px" }}>
      <Flex>
        <QuoteBox>
          <Flex>
            <Rel style={{ flex: 1, marginTop: "24px" }}>
              <Image image={segment} />
            </Rel>
            <QuoteText style={{ flex: 5 }}>
              Connect Segment and watch all of your events flow into Courier.
              Anyone can easily pick an event, add one or more notification
              channels, and use our Notification Design Studio to start
              delivering new notifications without engineers shipping any code.
            </QuoteText>
            <Rel style={{ flex: 1 }}>
              <NoCode />
            </Rel>
          </Flex>
        </QuoteBox>
      </Flex>
    </Quote>
  );
};

export default QuoteComponent2;
