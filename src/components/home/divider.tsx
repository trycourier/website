import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image, { GatsbyImage } from "../image";

const DividerWrapper = styled.div`
  ${tw`absolute`}
  width: 100%;
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
