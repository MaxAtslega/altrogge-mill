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
    img: Gallery5,
    title: 'Generator + Schwungrad',
  },
  {
    img: Gallery4,
    title: 'Schwungrad',
    lennard: {which: "letzte", letter: "r"}
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
                  Die alte herrschaftliche Mühle war eine Vorgängerin der heutigen Mühle Altrogge. Sie war im Eigentum der jeweiligen lippischen Regenten, bis sie 1862 abbrannte. Daraufhin wurde eine neue Mühle südlich der Langen Straße erbaut und kam 1920 in den Besitz der Familie Altrogge. Die alte herrschaftliche Mühle wurde zu einem Wohnhaus wieder aufgebaut.                 </Typography>
              </TextImage>
              <TextImage imageSRC={History2Picture} imageRight>
                <Typography variant="h2">Die Mühle Altrogge</Typography>
                <Typography>
                  Nach dem Brand der alten herrschaftlichen Mühle wurde die jetzige Mühle Altrogge an der Werre vom lippischen Fürsten aufgebaut und 1872 zunächst mit einem Pachtvertrag von der Familie Altrogge übernommen.  Einige Jahre später konnte die Mühle dann von der Familie gekauft werden. Wegen eines technischen Defektes brannte die Mühle Altrogge im Jahr 1993 teilweise ab. Danach wurde die Mühle erneut aufgebaut, bis die Mehl- bzw. Futtermittelproduktion 2012 beendet wurde. Heute produzieren zwei Kapla-Turbinen etwa 5 bis 10kw Strom aus der Wasserkraft der aufgestauten Werre.                 </Typography>
              </TextImage>
              <TextImage onClickImage={() => handleOpen("zweite", "a")} imageSRC={History3Picture}>
                <Typography variant="h2">Die damalige Produktion</Typography>
                <Typography>
                  Die alte herrschaftlichen Mühle, sowie die neue Mühle Altrogge, haben bis zu dem Brand Mehl produziert. Bis 1993 wurden ca. 120 Tonnen Getreide pro Tag verarbeitet. Ab dem Jahr 1950 wurden vor allem die Nachprodukte des Getreides zu Futtermitteln verarbeitet. Später produzierte die Mühle Altrogge ausschließlich Spezialfutter für Labortiere.                 </Typography>
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
              Die herrschaftliche Mühle und die Mühle Altrogge wurde damals an der Werre gebaut, um die Kraft des Wassers zu nutzen und Maschinen durch Zahnränder anzutreiben. Strom wurde damals noch nicht verwendet. Als immer mehr Maschinen elektrischen Strom zum Antrieb verwendeten, beschloss Familie Altrogge auch ihre Mühle mit elektrischen Turbinen auszustatten. Hierzu wurde vor den Turbinen eine Staustufe genutzt, die das Wasser aufstaut und ein Gefälle erzeugt. Das aufgestaute Wasser wird bis heute durch den sogenannten Mühlengraben zu den Turbinen geleitet. Die Turbinen werden durch die Wasserkraft angetrieben und erzeugen elektrischen Strom.             </Typography>
          </TextImage>
          <TextImage onClickImage={() => handleOpen("dritte", "s")} imageSRC={Technology2Picture} imageRight>
            <Typography variant="h2">Die Kaplan-Turbine</Typography>
            <Typography>
              Die Mühle Altrogge ist ein Laufwasserkraftwerk, aber ein kleines. Die verwendete Turbine zur Strom Gewinnung ist die Kaplan-Turbine. Sie wurde in der Mühle vertikal verbaut, somit lag sie über dem Wasserzulauf. Das ist wichtig, da die Leistung der Turbine von der Wassermenge und der Fallhöhe abhängig ist. Oberhalb der Turbine war ein sogenannter „Drehstrom-Generator“, der dazu diente, den Strom sicher zum Generator zu übertagen. Heute noch produziert die Turbine Strom. In den letzten Jahren verringerte sich jedoch die durchschnittliche Wassermenge in der Werre (Klimawandel?), so dass heute nur noch ein Fünftel des Stroms gewonnen werden kann wie früher.             </Typography>
          </TextImage>
          <TextImage imageSRC={Technology3Picture}>
            <Typography variant="h2">Die Stromgewinnung</Typography>
            <Typography>
              Die zwei Kaplan-Turbinen könnten bei optimalem Wasserstand etwa 50kw elektrischen Strom erzeugen. Aufgrund des Klimawandels und der trockenen Sommer der letzten Jahre führt die Werre immer weniger Wasser als früher. Deshalb produziert die Turbinen heute nur noch etwa 5 bis 10kw an Strom. Bei großen Wassermengen, z.B. beim Starkregen, wird die erste Turbine vollständig geöffnet. Reicht das nicht aus, wird auch die zweite Turbine geöffnet. Wenn immer noch zu viel Wasser kommt, dann wird das überschüssige Wasser in die kleine Werre geleitet, um einen Rückstau mit Überflutungen zu verhindern. Pro Sekunde laufen etwa 200l Wasser durch die Turbinen. Das Schwimmgut, vor den Turbinen, werden von einem mechanischen Rechen in regelmäßigen Abständen herausgezogen.
            </Typography>
          </TextImage>
        </Section>
        <Section id={"hydroelectric-power-station"}>
          <Typography variant="h1">Wasserkraftwerke im Vergleich</Typography>
          <Divider />
          <TextImage onClickImage={() => handleOpen("vierte", "s")} imageSRC={Speicherkraftwerk} imageRight={false}>
            <Typography variant="h2">Speicherkraftwerk</Typography>
            <Typography>
              Wenn Strom mit einem Speicherkraftwerk erzeugt werden soll, lässt man das Wasser aus dem Speicherbecken ab und führt es durch ein tiefergelegenes Turbinenbecken. Über die Bewegung der Turbine entsteht dann der elektrische Strom.
            </Typography>
          </TextImage>
          <TextImage imageSRC={Laufwasserkraftwerk} imageRight>
            <Typography variant="h2">Laufwasserkraftwerk</Typography>
            <Typography>
              Das Laufwasserkraftwerk nutzt künstliche Gefälle von Wasserströmen, um so Strom zu erzeugen. Das Wasser fließt dabei mit einer hohen Geschwindigkeit durch die Turbine des Wasserkraftwerks. Sie treibt den Generator zum Laufen an und erzeugt so elektrischen Strom.             </Typography>
          </TextImage>
          <TextImage imageSRC={Pumpenspeicherkraftwerk}>
            <Typography variant="h2">Pumpenspeicherkraftwerk</Typography>
            <Typography>
              Bei einem Pumpenspeicherkraftwerk wird mithilfe von elektrischer Energie zunächst Wasser in höhergelegene Becken vom Kraftwerk gepumpt. Damit man diese Energie zurückgewinnen kann, lässt man irgendwann das Wasser wieder durch Rohrleitungen abfließen, in denen Turbinen angetrieben werden. Sobald das Wasser runter fließt, wird die Turbine in Bewegung gesetzt und es entsteht wieder elektrischer Strom. Der Vorteil eines Pumpspeicherkraftwerkes ist, dass es sehr schnell Energie erzeugen wenn es benötigt wird.             </Typography>
          </TextImage>
        </Section>
        <Section dark={true} id={"environment"}>
          <Typography variant="h1">Die Umwelt</Typography>
          <Divider />
          <TextImage imageSRC={Environment1Picture} imageRight={false}>
            <Typography variant="h2">Welche ökologischen Probleme bereiten Wasserkraftwerke?</Typography>
            <Typography>
              Jedes Wasserkraftwerk kann mehr oder weniger der Natur schaden. Die Kraftwerke verändert nämlich das Ökosystem eines Flusses, manchmal aber auch einer ganzen Landschaft. Die für die Kraftwerke nötigen Stauwerke unterbrechen die Durchgängigkeit der Flüsse. Für Fischen und Wasserlebewesen jeglicher Art gibt es nun kaum noch eine Möglichkeit  flussaufwärts zu schwimmen. Außerdem blockieren die Stauwerke den Transport von Sand und Kies im Flussbett. Künstlich gebaute Fischaufstiege funktionieren nur selten gut und werden oft schlecht gewartet. Gelangen Tiere in die Turbinen, so bedeutet das oft den Tod der Tiere.             </Typography>
          </TextImage>
          <TextImage onClickImage={() => handleOpen("fünfte", "e")} imageSRC={Environment2Picture} imageRight>
            <Typography variant="h2">Was macht die Mühle Altrogge mit der Qualität der Werre?</Typography>
            <Typography>
              Das kleine Wasserkraftwerk der Mühle Altrogge bildet über mehrere hundert Meter ein Stau im Wasser, der aber kein echter See ist. Da Wasser hier nur langsam weiter fließen kann, sammelt sich Schmutz und Schlamm an. Der reduzierte Sauerstoffgehalt des Wassers und der verschlammte Untergrund führen zu einem Verlust der Artenvielfalt in der Werre.             </Typography>
          </TextImage>
        </Section>
        <Section id={"galerie"}>
          <Typography variant="h1">Galerie</Typography>
          <Divider />
          <ResponsiveImageList>
            {itemData.map((item) => (
                <ImageListItem onClick={() => {
                  if(item.lennard) handleOpen(item.lennard.which, item.lennard.letter)
                }} key={item.img}>
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
export const Head = () => (<SEO title={"Start - Mühle Altrogge"}/>)

export default IndexPage
