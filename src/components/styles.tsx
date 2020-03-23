import colors from "../colors";

export const listStyles = `
  & ul {
    list-style: none;
    padding-left: 24px;
  }
  & li {
    line-height: 24px;
    color: ${colors.textPrimary};
    position: relative;
    margin: 36px 0px;
    &::before {
      content: "•";
      font-size: 32px;
      position: absolute;
      left: -24px;
      top: -2px;
      color: ${colors.green};
    }
  }
`;
