import {
  Heading,
  Text,
  Box,
  AspectRatio,
  Link,
  ListItem,
  OrderedList,
  UnorderedList,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
} from "@chakra-ui/react";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import Markdown from "markdown-to-jsx";

const ChakraIframe = chakra("iframe");

const ChakraBlockquote = chakra("blockquote");

const YouTubeEmbed = ({ embedUrl }: { embedUrl: string }) => {
  return (
    <AspectRatio
      maxH={"430px"}
      my={10}
      maxW={"90%"}
      mx="auto"
      borderRadius={64}
    >
      <ChakraIframe src={embedUrl} allowFullScreen borderRadius={12} />
    </AspectRatio>
  );
};

const MarkdownContent = ({
  assets,
  content,
}: {
  assets: Record<string, { url: string; width: number; height: number }>;
  content: string;
}) => {
  return (
    <Box mt="52px">
      <Markdown
        options={{
          overrides: {
            h1: {
              component: Heading,
              props: { as: "h1", variant: "h1", mb: "42px" },
            },
            h2: {
              component: Heading,
              props: { as: "h2", variant: "h2", mb: "32px" },
            },
            h3: {
              component: Heading,
              props: { as: "h3", variant: "h3", mb: "22px" },
            },
            h4: {
              component: Heading,
              props: { as: "h4", variant: "h4", mb: "22px" },
            },
            h5: {
              component: Heading,
              props: { as: "h5", variant: "h5", mb: "16px" },
            },
            h6: {
              component: Heading,
              props: { as: "h6", variant: "h6", mb: "12px" },
            },
            p: {
              component: Text,
              props: { my: 6 },
            },
            table: {
              component: Table,
              props: { size: "sm", my: 6 },
            },
            thead: {
              component: Thead,
            },
            tbody: {
              component: Tbody,
            },
            tr: {
              component: Tr,
            },
            th: {
              component: Th,
            },
            td: {
              component: Td,
            },
            pre: {
              component: (props) => (
                <Box mt="10px">
                  <CopyBlock
                    text={props.children.props.children}
                    language={(props.children.props.className || "").replace(
                      "lang-",
                      ""
                    )}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    theme={dracula}
                    codeBlock
                  />
                </Box>
              ),
            },
            a: {
              component: (props) => {
                if (props.href.includes("youtube.com/embed")) {
                  return <YouTubeEmbed embedUrl={props.href} />;
                }

                const external =
                  /^https?:\/\//.test(props.href) &&
                  !props.href.includes("courier.com");

                return (
                  <Link
                    textDecoration="underline"
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : ""}
                    {...props}
                  />
                );
              },
            },
            ol: {
              component: OrderedList,
            },
            ul: {
              component: UnorderedList,
            },
            li: {
              component: ListItem,
              props: { my: 2 },
            },
            blockquote: {
              component: (props) => (
                <ChakraBlockquote
                  borderLeftColor="primary.sand"
                  borderLeftWidth={4}
                  pl={4}
                  {...props}
                />
              ),
            },
            img: {
              component: (props) => {
                const assetId = props.src.split("/")[4];
                const asset = assets[assetId || ""];

                if (!asset) return null;

                return (
                  <Box my={10}>
                    <Image
                      src={`https:${asset.url}`}
                      alt={props.alt}
                      title={props.title}
                      width={asset.width}
                      height={asset.height}
                      quality={100}
                    />
                  </Box>
                );
              },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </Box>
  );
};

export default MarkdownContent;
