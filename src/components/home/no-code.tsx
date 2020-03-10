import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Image from "../image";

// const noCodeUrl = "src/images/General Website Assets/no-code-stamp@2x.png";

const NoCode = styled.div`
  background: rgba(0,255,0,0.5);
  height: 30px;
  width: 130px;
  transform: rotate(-25deg);
`
const NoCodeComponent: React.FC = () => {
  const { img } = useStaticQuery(graphql`
  query {
    img: file(relativePath: { eq: "route-illustration@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 460) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `);
  return (
    <NoCode>
      <Image image={img} />
    </NoCode>
  )
}

export default NoCodeComponent
