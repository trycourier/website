import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Footer from "../components/footer";

import Glyph from "../components/home/glyph";
import Hero from "../components/home/hero";
import Implement from "../components/home/implement";
import Clients from "../components/home/clients";
import Editor from "../components/home/editor";
import Route from "../components/home/route";
import Tracking from "../components/home/tracking";
// import Investors from "../components/home/investors";
import GettingStarted from "../components/home/getting-started";

import Curve from "../components/home/curve";

const IndexPage: React.FC = () => {
  const { glyph1, glyph2, glyph3, glyph4 } = useStaticQuery(graphql`
    query {
      glyph1: file(relativePath: { eq: "Separator 1@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glyph2: file(relativePath: { eq: "Separator 2@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glyph3: file(relativePath: { eq: "Separator 3@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glyph4: file(relativePath: { eq: "Separator 4@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />

      <Container dark={true}>
        <Hero />
      </Container>
      <Curve />

      {/* <Investors /> */}

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
      </Container>
    </Layout>
  );
};

export default IndexPage;
