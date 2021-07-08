import {
  Heading,
  Text,
  Box,
  AspectRatio,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

const YouTubeEmbed = ({ embedUrl }: { embedUrl: string }) => {
  return (
    <AspectRatio
      maxH={"430px"}
      my={10}
      maxW={"90%"}
      mx="auto"
      sx={{
        borderRadius: "64px",
      }}
    >
      <iframe
        src={embedUrl}
        allowFullScreen
        style={{
          borderRadius: "12px",
        }}
      />
    </AspectRatio>
  );
};

const RichContent = ({
  content,
  images,
  snippets,
}: {
  content: any[];
  images: any;
  snippets: any;
}) => {
  return (
    <Box mt={"52px"}>
      {content.map((row: any, contentsIndex) => {
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
              <Heading as="h2" mt={"32px"}>
                {children}
              </Heading>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
              <Heading as="h3" mt={"22px"} size="lg">
                {children}
              </Heading>
            ),
            [BLOCKS.HEADING_4]: (node, children) => (
              <Heading as="h4" mt={"22px"} size="md">
                {children}
              </Heading>
            ),
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
              if (row.data.target.sys.id in snippets) {
                let { code, language } = snippets[row.data.target.sys.id];
                if (language === "htmlmixed") {
                  language = "html";
                  if (code.indexOf("React") > -1) {
                    language = "jsx";
                  }
                }
                return (
                  <Box mt={"10px"}>
                    <CopyBlock
                      text={code}
                      language={language}
                      showLineNumbers={true}
                      startingLineNumber={1}
                      theme={dracula}
                      codeBlock
                    />
                  </Box>
                );
              }
            },
            [BLOCKS.PARAGRAPH]: (node, children) => {
              return <Text mt={6}>{children}</Text>;
            },
            [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
              const { url, width, height, title } = images[
                node.data.target.sys.id
              ];
              return (
                <Box my={10}>
                  <Image
                    src={url}
                    layout="responsive"
                    width={width}
                    height={height}
                    quality={100}
                    alt={title}
                  />
                </Box>
              );
            },
            [BLOCKS.OL_LIST]: (node, children) => (
              <OrderedList>{children}</OrderedList>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
              <UnorderedList>{children}</UnorderedList>
            ),
            [BLOCKS.LIST_ITEM]: (node, children) => (
              <ListItem>{children}</ListItem>
            ),
            [INLINES.HYPERLINK]: ({ data }, children) => {
              if (data.uri.indexOf("youtube.com") !== -1) {
                return <YouTubeEmbed embedUrl={data.uri} />;
              } else {
                return (
                  <a
                    style={{ textDecoration: "underline" }}
                    href={data.uri}
                    target={`${
                      data.uri.includes("courier.com") ? "_self" : "_blank"
                    }`}
                    rel={`${
                      data.uri.includes("courier.com")
                        ? ""
                        : "noopener noreferrer"
                    }`}
                  >
                    {children}
                  </a>
                );
              }
            },
          },
        });
      })}
    </Box>
  );
};

export default RichContent;
