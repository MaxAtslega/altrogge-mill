import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "2em",
      fontWeight: 600,
      letterSpacing: ".05em",
      marginBottom: "0.2rem",
      textAlign: "center",
    },
    h2: {
      fontSize: "1em",
      fontWeight: 600,
      marginBottom: "0.5em",
    },
    body2: {
      color: "#ffffff",
    },
  },
  palette: {
    background: {
      default: "#BBDCD4",
    },
  },
})

export default theme
