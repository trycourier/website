import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

import Container from "../container";
import colors from "../../colors";

import bluecrew from "../../images/clients/bluecrew.svg";
import blissfully from "../../images/clients/blissfully.svg";
import expel from "../../images/clients/expel.svg";
import lattice from "../../images/clients/lattice.svg";
import launchdarkly from "../../images/clients/launchdarkly.svg";
import ltse from "../../images/clients/ltse.svg";

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
  @media (max-width: 767px) {
    width: 385px;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) and (max-width: 900px) {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 760px;
    margin: -20px 0 20px 0;
    img {
      position: static;
      margin: 12px;
    }
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
          mobile={{ top: "0px", left: "16px" }}
        />
        <ClientImage
          src={blissfully}
          alt="Blissfully"
          desktop={{ top: "2px", left: "190px" }}
          mobile={{ top: "10px", left: "160px" }}
        />
        <ClientImage
          src={ltse}
          alt="Long Term Stock Exchange"
          desktop={{ top: "16px", left: "370px" }}
          mobile={{ top: "-15px", left: "300px" }}
          style={{ height: "40px" }}
        />
        <ClientImage
          src={launchdarkly}
          alt="LaunchDarkly"
          desktop={{ top: "40px", left: "470px" }}
          mobile={{ top: "50px", left: "20px" }}
          style={{ height: "40px" }}
        />
        <ClientImage
          src={expel}
          alt="Expel"
          desktop={{ top: "70px", left: "700px" }}
          mobile={{ top: "100px", left: "160px" }}
          style={{ height: "25px" }}
        />
        <ClientImage
          src={bluecrew}
          alt="Bluecrew"
          desktop={{ top: "90px", left: "860px" }}
          mobile={{ top: "70px", left: "250px" }}
          style={{ height: "17px" }}
        />
      </ClientsImageWrapper>
    </Clients>
  );
};

export default ClientsComponent;
