import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import colors from "../colors";

type ContainerProps = {
  bg?: string;
}

const Container = styled.div`
  ${tw`relative mx-auto min-w-5xl max-w-5xl`}
`;

const ContainerDark = styled.div`
  background-color: ${(props: ContainerProps) => colors[props.bg] ? colors[props.bg] : props.bg};
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

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: ${colors.white};
`;

export const Divide = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  overflow: hidden;
`;

export const TopDivider = styled(Divide)`
  top: -14px;
  height: 160px;
  background-color: ${(props: ContainerProps) => colors[props.bg]};
  &.footer {
    height: 130px;
    min-width: 1822px;
  }
`;

export const PageWrapper = styled.div`
  position: relative;
  top: -100px;
  padding: 0px 16px;
  overflow: hidden;
  color: ${colors.textSecondary};
  & h1 {
    color: ${colors.textPrimary};
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
