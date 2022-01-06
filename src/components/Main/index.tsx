import React from "react"
import Header from "@components/Header";
import Footer from "@components/Footer";


const Main = ({ children, hero, style }: { children: any, hero: boolean, style?: any }) => {
  return (
    <React.Fragment>
      <Header hero={hero}/>
      <main style={style}>
        {children}
      </main>
      <Footer />
    </React.Fragment>



)}

export default Main
