const { ThemeProvider } = require("@chakra-ui/core");
const { theme } = require("./theme");
const React = require("react");

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
