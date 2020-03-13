import colors from "../colors";

export const navStyles = `
  .sticky-active nav { 
    background: ${colors.berry};
    box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
  }
`;

export const listStyles = `
  & ul {
    list-style: none;
    padding-left: 0;
  }
  & li {
    line-height: 48px;
    &::before {
      content: "•";
      font-size: 32px;
      margin-right: 12px;
      color: ${colors.green};
    }
  }
`;