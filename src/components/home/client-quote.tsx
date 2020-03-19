import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Image from "../image";

import quoteImg from "../../images/quotes-start.svg";

import { Desktop, Mobile } from "../container";

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
  ${tw`flex flex-col sm:flex-row`}
`

export const Rel = styled.div`
  ${tw`relative mx-4 justify-center`}
`

export const Quote = styled.div`
  ${tw`mx-8 sm:ml-auto absolute w-3/4 md:w-full p-6 bg-white shadow-xl`}
  border-radius: 20px;
  top: 64px;
  @media(max-width: 640px){
    top: 0px;
  }
  z-index: 5;
`;

export const QuoteBox = styled(Rel)`
  ${tw`relative`}
`;

export const QuoteText = styled.div `
  ${tw`text-base text-gray-700 leading-normal`}
  color: ${colors.textPrimary};
`;

const QuoteAuthor = styled.div`
  ${tw`mt-3`}
  text-align: right;
  color: #73819B;
`;

const QuoteImage = styled.div`
  width: 260px;
  @media(max-width: 640px){
    width: 100px;
    margin: 4px auto;
  }
`;

const ImageBorder = styled.div`
  border: 6px solid #FFF;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.16);

`;

const QuoteComponent: React.FC = () => {
  const { eric } = useStaticQuery(graphql`
    query {
      eric: file(relativePath: { eq: "clients/eric-headshot@2x.jpg" }) {
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
      <Desktop>
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
            <ImageBorder>
              <Image image={eric} />
            </ImageBorder>
          </QuoteImage>
        </Flex>
      </Desktop>
      <Mobile>
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
          <ImageBorder>
            <Image image={eric} />
          </ImageBorder>
        </QuoteImage>
      </Mobile>
    </Quote>
  );
};

export default QuoteComponent;
