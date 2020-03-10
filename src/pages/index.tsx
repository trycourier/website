import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";


import Container from "../components/container";
// import Footer from "../components/footer";

import Glyph from "../components/home/glyph";
import Divider from "../components/home/divider";
import Hero from "../components/home/hero";
// import Implement from "../components/home/implement";
// import Clients from "../components/home/clients";
// import Editor from "../components/home/editor";
// import Route from "../components/home/route";
// import Tracking from "../components/home/tracking";
// import GettingStarted from "../components/home/getting-started";

import Curve from "../components/home/curve";

const IndexPage: React.FC = () => {
  const { glyph1, glyph2, glyph3, glyph4 } = useStaticQuery(graphql`
    query {
      glyph1: file(relativePath: { eq: "dividers/hero-top@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glyph2: file(relativePath: { eq: "dividers/api-white-bottom@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glyph3: file(relativePath: { eq: "deprecated/Separator 3@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glyph4: file(relativePath: { eq: "deprecated/Separator 4@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

const Section1 = styled.section`
  background: red;
  width: 100%;
  height: auto;
`
const Divider1 = styled.div`
    background: green;
    width: 100%;
    height: 20vh;
 `
 const Section2 = styled.section`
  background: blue;
  width: 100%;
  height: 75vh;
`

  return (
    <Layout>
      <SEO title="Home" />
        
        
      <Section1>
        <Container>
          <Hero />
        </Container>

        <Divider image={glyph1}/>
      </Section1> 

      <Divider1>
        Greennnn
      </Divider1> 
      <Section2 />

      {/* <Hero />
      <Curve />

      <Clients />

      <Container >
        <Glyph image={glyph2} />
        <Editor />
      </Container>

      <Container>
        <Glyph image={glyph1} />
        <Implement />
      </Container>

      <Container>
        <Tracking />
        <Glyph image={glyph3} />
      </Container>

      <Container dark={true}>
        <Glyph image={glyph4} />
        <Route />
      </Container>

      <Container>
        <GettingStarted />
      </Container>

      <Container dark={true}>
        <Footer>
        </Footer>
      </Container> */}
      
    </Layout>
  );
};

export default IndexPage;
