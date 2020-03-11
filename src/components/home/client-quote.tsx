import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import Image from "../image";

const Quote = styled.div`
  ${tw`max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl`}
`;

const QuoteText = styled.div `
  ${tw`text-base text-gray-600 leading-normal`}
`;

const QuoteAuthor = styled.div``;
const QuoteImage = styled.div`
  ${tw`flex-shrink-0`}
`;

// const AbsImage = styled.img`
//   position: absolute;
//   top: ${(props: CardProps) => (props.desktop ? props.desktop.top : props.mobile.top)};
//   left: ${(props: CardProps) => (props.desktop ? props.desktop.left : props.mobile.left)};
// `

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
      <div className="flex flew-row">
        <QuoteText>
          We were building out a new team to focus entirely on our notification infrastructure when we found Courier. Now we support even more channels with one line of code – and our product managers & designers can design the templates without engineering help.
        </QuoteText>
        <QuoteAuthor>
          Eric Koslow, CTO & Co-Founder @ Lattice
        </QuoteAuthor>
      </div>
      <QuoteImage>
        <Image image={eric} />
      </QuoteImage>
    </Quote>
  );
};

export default QuoteComponent;
