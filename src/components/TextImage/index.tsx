import { Container, ImageContainer, TextContainer } from "@components/TextImage/textImage.style"

export default ({ children, imageRight = false }: { children: any; imageRight: boolean }) => (
  <Container>
    {!imageRight && (
      <ImageContainer>
        <img src="https://via.placeholder.com/1920x1080" alt={"Placeholder"} />
      </ImageContainer>
    )}
    <TextContainer>{children}</TextContainer>

    {imageRight && (
      <ImageContainer>
        <img src="https://via.placeholder.com/1920x1080" alt={"Placeholder"} />
      </ImageContainer>
    )}
  </Container>
)
