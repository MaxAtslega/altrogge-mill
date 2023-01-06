import * as React from "react"
import { Link } from "gatsby"
import Main from "@components/Main";
import SEO from "@components/seo";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 32,
}

const NotFoundPage = () => {
  return (
    <Main hero={false} style={pageStyles}>
      <h1 style={headingStyles}>Die Seite wurde nicht gefunden</h1>
      <p style={paragraphStyles}>Die von Ihnen gesuchte Seite konnte leider nicht gefunden werden.</p>
      <p style={paragraphStyles}>Bitte gehen Sie auf die <Link to="/">Startseite</Link>.</p>
    </Main>
  )
}

export const Head = () => (<SEO title={"404 - Mühle Altrogge"}/>)

export default NotFoundPage
