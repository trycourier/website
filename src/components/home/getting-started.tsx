import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

import RegistrationCTA from "./registration-cta";
const GettingStarted = styled.section`
  ${tw`md:flex pt-24 pb-8 md:pt-24 md:pb-12 px-4 lg:px-0`}
`;

const GettingStartedText = styled.div`
  ${tw`md:w-1/2 md:pr-8`}
  & h2 {
    ${tw`m-0 p-0 text-3xl md:text-4xl mb-5`}
    font-family: "Proxima Nova", sans-serif;
    color: ${colors.textPrimary};
    font-weight: 600;
  }
  & p {
    ${tw`m-0 p-0 text-xl mt-2`}
  }
`;

const GettingStartedCTAWrapper = styled.div`
  ${tw`md:w-1/2 text-right md:mt-16`}
  & form {
    background-color: ${colors.berryWhite};
    max-width: 455px;
  }
  & button.ghost {
    color: ${colors.textPrimary};
  }
`;

const GettingStartedComponent: React.FC = () => {
  return (
    <GettingStarted>
      <GettingStartedText>
        <h2>
          Getting started is easy!
          <br />
          And free!
        </h2>
        <p>10,000 free notifications every month</p>
      </GettingStartedText>
      <GettingStartedCTAWrapper>
        <RegistrationCTA footer/>
      </GettingStartedCTAWrapper>
    </GettingStarted>
  );
};

export default GettingStartedComponent;
