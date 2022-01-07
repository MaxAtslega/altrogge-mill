import * as React from "react"
import SEO from "../components/seo"
import {
  Typography,
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton, Box, Modal, Button, Container
} from "@mui/material"

import Section from "@components/Section"
import Divider from "@components/Divider"
import TextImage from "@components/TextImage"
import Main from "@components/Main"
import Lennard from "@images/lennard.png"
import MapHorizontal from "@images/map_horizontal.png"
import MapVertical from "@images/map_vertical.png"
import ResponsiveImageList from "@components/ResponsiveImageList";

import History1Picture from "@images/pictures/history1.png"
import History2Picture from "@images/pictures/history2.png"
import History3Picture from "@images/pictures/history3.png"

import Technology1Picture from "@images/pictures/technology1.png"
import Technology2Picture from "@images/pictures/technology2.png"
import Technology3Picture from "@images/pictures/technology3.png"

import Environment1Picture from "@images/pictures/environment1.png"
import Environment2Picture from "@images/pictures/environment2.png"

import Laufwasserkraftwerk from "@images/Laufwasserkraftwerk.png"
import Pumpenspeicherkraftwerk from "@images/Pumpenspeicherkraftwerk.png"
import Speicherkraftwerk from "@images/Speicherkraftwerk.png"


import Gallery1 from "@images/gallery/1.png"
import Gallery2 from "@images/gallery/2.png"
import Gallery3 from "@images/gallery/3.png"
import Gallery4 from "@images/gallery/4.png"
import Gallery5 from "@images/gallery/5.png"
import Gallery6 from "@images/gallery/6.png"


import HeadImage from "@images/head.png"

import MotionDiv from "@components/MotionDiv";
import {styled} from "@mui/system";
import {navigate} from "gatsby";

const itemData = [
  {
    img: Gallery1,
    title: 'Rechen 1',
  },
  {
    img: Gallery2,
    title: 'Das Silo',
  },
  {
    img: Gallery3,
    title: 'Erklärung der Technik',
  },
  {
    img: Gallery4,
    title: 'Schwungrad',
  },
  {
    img: Gallery5,
    title: 'Generator + Schwungrad',
  },
  {
    img: Gallery6,
    title: 'Rechen 2',
  },
];

export const StyledModal = styled(Box)({
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "450px",
  backgroundColor: 'rgba(16,128,187,1)',
  border: '2px solid #000',
  color: "#ffffff",
  boxShadow: "24",
  textAlign: "center",
  padding: "10px",
  "@media screen and (max-width: 600px)": {
    width: "90%"
  },
});

export const QuizButton = styled(Button)({
  display: "none",
  "@media screen and (max-width: 600px)": {
    display: "block",
    width: "100%"
  },
});

const IndexPage = () => {
  const [getHide, setHide] = React.useState({which: null, letter: null});
  const handleOpen = (which, letter) => setHide({which, letter});
  const handleClose = () => setHide({which: null, letter: null});

  return (
    <Main hero={true}>
      <SEO title={"Start - Mühle Altrogge"}/>
      <MotionDiv>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={2}>
            <img style={{display: "block", maxWidth: "100%", height: "auto", padding: "20px"}} src={Lennard} alt={"Placeholder"} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Container>
              <QuizButton variant="contained" onClick={() => navigate('/quiz')}>Zum Quiz</QuizButton>
            </Container>
            <Section id={"about_me"}>
              <Typography variant="h1">Die Geschichte</Typography>
              <Divider />
              <TextImage imageSRC={History1Picture}>
                <Typography variant="h2">Die herrschaftliche Mühle</Typography>
                <Typography>
                  Die alte herrschaftliche Mühle war eine Vorgänger Mühle, von der von der neuen Mühle Altrogge und Sie blieb im Eigentum der jeweiligen Regenten, bis sie 1862 abbrannte. Daraufhin wurde eine neue Mühle südlich der Langen Straße erbaut und kam 1920 in den Besitz der Familie Altrogge. Die alte herrschaftliche Mühle wurde zu einem Wohnhaus wieder aufgebaut.
                </Typography>
              </TextImage>
              <TextImage imageSRC={History2Picture} imageRight>
                <Typography variant="h2">Die Mühle Altrogge</Typography>
                <Typography>
                  Nach dem Brand der alten herrschaftlichen Mühle wurde die jetzige bekannte Mühle Altrogge aufgebaut. Die Mühle wurde erst 1872 von Familie Altrogge übernommen. Davor gehörte die Mühle den Fürsten von Lippe. Wegen eines Technischen Defektes ist die Mühle Altrogge im Jahr 1993 abgebrannt. Danach wurde die Mühle erneut aufgebaut, bis die Produktion 2012 beendet wurde. Heute produzieren zwei Kapla-Turbinen etwa 5 bis 10kw an Strom.
                </Typography>
              </TextImage>
              <TextImage onClickImage={() => handleOpen("zweite", "a")} imageSRC={History3Picture}>
                <Typography variant="h2">Die damalige Produktion</Typography>
                <Typography>
                  Die alte herrschaftlichen Mühle, sowie die neue Mühle Altrogge, haben bis zu dem Brand Mehl produziert. Altrogge hat bis 1993 120 Tonnen Mehl pro Tag hergestellt und etwa ab den Jahr 1950 wurden die Nachprodukte zu Futtermittel verarbeitet. Später hat Altrogge ausschließlich Spezialfutter für Labortiere hergestellt.
                </Typography>
              </TextImage>
            </Section>
          </Grid>
          <Grid item xs={12} sm={2}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={MapVertical} />
              <img style={{display: "block", maxWidth: "100%", height: "auto", padding: "20px"}} src={MapHorizontal} alt={"Placeholder"} />
            </picture>
          </Grid>
        </Grid>
        <Section dark={true} id={"technology"}>
          <Typography variant="h1">Die Technik</Typography>
          <Divider />
          <TextImage imageSRC={Technology1Picture}>
            <Typography variant="h2">Damals und heute</Typography>
            <Typography>
              Die herrschaftliche Mühle und die Mühle Altrogge wurde damals am Wasser gebaut, um die Maschinen durch Zahnrändern anzutreiben, da es damals kein Strom gab. Nachdem der Strom existierte, hat Altrogge beschlossen die Mühle durch Turbinen elektrisch anzutreiben. Um dies zu erreichen, wurde vor den Turbinen Staustufen errichtet, um das Wasser anzustauen, sodass es durch das sogenannte Mühlengraben zu den Turbinen lief. Die Turbinen haben daraufhin, rein mechatronisch, die Maschinen abgetrieben.
            </Typography>
          </TextImage>
          <TextImage onClickImage={() => handleOpen("dritte", "s")} imageSRC={Technology2Picture} imageRight>
            <Typography variant="h2">Die Kapla Turbine</Typography>
            <Typography>
              Die Mühle Altrogge ist ein Laufwasserkraftwerk, aber ein kleines. Die verwendete Turbine zur Strom Gewinnung ist die Kapla-Turbine. Sie wurde in der Mühle vertikal verbaut, somit lag sie über dem Wasserzulauf. Das ist wichtig, da die Leistung der Turbine von der Wassermenge und der Fallhöhe abhängig ist. Oberhalb der Turbine war ein sogenannter „Drehstrom“ Generator, der dazu diente, den Strom sicher zum Generator zu übertagen. Heute noch produziert die Turbine noch Strom. Aber durch die geringe Wassermenge in der Werre kann nur noch ein Fünftel des Stroms der früher gewonnen wurde, erzeugt werden.          </Typography>
          </TextImage>
          <TextImage imageSRC={Technology3Picture}>
            <Typography variant="h2">Die Stromgewinnung</Typography>
            <Typography>
              Die zwei Kapla Turbinen könnten damals bei optimalem Wasserstand etwa 50kw erzeugen, aber aufgrund des Klimawandels und den trockenen Sommer Tage führt die Werre weniger Wasser als früher. Deshalb produziert die Turbinen nur noch etwa 5 bis 10kw an Strom. Bei großen Wassermengen, z.B. beim Starkregen, wird die erste Turbine vollständig geöffnet. Reicht das nicht aus, wird auch die zweite Turbine geöffnet und wenn immer noch zu viel Wasser kommt, dann wird das Wasser in die kleine Werre geleitet, weil sonst ein Rückstau bei der Turbine gäbe. Bei den Turbinen gehen etwa 200l/s durch. Das Schwimmgut, vor den Turbinen, werden von einem Rechen herausgezogen.          </Typography>
          </TextImage>
        </Section>
        <Section id={"hydroelectric-power-station"}>
          <Typography variant="h1">Wasserkraftwerke im Vergleich</Typography>
          <Divider />
          <TextImage onClickImage={() => handleOpen("vierte", "s")} imageSRC={Speicherkraftwerk} imageRight={false}>
            <Typography variant="h2">Speicherkraftwerk</Typography>
            <Typography>
              Wenn Strom aus dem Speicherkraftwerk erzeugt werden soll, lässt man das Wasser aus dem Speicherbecken ab und führt es durch ein tiefergelegenes Turbinenbecken. Über die Bewegung
              der Turbine entsteht dann Strom.
            </Typography>
          </TextImage>
          <TextImage imageSRC={Laufwasserkraftwerk} imageRight>
            <Typography variant="h2">Laufwasserkraftwerk</Typography>
            <Typography>
              Das Laufwasserkraftwerk nutzt künzliche Gefälle von den Wasserströmen, um so Strom zu erzeugen. Das Wasser fließt mit einer hohen Geschwindigkeit durch die Turbiene des Wasserkraftwerks. Sie bringt den Generator zum Laufen, weshalb Strom erzeugt wird.
            </Typography>
          </TextImage>
          <TextImage imageSRC={Pumpenspeicherkraftwerk}>
            <Typography variant="h2">Pumpenspeicherkraftwerk</Typography>
            <Typography>
              Bei einem Pumpenspeicherkraftwerk wird mithilfe von elektrischer Energie Wasser in das Oberebecken vom Kraftwerk gepumt. Damit man diese Energie zurück gewinnen kann, lässt man mit der hilfe einer Turbine das Wasser in das unterer Becken abfließen. Sobald das Wasser runter fließt wird die Turbine angetrieben und es entsteht elektrischer Strom. Bei bedarf kann das Pumpenkraftwerk sehr schnell Energie erzeugen, weil es keinen solangen Vorlauf braucht.
            </Typography>
          </TextImage>
        </Section>
        <Section dark={true} id={"environment"}>
          <Typography variant="h1">Die Umwelt</Typography>
          <Divider />
          <TextImage imageSRC={Environment1Picture} imageRight={false}>
            <Typography variant="h2">Welche ökologischen Probleme bereiten Wasserkraftwerke?</Typography>
            <Typography>
              Jedes Wasserkraftwerk kann mehr oder weniger der Natur schaden. Die Kraftwerke verändert nämlich das Ökosystem eines Flusses, manchmal aber auch einer ganzen Landschaft. Die dafür nötigen Stauwerke unterbrechen die Durchgängigkeit, für die Wasserlebewessen jeglicher Art und meistens hindert, es Fischen flussaufwärts zu schwimmen. Die Stauwerke blockieren das Geschiebe im Flussbett, also von Sand und Kies. Aber auch die Fischaufstiege funktionieren nur selten und werden schlecht gewartet und die Turbinen enden oft tödlich für die Tiere.
            </Typography>
          </TextImage>
          <TextImage onClickImage={() => handleOpen("fünfte", "e")} imageSRC={Environment2Picture} imageRight>
            <Typography variant="h2">Was macht die Mühle Altrogge mit der Qualität der Werre?</Typography>
            <Typography>
              Das kleine Wasserkraftwerk der Mühle Altrogge bildet ein Stau im Wasser, der aber kein See ist. Das Wasser kann nur langsam weiter fließen. Somit sammelt sich Schmutz an und es kommt zu einem Verlust der Artenvielfalt in der Werre.
            </Typography>
          </TextImage>
        </Section>
        <Section id={"galerie"}>
          <Typography variant="h1">Galerie</Typography>
          <Divider />
          <ResponsiveImageList>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ResponsiveImageList>
        </Section>
      </MotionDiv>
      <Modal
        open={getHide.which !== null}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModal>
          <Typography pb={"10px"} variant="h1">
            Glückwunsch!
          </Typography>
          <img src={HeadImage} alt={"Placeholder"}/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Du hast die {getHide.which} Mütze von Lennard Lachs gefunden! Der {getHide.which} Buchstabe lautet: {getHide.letter}<br/><br/>Wenn du alle 6 Buchstaben gefunden hast, gehe zum Quiz und überprüfe dein Lösungswort.
          </Typography>
        </StyledModal>
      </Modal>
    </Main>
  )
}

export default IndexPage
