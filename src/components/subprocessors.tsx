import React from "react";
import styled from "styled-components";

import subprocessors from "../../content/subprocessors.yaml";

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
  return (
    <>
      <h1>List of Data Subprocessors</h1>
      <h3>Current as of: June 11, 2020</h3>

      <p>The following is the current list of Subprocessors authorized to process customer data for Courier.</p>

      <SubprocessorTable>
        <thead>
          <tr>
            <th>Subprocessor</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {subprocessors.map((sub, idx) => (
            <tr key={idx}>
              <td>{sub.name}</td>
              <td>{sub.description}</td>
              <td>{sub.location}</td>
            </tr>
          ))}
        </tbody>
      </SubprocessorTable>

      <p>If you have any questions please contact us at <a href="mailto:privacy@trycourier.com">privacy@trycourier.com</a>.</p>
    </>
  );
};

export default SubprocessorsComponent;