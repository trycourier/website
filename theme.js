const { theme: base } = require("@chakra-ui/core");

module.exports.theme = {
  ...base,
  colors: {
    ...base.colors,
    berry: "#9D348B",
    berryGlass: "rgba(157, 52, 139, 0.15)",
    berryNeutral: "#24324B",
    neutralGlass: "rgb(36, 50, 75, 0.75)",
    berryWhite: "#F7F6F9",
    gatsby: "rebeccapurple",
    googleBlue: "#4285F4",
    greenMeadow: "#01C39A",
    highlightBlue: "#EFF9FF",
    highlightBorder: "#87C5EE",
    fullMoon: "#73819B",
    moonlight: "#344563",
    newMoon: "#002F48",
    textPrimary: "#344563",
    textSecondary: "#002F48",
    transparent: "transparent",
    white: "#FFFFFF",
    berryPale: "rgba(243, 217, 238, 0.6)",
  },
  // "Bebas Neue","Impact","Helvetica Neue",sans-serif

  fonts: {
    body: `"Proxima Nova","Nunito Sans",Roboto,sans-serif`,
    heading: `"Bebas Neue","Impact","Helvetica Neue",sans-serif`,
    mono: "Menlo, monospace",
  },
};
