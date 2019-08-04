import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const Container = styled.div`
  ${tw`relative mx-auto max-w-5xl`}
`;

const ContainerDark = styled.div`
  background-color: #f8f8f8;
`;

const ContainerComponent: React.FC<{
  id?: string;
  dark?: boolean;
}> = ({ id, dark, children }) => {
  if (dark) {
    return (
      <ContainerDark>
        <Container id={id}>{children}</Container>
      </ContainerDark>
    );
  } else {
    return <Container id={id}>{children}</Container>;
  }
};

export default ContainerComponent;
