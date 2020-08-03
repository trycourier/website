import clipboardCopy from "clipboard-copy";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import CopyImage from "../../images/copy-clipboard";
//import Button from "../button";
const Button = styled.button`
  ${tw`border-2 border-solid outline-none whitespace-no-wrap border-transparent`}

  &.link {
    font-size: inherit;
    color: inherit;
    line-height: inherit;
    font-family: inherit;
    ${tw`bg-transparent border-none p-0`}
  }
`
import Tooltip from "../tooltip";
import { ClipboardCopyProps, PickATextFunction } from "./types";


const StyledButton = styled(Button)`
  max-width: 100%;
  display: flex;

  & > span {
    display: flex;
    max-width: 100%;

    & > span {
      flex: 0 1;
      min-width: Calc(100% - 32px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & > svg {
      flex: 0 0 32px;
    }
  }
`;

const pickAText: PickATextFunction = (copySuccess) => {
  return copySuccess ? "Copied To Clipboard" : "Copy To Clipboard";
};

const ClipboardCopy: React.FunctionComponent<ClipboardCopyProps> = ({
  children,
  theme = "light",
  value,
}) => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const handleCopyToClipboard = async () => {
    await clipboardCopy(value);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2500);
  };

  const text = pickAText(copySuccess);
  const inverseTheme = theme === "light" ? "dark" : "light";

  return (
    <StyledButton className="link clipboard-copy" onClick={handleCopyToClipboard}>
      <Tooltip content={text} theme={copySuccess ? "success" : inverseTheme}>
        <span>
          <span>{children}</span>
          <CopyImage />
        </span>
      </Tooltip>
    </StyledButton>
  );
};

export default ClipboardCopy;
