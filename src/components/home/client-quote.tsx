import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Image from "../image";

import quoteImg from "../../images/quotes-start.svg";

import colors from "../../colors";

const Abs = styled.div`
  ${tw`absolute`}
`;

const Abs2 = styled(Abs)`
  bottom: 0px;
  right: 0px;
  transform: rotate(180deg);
`;

export const Flex = styled.div`
  ${tw`flex`}
`

export const Rel = styled.div`
  ${tw`relative mx-4 justify-center`}
`

export const Quote = styled.div`
  ${tw`ml-auto absolute w-50 p-6 bg-white rounded-lg shadow-xl`}
  top: -64px;
`;

export const QuoteBox = styled(Rel)`
  ${tw`relative`}
`;

export const QuoteText = styled.div `
  ${tw`text-base text-gray-600 leading-normal`}
  color: ${colors.textPrimary};
`;

const QuoteAuthor = styled.div`
  ${tw`mt-3`}
  text-align: right;
  color: #73819B;
`;

const QuoteImage = styled.div`
  width: 50%;
  height: 100px;
`;

const QuoteComponent: React.FC = () => {
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

  return (
    <Quote>
      <Flex>
        <QuoteBox>
          <Abs>
            <img src={quoteImg} />
          </Abs>
          <Abs2>
            <img src={quoteImg} />
          </Abs2>
          <Flex>
            <QuoteText>
              We were building out a new team to focus entirely on our notification infrastructure when we found Courier. Now we support even more channels with one line of code – and our product managers & designers can design the templates without engineering help.
              <QuoteAuthor>
                Eric Koslow, CTO & Co-Founder @ Lattice 
              </QuoteAuthor>
            </QuoteText>
          </Flex>
        </QuoteBox>
        <QuoteImage>
          <Image image={eric} />
        </QuoteImage>
      </Flex>
    </Quote>
  );
};

export default QuoteComponent;
