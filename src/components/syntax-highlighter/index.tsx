import React from "react";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import ClipboardCopy from "../clipboard-copy";
import { Controlled as CodeMirror } from "react-codemirror2";
import { ISyntaxHighlighterProps } from "./types";

if (typeof window !== "undefined") {
  require("codemirror/mode/javascript/javascript");
  require("codemirror/mode/shell/shell");
  require("codemirror/mode/python/python");
  require("codemirror/mode/php/php");
  require("codemirror/mode/go/go");
  require("codemirror/mode/ruby/ruby");
  require("codemirror/mode/css/css");
  require("codemirror/mode/htmlmixed/htmlmixed");
  require("codemirror/lib/codemirror.css");
  require("codemirror/theme/material-palenight.css");
}

const Styled = styled.div`
  position: relative;
  font-size: 14px;
  &,
  .react-codemirror2 {
    width: 100%;
    height: 100%;
  }
  &.hasHeader .react-codemirror2 {
    height: Calc(100% - 32px);
  }
  .CodeMirror-linenumber {
    color: white;
  }
  .CodeMirror {
    background: #24324b;
    ${tw`shadow-md  h-full`}
    .CodeMirror-sizer {
      min-width: 700px;
    }
    .cm-error {
      color: white !important;
    }
    .cm-atom,
    .cm-tag,
    .cm-number {
      ${tw`text-success`}
    }
    .cm-comment {
      color: #ccc;
    }
  }
  .clipboard-copy {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    z-index: 3;
    svg g path,
    svg g rect {
      fill: white;
    }
  }
  &.hasHeader {
    .header {
      background-color: #485c80;
      padding: 8px 12px;
      height: 32px;
      font-size: 14px;
      color: rgb(213, 213, 213);
    }
    .CodeMirror {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .clipboard-copy {
      top: 3px;
      svg rect:not(:first-child) {
        fill: #485c80;
      }
    }
  }
`;

const SyntaxHighlighter: React.FunctionComponent<ISyntaxHighlighterProps> = ({
  title,
  language,
  code,
  onChange,
}) => {
  const handleOnChange = (_editor: any, _data: any, value: string) => {
    if (!onChange) {
      return;
    }

    onChange(value);
  };

  const copyValue = code.trim();

  return (
    <Styled>
      <ClipboardCopy value={copyValue} />
      <CodeMirror
        value={code}
        onBeforeChange={handleOnChange}
        options={{
          mode: language,
          theme: "material-palenight",
          lineNumbers: true,
          lineWrapping: true,
        }}
        onChange={handleOnChange}
      />
      <p>
        <i>{title}</i>
      </p>
    </Styled>
  );
};

export default SyntaxHighlighter;
