import React from "react";
import Img from "gatsby-image";

export type GatsbyImage = {
  childImageSharp: {
    fluid: any;
  };
};

const Image: React.FC<{
  image: GatsbyImage;
}> = ({ image }) => {
  return <Img fluid={image.childImageSharp.fluid} />;
};

export default Image;
