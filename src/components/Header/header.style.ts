import {styled} from "@mui/system"
import HeroImage from "@images/hero.png"
import HeaderWave from "@images/header-wave.svg"
import {Link} from "gatsby";



export const Header =  styled("header", {
  shouldForwardProp: (prop) => prop !== "hero",
})<{ hero?: boolean }>(({ hero }) => ({

    width: "100%",
    ...(hero && {
      height: "80vh",
      backgroundImage: `url(${HeroImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      "@media only screen and (max-width:620px)": {
        height: "65vh",
      },
    }),
    display: "block",
    position: "relative",
  }));



export const Navigator = styled("nav")({
  backgroundImage: `url(${HeaderWave})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top left",
  backgroundSize: "cover",
  height: "170px",
  width: "100%",

  "@media only screen and (max-width:620px)": {
    height: "110px",
  },
})

export const WaveSVG = styled("svg")({
  position: "absolute",
  width: "100%",
  bottom: 0,
  left: 0,
})

export const NavbarContainer = styled("div")({
  paddingRight: "20px",
  paddingLeft: "20px",
  height: "55%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media only screen and (max-width:620px)": {
    justifyContent: "center",
  },
})

export const LinkButton = styled(Link)({
  fontSize: "17px",
  padding: "6px 40px",
  background: "#5BBADA",
  fontFamily: "'Roboto', sans-serif",
  fontWeight: "bold",
  color: "#ffffff",
  textDecoration: "none",
  cursor: "pointer",

  "&:hover": {
    background: "#4cb1d4",
  },

  "@media only screen and (max-width:620px)": {
    display: "none",
  },
})
