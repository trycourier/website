import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  background: #DBF1FF;
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 4px;
  width: auto;
`;

const TagComponent: React.FC = ({ children }) => {
  return (
    <Tag>
      {children}
    </Tag>
  );
};

export default TagComponent;
