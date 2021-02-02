import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";

const SubprocessorTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  & th {
    text-align: left;
    border-bottom: 2px solid #e2e2e2;
    line-height: 36px;
  }
  & td {
    border-bottom: 1px solid #f0f0f0;
    line-height: 36px;
  }
`;

const SubprocessorsComponent: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSubprocessor (sort: {fields: [name], order: ASC}) {
        edges {
          node {
            name
            description
            location
          }
        }
      }
    }
  `);

  return (
    <SubprocessorTable>
      <thead>
        <tr>
          <th>Subprocessor</th>
          <th>Description</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {data.allContentfulSubprocessor.edges.map((sub, idx) => (
          <tr key={idx}>
            <td>{sub.node.name}</td>
            <td>{sub.node.description}</td>
            <td>{sub.node.location}</td>
          </tr>
        ))}
      </tbody>
    </SubprocessorTable>
  );
};

export default SubprocessorsComponent;
