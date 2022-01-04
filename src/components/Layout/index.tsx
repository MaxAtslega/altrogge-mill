import React from "react"
import {AnimatePresence} from "framer-motion"

const Layout = ({ children }: { children: any }) => {
  return (
  <AnimatePresence exitBeforeEnter>
    { children }
  </AnimatePresence>

)}

export default Layout
