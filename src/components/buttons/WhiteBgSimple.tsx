import { Flex } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";

interface Props {
  children: React.ReactNode;
  height: string | object;
  width: string | object;
  link: string;
  [x: string]: any;
}
/*
borderImageSlice: "1", borderRadius: "8px"
borderImageSource: "linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)"
*/

const WhiteBgSimple = ({ width, height, link, children, ...other }: Props) => (
  <InternalLink to={link}>
    <Flex
      background="transparent"
      color="primary.violet"
      borderRadius="8px"
      border="2px solid #9121C2"
      fontSize="14px"
      {...other}
      _after={{
        position: "absolute",
        top: -"4px",
        bottom: -"4px",
        left: -"4px",
        right: -"4px",
        background: "linear-gradient(red, blue)",
        content: '""',
        zIndex: -1,
        borderRadius: "16px",
      }}
      _hover={{
        transition: "all .8s",
        border: "2px solid",
        background: "linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      width={width}
      height={height}
      textShadow="0 -1px 0 rgb(0 0 0 / 12%)"
      boxShadow="0 2px 0 rgb(0 0 0 / 2%)"
      fontWeight="600"
      justify="center"
      align="center"
      transition="all .8s"
    >
      {children}
    </Flex>
  </InternalLink>
);

export default WhiteBgSimple;
