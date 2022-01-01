import React from "react";
import { SectionContainer } from "./Section.style"
import {Container} from "@mui/material";

const Section = ({ children, id, dark }: { children: any, id: string, dark?: boolean }) => {
  if (dark){
    return (
      <SectionContainer>
        <Container>
          <section id={id}>
            { children }
          </section>
        </Container>
      </SectionContainer>
    )
  } else {
    return (
      <Container style={{paddingTop: "2em"}}>
        <section id={id}>
          { children }
        </section>
      </Container>
    )
  }
}

export default Section
