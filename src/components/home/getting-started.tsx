import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import GettingStartedContent from "../shared/getting-started";

const GettingStarted = styled.section`
  ${tw`md:flex pt-24 pb-8 md:pt-24 md:pb-12 px-4 lg:px-0`}
`;

const GettingStartedComponent: React.FC = () => {
  return (
    <GettingStarted>
      <GettingStartedContent />
    </GettingStarted>
  );
};

export default GettingStartedComponent;
