import React from "react"
import {styled} from "@mui/system";

export default function ResponsiveImageList({ children }: { children: any }) {

  const ImageGalleryList = styled('ul')(({ theme }) => ({
    display: 'grid',
    padding: 0,
    margin: theme.spacing(0, 4),
    gap: 8,
    [theme.breakpoints.up('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
  }));

  return (
    <ImageGalleryList>
      { children }
    </ImageGalleryList>
  )
}

