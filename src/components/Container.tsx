import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

const Container = ({ maxWidth, ...other }: BoxProps) => (
  <Box
    padding="0 20px"
    maxWidth={maxWidth ? maxWidth : 1400}
    mx="auto"
    {...other}
  />
);

export default Container;
