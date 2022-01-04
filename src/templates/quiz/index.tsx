import * as React from "react"
import Main from "@components/Main";
import { navigate } from 'gatsby'
import {
  Button,
  Checkbox,
  Container, FormControl,
  FormControlLabel,
  FormGroup, FormLabel,
  Grid,
  Radio, RadioGroup,
  TextField,
  Typography
} from "@mui/material";
import LennardQuiz from "@images/lennard_quiz.png";
import TextVideo from "@components/TextVideo";
import MapVertical from "@images/map_vertical.png";
import MapHorizontal from "@images/map_horizontal.png";
import {green, red} from "@mui/material/colors";
import SEO from "@components/seo";
import MotionDiv from "@components/MotionDiv";

const QuizByID = (props: any) => {
  const quiz = props.pageContext;
  const numberOfWrongAnswers: number = props.location.state?.numberOfWrongAnswers ? props.location.state.numberOfWrongAnswers : 0;
  const [selectedValue, setSelectedValue] = React.useState('');
  const [isAnswered, setAnswered] = React.useState(false);

  console.log(quiz);

  const handleChange = (event) => {
    event.preventDefault()

    setSelectedValue(event.target.value);
  }

  const handleAnswerButton = (event) => {
    event.preventDefault()

    if(isAnswered){
      navigate(quiz.lastQuestion ? "/quiz/end" : "/quiz/"+(quiz.id+1), {
        state: { numberOfWrongAnswers: selectedValue === "answer"+quiz.answer ? numberOfWrongAnswers : numberOfWrongAnswers + 1},
      })
    }else{
      setAnswered(true)
    }

  }

    return (
      <Main hero={false}>
        <SEO title={"Quiz - Mühle Altrogge"}/>
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={2}>
              <img style={{display: "block", maxWidth: "100%", height: "auto", padding: "20px"}} src={LennardQuiz} alt={"Placeholder"} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <MotionDiv>
                <Container>
                  <TextVideo video={"https://www.youtube-nocookie.com/embed/Sl9VWnCpB80"}>
                    <Typography variant="h2">{quiz.title}</Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        name="radio-buttons-group"
                      >
                        {quiz.answers.map((answer, index) => {
                          return <FormControlLabel disabled={isAnswered} sx={isAnswered ? index !== quiz.answer ? {color: red[800], "& .MuiFormControlLabel-label.Mui-disabled": {color: red[600]}}: {color: green[800], "& .MuiFormControlLabel-label.Mui-disabled": {color: green[600]}}: null} key={index} value={"answer"+index} control={<Radio value={"answer"+index} sx={isAnswered ? index !== quiz.answer ? {color: red[800], '&.Mui-checked': {color: red[600]}, '&.MuiRadio-root.Mui-disabled': {color: red[600]}}: {color: green[800], '&.Mui-checked': {color: green[600]}, '&.MuiRadio-root.Mui-disabled': {color: green[600]}}: null} onChange={handleChange} checked={selectedValue === ("answer"+index)}/>} label={answer} />
                        })}
                      </RadioGroup>
                      <Button style={{ marginTop: "10px"}} onClick={handleAnswerButton} variant="contained">{isAnswered ? "Weiter" : "Antworten"}</Button>
                    </FormControl>
                  </TextVideo>
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

export default QuizByID
