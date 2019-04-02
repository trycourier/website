import React from 'react'

export default () => (
  <svg
    width="528"
    height="401"
    viewBox="0 0 528 401"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        x="-500%"
        y="-500%"
        width="1000%"
        height="1000%"
        filterUnits="objectBoundingBox"
        id="dropshadow-media"
      >
        <feOffset dy="16" in="SourceAlpha" result="shadowOffsetOuter" />
        <feGaussianBlur
          stdDeviation="24"
          in="shadowOffsetOuter"
          result="shadowBlurOuter"
        />
        <feColorMatrix
          values="0 0 0 0 0.06 0 0 0 0 0.13 0 0 0 0 0.34 0 0 0 0.14 0"
          in="shadowBlurOuter"
        />
      </filter>
    </defs>
    <path
      fill="#FFF"
      d="M0 52L528 .832v399.336L0 349z"
      style={{
        mixBlendMode: 'multiply',
        filter: 'url(#dropshadow-media)',
      }}
    />
    <path fill="#FFF" d="M0 52L528 .832v399.336L0 349z" />
  </svg>
)
