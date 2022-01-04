import React, {useEffect, useState} from "react"
import {ImageList} from "@mui/material";


export default function ResponsiveImageList({ children }: { children: any }) {
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }

  const getColumns = (width) => {
    if (width < breakpoints.sm) {
      return 2
    } else{
      return 3
    }
  }

  const [columns, setColumns] = useState(typeof window !== "undefined" ? getColumns(window.innerWidth): 2)
  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth))
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <ImageList cols={columns}>
      { children }
    </ImageList>
  )
}

