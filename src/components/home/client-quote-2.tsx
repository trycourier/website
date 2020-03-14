import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "../image";
import NoCode from "./no-code";

import { Quote, Flex, QuoteBox, QuoteText } from "./client-quote";

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
    <Quote>
      <Flex>
        <QuoteBox>
          <Flex>
            <Image image={segment} />
            <QuoteText>
              Connect Segment and watch all of your events flow into Courier. Anyone can easily pick an event, add one or more notification channels, and use our Notification Design Studio to start delivering new notifications without engineers shipping any code.
            </QuoteText>
            <NoCode />
          </Flex>
        </QuoteBox>
      </Flex>
    </Quote>
  );
};

export default QuoteComponent2;
