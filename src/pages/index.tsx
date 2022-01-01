import * as React from "react"
import SEO from "../components/seo"
import {
  Typography,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  ListSubheader,
  ImageListItemBar,
  IconButton
} from "@mui/material"
import Section from "@components/Section"
import Divider from "@components/Divider"
import Layout from "@components/Layout"
import TextImage from "@components/TextImage"
import Main from "@components/Main"
import Lennard from "@images/lennard.png"
import MapHorizontal from "@images/map_horizontal.png"
import MapVertical from "@images/map_vertical.png"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
];

function InfoIcon() {
  return null;
}

const IndexPage = () => {
  return (
    <Main hero={true}>
      <SEO title={"Start - Mühle Altrogge"}/>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={2}>
              <img style={{display: "block", maxWidth: "100%", height: "auto", padding: "20px"}} src={Lennard} alt={"Placeholder"} />
          </Grid>
          <Grid item xs={12} sm={8}>
              <Section id={"about_me"}>
                <Typography variant="h1">Die Geschichte</Typography>
                <Divider />
                <TextImage imageRight={false}>
                  <Typography variant="h2">Die herrschaftlichen Mühle</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elementum justo. Morbi in venenatis dui.
                    Mauris quis efficitur orci, ut venenatis massa. Pellentesque gravida ante sit amet condimentum tristique.
                    Suspendisse at gravida nunc, mattis sagittis velit. Pellentesque molestie mauris risus, et elementum metus
                    mattis sit amet. Aliquam id ex ac augue tempor convallis. Nunc id consequat nibh. Suspendisse rhoncus nulla
                    at nisl egestas vulputate vel vitae ex. In est nibh, tempus vitae ipsum vel, eleifend dictum diam. Ut
                    dapibus massa sed turpis dictum pretium. Mauris tempus sapien sit amet turpis sodales, sit amet sollicitudin
                    augue tincidunt. Donec ullamcorper suscipit laoreet.
                  </Typography>
                </TextImage>
                <TextImage imageRight>
                  <Typography variant="h2">Die Produktion</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elementum justo. Morbi in venenatis dui.
                    Mauris quis efficitur orci, ut venenatis massa. Pellentesque gravida ante sit amet condimentum tristique.
                    Suspendisse at gravida nunc, mattis sagittis velit. Pellentesque molestie mauris risus, et elementum metus
                    mattis sit amet. Aliquam id ex ac augue tempor convallis. Nunc id consequat nibh. Suspendisse rhoncus nulla
                    at nisl egestas vulputate vel vitae ex. In est nibh, tempus vitae ipsum vel, eleifend dictum diam. Ut
                    dapibus massa sed turpis dictum pretium. Mauris tempus sapien sit amet turpis sodales, sit amet sollicitudin
                    augue tincidunt. Donec ullamcorper suscipit laoreet.
                  </Typography>
                </TextImage>
                <TextImage imageRight={false}>
                  <Typography variant="h2">Die Produktion</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elementum justo. Morbi in venenatis dui.
                    Mauris quis efficitur orci, ut venenatis massa. Pellentesque gravida ante sit amet condimentum tristique.
                    Suspendisse at gravida nunc, mattis sagittis velit. Pellentesque molestie mauris risus, et elementum metus
                    mattis sit amet. Aliquam id ex ac augue tempor convallis. Nunc id consequat nibh. Suspendisse rhoncus nulla
                    at nisl egestas vulputate vel vitae ex. In est nibh, tempus vitae ipsum vel, eleifend dictum diam. Ut
                    dapibus massa sed turpis dictum pretium. Mauris tempus sapien sit amet turpis sodales, sit amet sollicitudin
                    augue tincidunt. Donec ullamcorper suscipit laoreet.
                  </Typography>
                </TextImage>
              </Section>
          </Grid>
          <Grid item xs={12} sm={2}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={MapVertical} />
              <img style={{display: "block", maxWidth: "100%", height: "auto", padding: "20px"}} src={MapHorizontal} alt={"Placeholder"} />
            </picture>
          </Grid>
        </Grid>
        <Section dark={true} id={"about_me"}>
          <Typography variant="h1">Wasserkraftwerke im Vergleich</Typography>
          <Divider />
          <TextImage imageRight={false}>
            <Typography variant="h2">Speicherkraftwerk</Typography>
            <Typography>
              Wenn Strom aus dem Speicherkraftwerk erzeugt werden soll, lässt man das Wasser aus dem Speicherbecken ab und führt es durch ein tiefergelegenes Turbinenbecken. Über die Bewegung
              der Turbine entsteht dann Strom.
            </Typography>
          </TextImage>
          <TextImage imageRight>
            <Typography variant="h2">Laufwasserkraftwerk</Typography>
            <Typography>
              Das Laufwasserkraftwerk nutzt künzliche Gefälle von den Wasserströmen, um so Strom zu erzeugen. Das Wasser fließt mit einer hohen Geschwindigkeit durch die Turbiene des Wasserkraftwerks. Sie bringt den Generator zum Laufen, weshalb Strom erzeugt wird.
            </Typography>
          </TextImage>
          <TextImage imageRight={false}>
            <Typography variant="h2">Pumpenspeicherwerke</Typography>
            <Typography>
              Das Laufwasserkraftwerk nutzt künzliche Gefälle von den Wasserströmen, um so Strom zu erzeugen. Das Wasser fließt mit einer hohen Geschwindigkeit durch die Turbiene des Wasserkraftwerks. Sie bringt den Generator zum Laufen, weshalb Strom erzeugt wird.
            </Typography>
          </TextImage>
        </Section>
        <Section id={"galerie"}>
          <Typography variant="h1">Galerie</Typography>
          <Divider />
          <ImageList cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Section>
    </Main>
  )
}

export default IndexPage
