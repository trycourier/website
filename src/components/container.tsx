import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import colors from "../colors";

type ContainerProps = {
  bg?: string;
};

const Container = styled.div`
  ${tw`relative w-full mx-auto min-w-5xl max-w-5xl`}
`;

const ContainerDark = styled.div`
  background-color: ${(props: ContainerProps) =>
    colors[props.bg] ? colors[props.bg] : props.bg};
  color: ${colors.white};
`;

export const Desktop = styled.div`
  width: 100%;
  ${tw`hidden md:block`}
`;

export const Mobile = styled.div`
  ${tw`block md:hidden`}
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
  top: -1px;
  height: 160px;
  background-color: ${(props: ContainerProps) => colors[props.bg]};
  &.footer {
    height: 130px;
    min-width: 1822px;
  }
`;

export const PageWrapper = styled.div`
  ${tw`relative px-4`}
  top: -100px;
  overflow: hidden;
  min-height: 40vh;
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
