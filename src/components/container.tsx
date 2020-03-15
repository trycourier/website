import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import colors from "../colors";

type ContainerProps = {
  bg?: string;
}

const Container = styled.div`
  ${tw`relative mx-auto max-w-5xl`}
`;

const ContainerDark = styled.div`
  background-color: ${(props: ContainerProps) => colors[props.bg]};
  color: ${colors.white};
`;

export const Desktop = styled.div`
  display: block;
  @media(max-width: 640px){
    display: none;
  }
`;

export const Mobile = styled.div`
  display: none;
  @media(max-width: 640px){
    display: block;
  }
`;

const ContainerComponent: React.FC<{
  id?: string;
  bg?: string;
}> = ({ id, bg, children }) => {
  if (bg) {
    return (
      <ContainerDark bg={bg}>
        <Container id={id}>{children}</Container>
      </ContainerDark>
    );
  }
  return <Container id={id}>{children}</Container>;
};

export default ContainerComponent;
