import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image, { GatsbyImage } from "../image";

const GlyphOuterWrapper = styled.div`
  ${tw`absolute`}
  top: -75px;
  width: 100%;
`;
const GlyphInnerWrapper = styled.div`
  ${tw`mx-auto`}
  max-width: 150px;
`;

const GlyphComponent: React.FC<{
  image: GatsbyImage;
}> = ({ image }) => {
  return (
    <GlyphOuterWrapper>
      <GlyphInnerWrapper>
        <Image image={image} />
      </GlyphInnerWrapper>
    </GlyphOuterWrapper>
  );
};

export default GlyphComponent;
