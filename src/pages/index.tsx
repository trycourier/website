import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Footer from "../components/footer";

import Glyph from "../components/home/glyph";
import Hero from "../components/home/hero";
import Implement from "../components/home/implement";
import Providers from "../components/home/providers";
import Editor from "../components/home/editor";
import Route from "../components/home/route";
import Pricing from "../components/home/pricing";
import Hiring from "../components/home/hiring";
import Investors from "../components/home/investors";

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

      <Container>
        <Hero />
      </Container>

      <Container dark={true}>
        <Glyph image={glyph1} />
        <Implement />
      </Container>

      <Providers />

      <Container dark={true}>
        <Glyph image={glyph2} />
        <Editor />
      </Container>

      <Container>
        <Route />
      </Container>

      <Container dark={true} id="pricing">
        <Glyph image={glyph3} />
        <Pricing />
      </Container>

      <Container id="company">
        <Glyph image={glyph4} />
        <Hiring />
      </Container>

      <Container dark={true}>
        <Footer>
          <Investors />
        </Footer>
      </Container>
    </Layout>
  );
};

export default IndexPage;
