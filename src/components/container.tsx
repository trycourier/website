import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const Container = styled.div`
  ${tw`relative mx-auto max-w-5xl px-5 py-2 pt-0`}
`;

const ContainerDark = styled.div`
  background-color: #f8f8f8;
`;

const ContainerComponent: React.FC<{
  dark?: boolean;
}> = ({ dark, children }) => {
  if (dark) {
    return (
      <ContainerDark>
        <Container>{children}</Container>
      </ContainerDark>
    );
  } else {
    return <Container>{children}</Container>;
  }
};

export default ContainerComponent;
