import colors from "../colors";

export const listStyles = `
  & ul {
    list-style: none;
    padding-left: 24px;
    margin-top: 24px;
    // list-style-position: inside;
  }
  & li {
    line-height: 24px;
    color: ${colors.textPrimary};
    position: relative;
    margin: 20px 0px;
    display: block;
    &::before {
      content: "•";
      font-size: 40px;
      display: inline-block; /* Needed to add space between the bullet and the text */
      left: -24px;
      top: -2px;
      color: ${colors.green};
      vertical-align: middle;
      margin-right:.5rem;
    }
  }
`;
