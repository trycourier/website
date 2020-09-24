import React from "react";
import Img from "gatsby-image/withIEPolyfill";

export type GatsbyImage = {
  childImageSharp: {
    fluid: any;
  };
};

const Image: React.FC<{
  image: GatsbyImage;
  title?: string;
}> = ({ image, title, ...props }) => {
  return <Img {...props} fluid={image.fluid || image.childImageSharp.fluid} title={title} />;
};

export default Image;
