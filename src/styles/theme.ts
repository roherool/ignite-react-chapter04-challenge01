import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    default: {
      highlight: "#FFBA08",
      white: "#FFFFFF",
      black: "#0C0C0C",
      dark: {
        text: "#47585B",
        info: "#999999",
        background: "#181B23",
      },
      light: {
        text: "#F5F8FA",
        info: "#DADADA",
        background: "#F5F8FA",
      },
    },
  },
  styles: {
    global: (props) => {
      const prefix =
        props.colorMode === "light" ? ["light", "dark"] : ["dark", "light"];
      return {
        body: {
          bg: `default.${prefix[0]}.background`,
          color: `default.${prefix[1]}.text`,
        },
      };
    },
  },
});
