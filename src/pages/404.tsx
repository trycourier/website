import React from "react";

import Simple from "../templates/simple";
import SEO from "../components/seo";
import Container from "../components/container";

const NotFoundPage: React.FC = () => (
  <Simple title="404 Error">
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Simple>
);

export default NotFoundPage;
