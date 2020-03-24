import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Container from "../container";
import colors from "../../colors";

import lattice from "../../images/clients/lattice.svg";
import blissfully from "../../images/clients/blissfully.svg";
import eatgeek from "../../images/clients/eatgeek.svg";
import hutsy from "../../images/clients/hutsy-logo.svg";
import savvy from "../../images/clients/savvy.svg";
import aarida from "../../images/clients/aarida.svg";
// import beacons from "../../images/clients/beacons.svg";

const Clients = styled(Container)`
  ${tw`py-2 flex flex-col`}
  background: transparent;
`;

const ClientsText = styled.div`
  ${tw`text-left mx-auto px-4`}
  & h4 {
    ${tw` p-0 text-md`}
    color: ${colors.textSecondary};
    font-weight: 400;
    top: -30px;
  }
`;

const ClientsImageWrapper = styled.div`
  ${tw`w-full relative mx-auto`}
  height: 120px;
  @media (max-width: 768px) {
    width: 385px;
  }
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
  top: ${(props: ClientCardProps) =>
    props.mobile ? props.mobile.top : props.desktop.top};
  left: ${(props: ClientCardProps) =>
    props.mobile ? props.mobile.left : props.desktop.left};
  @media (min-width: 768px) {
    top: ${(props: ClientCardProps) =>
      props.desktop ? props.desktop.top : props.mobile.top};
    left: ${(props: ClientCardProps) =>
      props.desktop ? props.desktop.left : props.mobile.left};
  }
`;

const ClientsComponent: React.FC = () => {
  return (
    <Clients>
      <ClientsText>
        <h4>Trusted by</h4>
      </ClientsText>
      <ClientsImageWrapper>
        <ClientImage
          src={lattice}
          alt="Lattice"
          desktop={{ top: "20px", left: "10px" }}
          mobile={{ top: "10px", left: "10px" }}
        />
        <ClientImage
          src={blissfully}
          alt="Blissfully"
          desktop={{ top: "2px", left: "194px" }}
          mobile={{ top: "10px", left: "130px" }}
        />
        <ClientImage
          src={eatgeek}
          alt="EatGeek"
          desktop={{ top: "16px", left: "380px" }}
          mobile={{ top: "10px", left: "260px" }}
        />
        <ClientImage
          src={hutsy}
          alt="Hutsy"
          desktop={{ top: "33px", left: "543px" }}
          mobile={{ top: "60px", left: "10px" }}
        />
        <ClientImage
          src={savvy}
          alt="Savvy"
          desktop={{ top: "50px", left: "685px" }}
          mobile={{ top: "65px", left: "130px" }}
        />
        <ClientImage
          src={aarida}
          alt="Aarida"
          desktop={{ top: "67px", left: "825px" }}
          mobile={{ top: "50px", left: "260px" }}
        />
        {/* <ClientImage src={beacons} desktop={{top: "74px", left: "10px"}} mobile={{top: "10px", left: "10px"}}/> */}
      </ClientsImageWrapper>
    </Clients>
  );
};

export default ClientsComponent;
