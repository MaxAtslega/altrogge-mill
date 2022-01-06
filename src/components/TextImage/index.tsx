import React from "react"
import { Container, ImageContainer, TextContainer } from "@components/TextImage/textImage.style"

const TextImage = ({ children, imageRight = false, imageSRC, onClickImage }: { children: any; imageRight?: boolean, imageSRC: any, onClickImage?: any }) => (
  <Container>
    {!imageRight && (
      <ImageContainer onClick={onClickImage}>
        <img src={imageSRC} alt={"Placeholder"} />
      </ImageContainer>
    )}
    <TextContainer>{children}</TextContainer>

    {imageRight && (
      <ImageContainer onClick={onClickImage}>
        <img src={imageSRC} alt={"Placeholder"} />
      </ImageContainer>
    )}
  </Container>
)

export default TextImage
