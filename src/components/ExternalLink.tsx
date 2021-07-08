import { ReactNode } from "react";

interface ExternalLinkProps {
  to: string;
  children: ReactNode;
}

const ExternalLink = ({ to, children, ...otherProps }: ExternalLinkProps) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      {...otherProps}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
