import React from "react"
import {AnimatePresence, motion} from "framer-motion"
import Header from "@components/Header";
import Footer from "@components/Footer";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}


const Main = ({ children, hero, style }: { children: any, hero: boolean, style?: any }) => {
  return (
    <React.Fragment>
      <Header hero={hero}/>
      <main style={style}>
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          <>
            {children}
          </>
        </motion.div>
      </main>
      <Footer />
    </React.Fragment>



)}

export default Main
