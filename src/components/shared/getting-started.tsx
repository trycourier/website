import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import colors from "../../colors";
import RegistrationCTA from "../shared/registration-cta";

const GettingStartedText = styled.div`
  ${tw`md:w-1/2 md:pr-8`}
  & h2 {
    ${tw`m-0 p-0 text-3xl md:text-4xl mb-5`}
    font-family: "Proxima Nova", sans-serif;
    color: ${colors.textPrimary};
    font-weight: 600;
    @media (max-width: 768px) {
      font-family: "Bebas Neue", sans-serif;
      font-weight: 400;
    }
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

const GettingStartedContent: React.FC = () => {
  return (
    <>
      <GettingStartedText>
        <h2>
          Getting started is easy!
          <br />
          And free!
        </h2>
        <p>10,000 free notifications every month</p>
      </GettingStartedText>
      <GettingStartedCTAWrapper>
        <RegistrationCTA footer={true} />
      </GettingStartedCTAWrapper>
    </>
  );
};

export default GettingStartedContent;
