import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Tag = styled.div`
  background: #dbf1ff;
  color: #26699e;
  font-size: 12px;
  border-radius: 4px;
  padding: 8px;
  width: auto;
  display: inline-block;
  cursor: pointer;
`;

type TagType = {
  label: string;
}

const TagComponent: React.FC<TagType> = ({ label }) => {
  const tagRoute = label.toLowerCase().replace(/ /gi, "-");
  return (
    <Link to={`/blog/tags/${tagRoute}`}>
      <Tag>{label}</Tag>
    </Link>
  );
};

export default TagComponent;
