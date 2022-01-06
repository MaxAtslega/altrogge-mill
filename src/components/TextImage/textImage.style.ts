import { styled } from "@mui/system"
import {Box} from "@mui/material";

export const Container = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  margin: "0 auto",

  "@media screen and (max-width: 1000px)": {
    flexFlow: "column",
  },
})

export const ImageContainer = styled("div")({
  padding: "20px",
  maxWidth: "450px",
  margin: "30px 0px",
  img: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  },
  "@media screen and (max-width: 1000px)": {
    padding: 0,
    order: 1,
    margin: "15px",
    maxWidth: "100%",
    img: {
      width: "100%",
    },
  },
})

export const TextContainer = styled("div")({
  textAlign: "left",
  padding: "20px",
  margin: "30px 0px",
  flexBasis: 0,
  flexGrow: 1,
  "@media screen and (max-width: 1000px)": {
    padding: 0,
    textAlign: "center",
    order: 2,
  },
})

