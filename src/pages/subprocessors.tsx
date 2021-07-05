import {
  Heading,
  Text,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Header from "components/Header/index";
import Footer from "components/Footer/index";
import GetAllSubprocessors, { Subprocessor } from "scripts/GetAllSubprocessors";

export async function getStaticProps() {
  const subprocessors = await GetAllSubprocessors();
  return {
    props: { subprocessors },
  };
}

const Subprocessors = ({
  subprocessors,
}: {
  subprocessors: Subprocessor[];
}) => {
  const pageTitle = "Data Subprocessors | Courier";
  const pageDescription =
    "This page contains the list of Subprocessors authorized to process customer data for Courier.";
  const pageUrl = "https://www.courier.com/subprocessors";

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        openGraph={{
          type: "website",
          title: pageTitle,
          description: pageDescription,
          site_name: "Courier",
          images: [{ url: "https://www.courier.com/images/og-image.png" }],
        }}
        twitter={{
          cardType: "summary",
          site: "@trycourier",
        }}
      />
      <Header headerPlain />
      <Container
        mt="54px"
        maxW="980px"
        pt={{ lg: "90px" }}
        px="20px"
        color="secondary.dark"
      >
        <Heading as="h1">Data Subprocessors</Heading>
        <Heading variant="subh1">Current as of: June 11, 2020</Heading>

        <Text py={8}>
          The following is the current list of Subprocessors authorized to
          process customer data for Courier.
        </Text>

        <Table variant="simple" size="sm">
          <TableCaption>
            If you have any questions please contact us at{" "}
            <Link href="mailto:privacy@courier.com">privacy@courier.com</Link>.
          </TableCaption>
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
      </Container>
      <Footer noBanner />
    </>
  );
};

export default Subprocessors;
