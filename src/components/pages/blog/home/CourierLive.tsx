import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import ContentGrid from "./ContentGrid";

const CourierLive = ({ items }: { items: any[] }) => (
  <Box my={"62px"}>
    <Divider />
    <Heading mt={"62px"}>Courier Live</Heading>
    <Text mt={"12px"}>Join our streams every week on Thursday at 8pm</Text>
    <ContentGrid customMarginTop={"42px"} items={items} />
    <Divider mt={"62px"} />
  </Box>
);

export default CourierLive;
