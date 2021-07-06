import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import { Subprocessor } from "scripts/GetAllSubprocessors";

const Subprocessors = ({ data: subprocessors }: { data: Subprocessor[] }) => {
  return (
    <Table variant="simple" size="sm" my={8}>
      <Thead>
        <Tr>
          <Th>Subprocessor</Th>
          <Th>Description</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        {subprocessors.map((subprocessor) => (
          <Tr key={subprocessor.sys.id}>
            <Td>{subprocessor.fields.name}</Td>
            <Td>{subprocessor.fields.description}</Td>
            <Td>{subprocessor.fields.location}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Subprocessors;
