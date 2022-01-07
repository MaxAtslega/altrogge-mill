import * as React from "react"
import { Link } from "gatsby"
import Main from "@components/Main";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import LennardQuiz from "@images/lennard_quiz.png";
import MapVertical from "@images/map_vertical.png";
import MapHorizontal from "@images/map_horizontal.png";
import SEO from "@components/seo";
import MotionDiv from "@components/MotionDiv";
import quiz from "../../../config/quiz.json";

const QuizEnd = (props: any) => {
  const numberOfWrongAnswers: number = props.location.state?.numberOfWrongAnswers ? props.location.state.numberOfWrongAnswers : 0;

  return (
    <Main hero={false}>
      <SEO title={"Quiz - Mühle Altrogge"}/>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={2}>
          <img style={{display: "block", maxWidth: "100%", height: "auto", padding: "20px"}} src={LennardQuiz} alt={"Placeholder"} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <MotionDiv>
            <Container sx={{marginTop: "2em"}} maxWidth="sm">
              <Box sx={{textAlign: "center", borderRadius: "10px", padding: "20px", color: "#ffffff", background: "rgba(16,128,187,1.00)"}}>
                <Typography variant="h1" sx={{fontFamily: "'Gluten', cursive"}}>Glückwunsch!</Typography>
                <div>
                  <Typography>
                    Du hast es geschafft! Du hast {quiz.length-numberOfWrongAnswers} von {quiz.length} Fragen richtig beantwortet! :)
                  </Typography>
                  <Link style={{textDecoration: "none"}} to={"/quiz"}><Button sx={{fontFamily: "'Gluten', cursive", marginTop: "10px"}} variant="contained">Nochmal Starten</Button></Link>
                </div>
              </Box>

            </Container>
          </MotionDiv>

        </Grid>
        <Grid item xs={12} sm={2}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={MapVertical} />
            <img style={{display: "block", maxWidth: "100%", height: "auto", padding: "20px"}} src={MapHorizontal} alt={"Placeholder"} />
          </picture>
        </Grid>
      </Grid>
    </Main>
  )
}

export default QuizEnd
