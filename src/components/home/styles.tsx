import colors from "../../colors";
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
  }`;