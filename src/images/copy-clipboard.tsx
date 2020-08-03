import React from "react";
import { SVGProps } from "./types";

const SVG: React.FunctionComponent<SVGProps> = () => (
  <svg width="32" height="32" viewBox="0 0 32 32">
    <g>
      <path
        d="M18,4V16a2,2,0,0,1-2,2H4a2,2,0,0,0,2,2H16a4,4,0,0,0,4-4V6A2,2,0,0,0,18,4Z"
        transform="translate(5 7)"
        fill="#9D3789"
      />
      <g transform="translate(6 4)">
        <path
          d="M8.76,0H2A2,2,0,0,0,0,2V18a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V7.24a2.98,2.98,0,0,0-.88-2.119L10.88.88A2.981,2.981,0,0,0,8.76,0ZM2,18V2H8V7A1,1,0,0,0,9,8h5V18Z"
          transform="translate(0 0)"
          fill="#9D3789"
        />
      </g>
      <g transform="translate(-1 -1)">
        <path
          d="M12,15h6a1,1,0,0,1,1,1h0a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1h0A1,1,0,0,1,12,15Z"
          fill="#9D3789"
        />
        <path
          d="M12,19h6a1,1,0,0,1,1,1h0a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1h0A1,1,0,0,1,12,19Z"
          fill="#9D3789"
        />
      </g>
    </g>
  </svg>
);

export default SVG;