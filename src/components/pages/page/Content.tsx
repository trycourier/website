import { Heading, Text, Box } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

import { PageData } from "scripts/GetPageData";
import { widgetComponents } from "components/pages/page/widgets";

const Content = ({
  content,
  widgetsData,
  title,
}: {
  content: PageData["content"];
  widgetsData: Record<string, any>;
  title: string;
}) => {
  return (
    <Box
      mt={"52px"}
      color="secondary.dark"
      maxW={980}
      mx="auto"
      pt={{ base: "132px", lg: "92px" }}
      p="0 20px"
    >
      <Heading as="h1">{title}</Heading>
      {content.json.content.map((row) => {
        const document = row;
        return documentToReactComponents(document, {
          renderMark: {
            [MARKS.BOLD]: (text) => {
              return <strong>{text}</strong>;
            },
          },
          renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => (
              <Heading as="h1" mt={"42px"} size="xl">
                {children}
              </Heading>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
              <Heading as="h2" mt={"32px"} size="lg">
                {children}
              </Heading>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
              <Heading as="h3" mt={"22px"} size="md">
                {children}
              </Heading>
            ),
            [BLOCKS.PARAGRAPH]: (node, children) => {
              return <Text mt={6}>{children}</Text>;
            },
            [INLINES.HYPERLINK]: ({ data }, children) => (
              <a
                style={{ textDecoration: "underline" }}
                href={data.uri}
                target={`${
                  data.uri.includes("courier.com") ? "_self" : "_blank"
                }`}
                rel={`${
                  data.uri.includes("courier.com") ? "" : "noopener noreferrer"
                }`}
              >
                {children}
              </a>
            ),
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
              const widgetKey = content.links.entries.block.find(
                (block) => block.sys.id === node.data.target.sys.id
              )?.key;

              if (
                widgetKey &&
                widgetsData[widgetKey] &&
                widgetComponents[widgetKey]
              ) {
                const Component = widgetComponents[widgetKey];
                return <Component data={widgetsData[widgetKey]} />;
              }

              return null;
            },
          },
        });
      })}
    </Box>
  );
};

export default Content;
