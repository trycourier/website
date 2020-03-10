import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Button from "./Button";
const GettingStarted = styled.section`
  ${tw`md:flex pt-24 pb-8 md:py-24 px-4 lg:px-0`}
`;

const GettingStartedText = styled.div`
  ${tw`md:w-1/2 md:pr-8`}
  & h2 {
    ${tw`m-0 p-0 text-3xl mb-8`}
  }
  & p {
    ${tw`m-0 p-0 text-sm mt-4`}
  }
`;

const GettingStartedCTAWrapper = styled.div`
  ${tw`md:w-1/2 text-right`}
`;

const GettingStartedComponent: React.FC = () => {

  return (
    <GettingStarted>
      <GettingStartedText>
        <h2>
          Getting started is easy!
          <br/>And free!
        </h2>
        <p>
         10,000 free notifications every month
        </p>
    
      </GettingStartedText>
      <GettingStartedCTAWrapper>
        <form>
          <Button primary>Google</Button>
          <Button secondary>GitHub</Button>
          <Button ghost>or email</Button>
        </form>
      </GettingStartedCTAWrapper>
    </GettingStarted>
  );
};

export default GettingStartedComponent;
