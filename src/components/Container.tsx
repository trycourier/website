import React from "react";
import { Box } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: number;
  [x: string]: any;
}

const Container = ({ children, maxWidth, ...other }: ContainerProps) => (
  <Box
    padding="0 20px"
    maxWidth={maxWidth ? maxWidth : 1400}
    mx="auto"
    {...other}
  >
    {children}
  </Box>
);

export default Container;
