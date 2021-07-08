import InternalLink from "components/InternalLink";
import ExternalLink from "components/ExternalLink";

interface MetaLinkProps {
  to: string;
  children: React.ReactNode;
  linkType: string;
}

const MetaLink = ({
  to,
  children,
  linkType,
  ...otherProps
}: MetaLinkProps): JSX.Element => {
  if (linkType === "internal") {
    return <InternalLink to={to} children={children} {...otherProps} />;
  }
  return <ExternalLink to={to} children={children} {...otherProps} />;
};

export default MetaLink;
