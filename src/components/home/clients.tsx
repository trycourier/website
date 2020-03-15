import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Container from "../container";
import colors from "../../colors";

import lattice from "../../images/clients/lattice.svg";
import blissfully from "../../images/clients/blissfully.svg";
import eatgeek from "../../images/clients/eatgeek.svg";
import hutsy from "../../images/clients/hutsy.svg";
import savvy from "../../images/clients/savvy.svg";
import aarida from "../../images/clients/aarida.svg";
import beacons from "../../images/clients/beacons.svg";

const Clients = styled(Container)`
  ${tw`py-2`}
  background: ${colors.white};
`;

const ClientsText = styled.div`
  ${tw`text-left px-4 sm:px-0`}
  @media(min-width: 640px){
    margin-top: -100px;
  }
  & h4 {
    ${tw`mb-4 p-0 text-md`}
    color: ${colors.textPrimary};
    position: relative;
    top: -24px;
  }
`;

const ClientsImageWrapper = styled.div`
  ${tw`py-12`}
`;

type BoxProps = {
  top: string;
  left: string;
};

type ClientCardProps = {
  desktop: BoxProps;
  mobile: BoxProps;
};

const ClientImage = styled.img`
  position: absolute;
  top: ${(props: ClientCardProps) => (props.mobile ? props.mobile.top : props.desktop.top)};
  left: ${(props: ClientCardProps) => (props.mobile ? props.mobile.left : props.desktop.left)};
  @media(min-width: 640px){
    top: ${(props: ClientCardProps) => (props.desktop ? props.desktop.top : props.mobile.top)};
    left: ${(props: ClientCardProps) => (props.desktop ? props.desktop.left : props.mobile.left)};
  }
`

const ClientsComponent: React.FC = () => {
  return (
    <Clients>
      <ClientsText>
        <h4>Trusted by</h4>
      </ClientsText>
      <ClientsImageWrapper>
        <ClientImage src={lattice} desktop={{top: "20px", left: "10px"}} mobile={{top: "10px", left: "10px"}} />
        <ClientImage src={blissfully} desktop={{top: "2px", left: "194px"}} mobile={{top: "10px", left: "130px"}}/>
        <ClientImage src={eatgeek} desktop={{top: "16px", left: "380px"}} mobile={{top: "10px", left: "260px"}}/> 
        <ClientImage src={hutsy} desktop={{top: "33px", left: "543px"}} mobile={{top: "60px", left: "10px"}}/>
        <ClientImage src={savvy} desktop={{top: "50px", left: "730px"}} mobile={{top: "65px", left: "130px"}}/>
        <ClientImage src={aarida} desktop={{top: "67px", left: "911px"}} mobile={{top: "50px", left: "260px"}}/>
        {/* <ClientImage src={beacons} desktop={{top: "74px", left: "10px"}} mobile={{top: "10px", left: "10px"}}/> */}
      </ClientsImageWrapper>
    </Clients>
  );
};

export default ClientsComponent;
