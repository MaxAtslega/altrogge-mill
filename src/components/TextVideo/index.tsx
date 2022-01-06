import React from "react"
import { Container, ImageContainer, TextContainer } from "@components/TextVideo/textVideo.style"

const TextVideo = ({ children, imageRight = false, video }: { children: any; imageRight?: boolean, video: string }) => (
  <Container>
    {!imageRight && (
      <ImageContainer>
        <iframe src={video}
  title="YouTube video player" frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen/>
      </ImageContainer>
    )}
    <TextContainer>{children}</TextContainer>

    {imageRight && (
      <ImageContainer>
        <iframe src="https://www.youtube-nocookie.com/embed/Sl9VWnCpB80"
  title="YouTube video player" frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen/>      </ImageContainer>
    )}
  </Container>
)

export default TextVideo
