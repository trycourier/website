import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  background: #DBF1FF;
  color: #26699E;
  font-size: 12px;
  border-radius: 4px;
  padding: 8px;
  width: auto;
  display: inline-block;
  cursor: pointer;
`;

const TagComponent: React.FC = ({ children }) => {
  return (
    <Tag>
      {children}
    </Tag>
  );
};

export default TagComponent;
