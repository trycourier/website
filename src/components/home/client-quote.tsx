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

const Quote = styled.div`
  ${tw`ml-auto absolute p-6 bg-white rounded-lg shadow-xl`}
  width: 50%;
  right: 64px;
`;

const QuoteText = styled.div `
  ${tw`text-base text-gray-600 leading-normal`}
  color: ${colors.textHeader};
`;

const QuoteAuthor = styled.div`
  ${tw`mt-3`}
  text-align: right;
  color: #73819B;
`;

const QuoteImage = styled.div`
  ${tw`flex-shrink-0`}
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
      <div className="flex">
        <div style={{position: "relative"}}>
          <Abs>
            <img src={quoteImg} />
          </Abs>
          <Abs2>
            <img src={quoteImg} />
          </Abs2>
          <div className="flex">
            <QuoteText>
              We were building out a new team to focus entirely on our notification infrastructure when we found Courier. Now we support even more channels with one line of code – and our product managers & designers can design the templates without engineering help.
              <QuoteAuthor>
                Eric Koslow, CTO & Co-Founder @ Lattice
              </QuoteAuthor>
            </QuoteText>
          </div>
        </div>
        <div style={{background: "red", width: "100px", height: "100px"}} /> 
      </div>
    </Quote>
  );
};

export default QuoteComponent;
