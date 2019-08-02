import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const Header = styled.h1`
  ${tw`text-4xl`}
`;
const ImageWrapper = styled.div`
  ${tw`mb-5`}
  max-width: 300px;
`;

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Header>Hi people</Header>
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
