import type { NextPage } from "next"
import { Typography, Container } from "@mui/material"
import Section from "@components/Section"
import Divider from "@components/Divider"
import Layout from "@components/Layout"
import TextImage from "@components/TextImage"

const Home: NextPage = () => (
  <Layout title="Mühle Altrogge">
    <Container>
      <Section id={"about_me"}>
        <Typography variant="h1">Geschichte</Typography>
        <Divider />
        <TextImage imageRight={false}>
          <Typography variant="h2">Die Produktion</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elementum justo. Morbi in venenatis dui.
            Mauris quis efficitur orci, ut venenatis massa. Pellentesque gravida ante sit amet condimentum tristique.
            Suspendisse at gravida nunc, mattis sagittis velit. Pellentesque molestie mauris risus, et elementum metus
            mattis sit amet. Aliquam id ex ac augue tempor convallis. Nunc id consequat nibh. Suspendisse rhoncus nulla
            at nisl egestas vulputate vel vitae ex. In est nibh, tempus vitae ipsum vel, eleifend dictum diam. Ut
            dapibus massa sed turpis dictum pretium. Mauris tempus sapien sit amet turpis sodales, sit amet sollicitudin
            augue tincidunt. Donec ullamcorper suscipit laoreet.
          </Typography>
        </TextImage>
        <TextImage imageRight>
          <Typography variant="h2">Die Produktion</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elementum justo. Morbi in venenatis dui.
            Mauris quis efficitur orci, ut venenatis massa. Pellentesque gravida ante sit amet condimentum tristique.
            Suspendisse at gravida nunc, mattis sagittis velit. Pellentesque molestie mauris risus, et elementum metus
            mattis sit amet. Aliquam id ex ac augue tempor convallis. Nunc id consequat nibh. Suspendisse rhoncus nulla
            at nisl egestas vulputate vel vitae ex. In est nibh, tempus vitae ipsum vel, eleifend dictum diam. Ut
            dapibus massa sed turpis dictum pretium. Mauris tempus sapien sit amet turpis sodales, sit amet sollicitudin
            augue tincidunt. Donec ullamcorper suscipit laoreet.
          </Typography>
        </TextImage>
      </Section>
    </Container>
  </Layout>
)

export default Home
