import * as React from "react"
import { Link } from "gatsby"
import Main from "@components/Main";
import {Alert, Button, Container, Grid, TextField, Typography} from "@mui/material";
import LennardQuiz from "@images/lennard_quiz.png";
import MapVertical from "@images/map_vertical.png";
import MapHorizontal from "@images/map_horizontal.png";
import TextVideo from "@components/TextVideo";
import SEO from "@components/seo";
import MotionDiv from "@components/MotionDiv";


const Quiz = () => {
  const [getCheckValue, setCheckValue] = React.useState("")
  const [getMessage, setMessage] = React.useState({
    correct: null,
    wrong: null
  })

  const handleCheck = () => {
    if(getCheckValue.toUpperCase() === "WASSER") {
      setMessage({correct: "Du hast alle Mützen von Lennard Lachs gefunden und du hast die Suche erfolgreich absolviert. Das Wasser hat das Mühlrad angetrieben und somit könnten die Maschinen für die Produktion produzieren.", wrong: null})
    }else{
      setMessage({
        correct: null,
        wrong: "Das Lösungswort ist falsch"
      })
    }
  }

  return (
    <Main hero={false}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={2}>
          <img style={{display: "block", maxWidth: "100%", height: "auto", padding: "20px"}} src={LennardQuiz} alt={"Placeholder"} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <MotionDiv>
            <Container>
              <TextVideo video={"https://www.youtube.com/embed/vbdD9HTlNas"}>
                <Typography variant="h2">Willkommen beim Quiz!</Typography>
                <div>
                  <Typography>
                    Wir begrüßen euch herzlich zum Quiz über die Mühle Altrogge! Hier kannst du mit spannenden Ankreuzfragen dein Wissen über die Mühle überprüfen. Lennard Lachs wird dich dabei immer begleiten.
                    <br/>Bonus: Lennard hat seine Mützensammlung verloren. Finde seine 6 Mützen auf der Webseite und verbinde sie zu einem Lösungswort.
                  </Typography>
                  <Link style={{textDecoration: "none"}} to={"/quiz/1"}><Button style={{ marginTop: "10px"}} variant="contained">Start</Button></Link>
                </div>
              </TextVideo>
              {getMessage.correct !== null ? <Alert variant="outlined" severity="success">{getMessage.correct}</Alert> : null}
              {getMessage.wrong !== null ? <Alert variant="outlined" severity="error">{getMessage.wrong}</Alert> : null}
              <Typography sx={{paddingTop: "20px"}} variant="h2">Dein Lösungswort überprüfen</Typography>
              <TextField onChange={(v) => setCheckValue(v.target.value) } fullWidth label="Lösungswort" id="fullWidth" />
              <Button onClick={() => handleCheck()} style={{ marginTop: "10px"}} variant="contained">Überprüfen</Button>
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
export const Head = () => (<SEO title={"Quiz - Mühle Altrogge"}/>)

export default Quiz
