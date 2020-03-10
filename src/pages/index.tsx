import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";


import Container from "../components/container";
import Footer from "../components/footer";

import Divider from "../components/home/divider";
import Hero from "../components/home/hero";
// import Implement from "../components/home/implement";
import Clients from "../components/home/clients";
// import Editor from "../components/home/editor";
// import Route from "../components/home/route";
// import Tracking from "../components/home/tracking";
// import GettingStarted from "../components/home/getting-started";


const IndexPage: React.FC = () => {
  const { divider1, divider, divider3, divider4 } = useStaticQuery(graphql`
    query {
      divider1: file(relativePath: { eq: "dividers/hero-white@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider2: file(relativePath: { eq: "dividers/api-white-bottom@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider3: file(relativePath: { eq: "deprecated/Separator 3@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      divider4: file(relativePath: { eq: "deprecated/Separator 4@2x.png" }) {
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
  height: 100vh;
`
const Section2 = styled.section`
    background: green;
    width: 100%;
    height: 20vh;
 `
 const Section3 = styled.section`
  background: blue;
  width: 100%;
  height: 75vh;
`

  return (
    <Layout>
      <SEO title="Home" />
        
        
      <Section1>
        <Container dark={true}>
          <Hero />
        </Container>

        <Divider image={divider1}/>
      </Section1> 

      <Section2>
        <Container>
          <Clients />
        </Container>
      </Section2> 
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
*/}
      <Container dark={true}>
        <Footer />
      </Container> 
      
    </Layout>
  );
};

export default IndexPage;
