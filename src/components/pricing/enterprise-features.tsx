import React from "react";
import styled from "styled-components";

import accountManager from "./assets/account-manager.svg";
import data from "./assets/data.svg";
import roles from "./assets/roles.svg";
import volume from "./assets/volume.svg";

const StyledEnterpriseFeature = styled.div`
  display: flex;
  align-items: center;

  flex: 0 48%;
  box-shadow: rgba(157, 52, 139, 0.25) 0px 8px 18px;
  border-radius: 10px;
  padding: 24px;
  height: 144px;
  box-sizing: border-box;
  margin: 21px 0;

  @media only screen and (min-width: 768px) {
    .image {
      width: 130px;
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;
    height: auto;
    text-align: center;
  }

  p {
    margin: 6px 0;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }
`;

const EnterpriseFeature: React.FC<{
  svg: string;
  title: string;
  description: string;
}> = ({ svg, title, description }) => {
  return (
    <StyledEnterpriseFeature>
      <div className="image">
        <img src={svg} alt={title} />
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </StyledEnterpriseFeature>
  );
};

const StyledEnterpriseFeatures = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: block;
  }

  justify-content: space-between;
  margin: 24px 0;
  flex-wrap: wrap;
`;

const EnterpriseFeatures: React.FC = () => {
  return (
    <StyledEnterpriseFeatures>
      <EnterpriseFeature
        svg={accountManager}
        title="Dedicated account manager"
        description="White-glove service through the entire journey"
      />
      <EnterpriseFeature
        svg={data}
        title="Unlimited data log retention"
        description="Full control over data retention"
      />
      <EnterpriseFeature
        svg={roles}
        title="Customer roles and permissions"
        description="Manage your entire team’s notifications workflow"
      />
      <EnterpriseFeature
        svg={volume}
        title="1 million+ notifications"
        description="Infinitely scalable volume"
      />
    </StyledEnterpriseFeatures>
  );
};

export default EnterpriseFeatures;
