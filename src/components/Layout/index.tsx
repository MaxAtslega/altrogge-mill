import React from "react"
import {AnimatePresence, motion} from "framer-motion"
import Header from "@components/Header";
import Footer from "@components/Footer";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}


const Layout = ({ children }: { children: any }) => {
  return (
  <AnimatePresence exitBeforeEnter>
    { children }
  </AnimatePresence>

)}

export default Layout
