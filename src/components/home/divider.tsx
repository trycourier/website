import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image, { GatsbyImage } from "../image";

// type DividerProps = {
//   top?: boolean;
// }
//   ${(props: DividerProps) => (props.top ? `bottom: -4px;` : `top: 0px;`)}

const DividerWrapper = styled.div`
  ${tw`absolute`}
  bottom: -4px;
  width: 100%;
  ${props => props.style}
`;

const DividerComponent: React.FC<{
  image: GatsbyImage;
}> = ({ image }) => {
  return (
    <DividerWrapper>
      <Image image={image} />
    </DividerWrapper>
  );
};

export default DividerComponent;
