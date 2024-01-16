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
    initialColorMode: "dark",
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
  fonts: {
    // body: "'Poppins', sans-serif;",
    // heading: "'Poppins', sans-serif;",
    // text:"'DM Sans', sans-serif ",
    // headingStyles: {
    //   300: {
    //     fontWeight: 'light', // Apply Light (300) weight to heading
    //   },
    //   900: {
    //     fontWeight: 'black', // Apply Black (900) weight to heading
    //   },
    // },
    // ... other font styles if needed
  },
  lightTheme,
  darkTheme,
});

export default theme;
