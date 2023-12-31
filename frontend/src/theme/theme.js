import { extendTheme } from "@chakra-ui/react";

const lightTheme = {
  colors: {
    background: "#ffffff",
    text: "#333333",
    // ... other colors
  },
};

const darkTheme = {
  colors: {
    background: "#333333",
    text: "#ffffff",
    // ... other colors
  },
};


const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "white",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  lightTheme,
  darkTheme,
});

export default theme;
