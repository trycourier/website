import Link from "next/link";

interface InternalLinkProps {
  to: string;
  children: React.ReactNode;
}

const InternalLink = ({ to, children, ...otherProps }: InternalLinkProps) => {
  return (
    <Link href={to} {...otherProps}>
      <a>{children}</a>
    </Link>
  );
};

export default InternalLink;
