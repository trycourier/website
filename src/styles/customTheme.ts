import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    body: "'Poppins', arial, sans-serif",
    heading: "Gellix, arial",
  },
  colors: {
    ...theme.colors,
    primary: {
      violet: "#9121C2",
      salmon: "#FF5E5E",
      sand: "#FCEDE3",
    },
    secondary: {
      dark: "#2C1338",
      salmon: "#FD897A",
    },
  },
  components: {
    Heading: {
      variants: {
        h1: {
          fontSize: ["42px", "48px", "48px", "48px", "60px"],
          lineHeight: ["56px", "56px", "56px", "56px", "64px"],
          fontWeight: "800",
        },
        h2: {
          fontSize: ["40px", "40px", "40px", "48px", "48px"],
          lineHeight: ["48px", "48px", "48px", "56px", "56px"],
          fontWeight: "700",
        },
        h3: {
          fontSize: "40px",
          lineHeight: "48px",
          fontWeight: "700",
        },
        h4: {
          fontSize: "32px",
          lineHeight: "32px",
          fontWeight: "700",
        },
        subh1: {
          fontSize: "20px",
          lineHeight: "32px",
          fontWeight: "600",
        },
        subh2: {
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: "600",
        },
      },
    },
    Text: {
      variants: {
        body1: {
          fontSize: "18px",
          lineHeight: "32px",
          fontWeight: "400",
        },
        body1medium: {
          fontSize: "18px",
          lineHeight: "32px",
          fontWeight: "500",
        },
        body2: {
          fontSize: "16px",
          lineHeight: "26px",
          fontWeight: "400",
        },
        body2medium: {
          fontSize: "16px",
          lineHeight: "26px",
          fontWeight: "500",
        },
        body3: {
          fontSize: "14px",
          lineHeight: "24px",
          fontWeight: "400",
        },
        body3medium: {
          fontSize: "14px",
          lineHeight: "24px",
          fontWeight: "500",
        },
        smallbody1: {
          fontSize: "13px",
          lineHeight: "19.5px",
          fontWeight: "400",
        },
        smallbody1medium: {
          fontSize: "13px",
          lineHeight: "19",
          fontWeight: "500",
        },
        smallbody2: {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "400",
        },
        smallbody2medium: {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "500",
        },
      },
    },
  },
});

export default customTheme;
