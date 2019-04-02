import React from 'react'

export default () => (
  <svg
    width="480"
    height="320"
    viewBox="0 0 480 320"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path id="features-1-a" d="M13 0h340v240H13z" />
      <linearGradient
        x1="50%"
        y1="0%"
        x2="4.666%"
        y2="38.561%"
        id="features-1-b"
      >
        <stop stopColor="#FFE4A2" offset="0%" />
        <stop stopColor="#FFC570" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="features-1-c">
        <stop stopColor="#2EF8C1" offset="0%" />
        <stop stopColor="#5FFAD0" offset="100%" />
      </linearGradient>
      <filter
        id="dropshadow-1"
        x="-500%"
        y="-500%"
        width="1000%"
        height="1000%"
      >
        <feDropShadow
          dx="0"
          dy="16"
          stdDeviation="24"
          floodColor="#E7EBF6"
          floodOpacity="1"
        />
      </filter>
      <filter
        x="-500%"
        y="-500%"
        width="1000%"
        height="1000%"
        filterUnits="objectBoundingBox"
        id="dropshadow-f-1"
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
    <g fill="#F4F7FE">
      <path d="M281.984 251.89c88.366 0 65.883-12.77 65.883-101.136S378.366 0 290 0 .043 62.388.043 150.754c0 88.365 193.576 101.137 281.941 101.137z" />
      <path d="M382.88 319.917c33.137 0 96.563-56.96 96.563-90.098 0-33.137-82.61-7.086-115.746-7.086-33.137 0-27.301-5.2-27.301 27.938 0 33.137 13.347 69.246 46.484 69.246z" />
    </g>
    <g transform="translate(57 40)">
      <use
        fill="#FFF"
        xlinkHref="#features-1-a"
        style={{
          mixBlendMode: 'multiply',
          filter: 'url(#dropshadow-f-1)',
        }}
      />
      <use fill="#FFF" xlinkHref="#features-1-a" />
      <path
        d="M41.53 58.446C31.926 59.796 22.195 66.22 13 75.888v76.918c8.824-10.661 18.335-18.522 28.53-19.954 43.753-6.15 103.475 17.59 70.166 0-33.308-17.59-26.413-80.555-70.165-74.406z"
        fill="#FF9083"
      />
      <path
        d="M350.002 75.426c-21.168-10.785-64.642 27.763-75.428 48.93-10.785 21.168 39.112-19.155 60.28-8.37 8.496 4.329 14.02 11.38 18.146 16.9V77.136a42.51 42.51 0 0 0-2.998-1.709z"
        fill="#FFE9E7"
      />
      <path
        d="M101.252 71.947l-15.99 3.362-13.844 9.55-16.191-2.896-16.002.685-11.23 16.377-11.617 15.88c.897-.248-.229-.248-3.378 0v4.63c2.796-.056 4.72-.056 5.771 0l13.016-15.299 10.25-16.311 14.61-.043 14.869-2.487 15.086-3.598 14.86-4.954 13.644-6.775 14.439 9.359 14.47 9.994 15.46 6.435 15.691-3.123 14.356-9.018 16.961-4.307-2.498-3.217-14.348 6.003-15.466 4.731-14.526 6.572-14.131-10.298-16.061-7.536L115.623 65l-14.371 6.947z"
        fill="url(#features-1-b)"
      />
    </g>
    <circle
      fill="#FFF"
      cx="293"
      cy="256"
      r="40"
      style={{
        mixBlendMode: 'multiply',
        filter: 'url(#dropshadow-f-1)',
      }}
    />
    <circle fill="#FFF" cx="293" cy="256" r="40" />
    <path
      d="M261.087 181l-25.875 26.383-27.797 22.242L187 258.198l48.427.732-9.741 46.869 26.914-23.553 20.281-29.412 28.216-25.869-48.446-.373L261.087 181zm-34.554 45.736l24.909-28.358-7.837 35.816 45.929-1.117-31.869 26.36-25.067 33.697 8.631-38.989-44.945.239 30.249-27.648z"
      fill="url(#features-1-c)"
    />
  </svg>
)
