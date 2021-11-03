import { styled } from "@mui/system"

export const Container = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  margin: "0 auto",

  "@media screen and (max-width: 850px)": {
    flexFlow: "column",
  },
})

export const ImageContainer = styled("div")({
  margin: "15px",
  padding: "50px",
  maxWidth: "1280px",
  img: {
    width: "480px",
  },

  "@media screen and (max-width: 850px)": {
    padding: 0,
    order: 1,
    img: {
      width: "100%",
    },
  },
})

export const TextContainer = styled("div")({
  margin: "15px",
  textAlign: "left",
  padding: "50px",
  maxWidth: "1280px",
  flexBasis: 0,
  flexGrow: 1,
  "@media screen and (max-width: 850px)": {
    padding: 0,
    order: 2,
  },
})
