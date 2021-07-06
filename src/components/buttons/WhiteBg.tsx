import { Flex, Box } from "@chakra-ui/react";
import InternalLink from "components/InternalLink";

interface Props {
  children: React.ReactNode;
  height: string | object;
  width: string | object;
  link: string;
  [x: string]: any;
}

const WhiteBgSimple = ({ width, height, link, children, ...other }: Props) => (
  <InternalLink to={link}>
    <Flex
      background="#FFFFFF"
      color="primary.violet"
      borderRadius="8px"
      fontSize="14px"
      {...other}
      width={width}
      height={height}
      textShadow="0 -1px 0 rgb(0 0 0 / 12%)"
      boxShadow="0 2px 0 rgb(0 0 0 / 2%)"
      fontWeight="600"
      justify="center"
      align="center"
      transition="all .8s"
    >
      <Box
        _hover={{
          transition: "all .8s",
          border: "2px linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)",
          backgroundImage: "linear-gradient(270deg, #9121C2 0%, #FF5E5E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 200000,
        }}
      >
        {children}
      </Box>
    </Flex>
  </InternalLink>
);

export default WhiteBgSimple;
