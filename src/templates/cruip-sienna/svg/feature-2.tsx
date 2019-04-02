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
      <path id="feature-2-a" d="M0 17h340v240H0z" />
      <path
        d="M104.361 69c5.222-9.45 8.194-20.1 8.194-31.66 0-36.45-19.827 0-56.278 0C19.827 37.34 0-25.017 0 11.434 0 29.047 2.36 50.913 8.91 69h95.451z"
        id="feature-2-b"
      />
      <linearGradient
        x1="50%"
        y1="0%"
        x2="4.666%"
        y2="38.561%"
        id="feature-2-c"
      >
        <stop stopColor="#FFE4A2" offset="0%" />
        <stop stopColor="#FFC570" offset="100%" />
      </linearGradient>
      <path id="feature-2-f" d="M169.569 25.569h80v80h-80z" />
      <filter
        x="-500%"
        y="-500%"
        width="1000%"
        height="1000%"
        filterUnits="objectBoundingBox"
        id="dropshadow-f-2"
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
    <g fill="none" fillRule="evenodd">
      <path
        d="M456.32 303.547c88.366 0-106.453-64.428-106.453-152.793C349.867 62.388 380.366 0 292 0S2.043 62.388 2.043 150.754c0 88.365 365.912 152.793 454.277 152.793z"
        fill="#F4F7FE"
      />
      <g transform="translate(70 23)">
        <use
          fill="#FFF"
          xlinkHref="#feature-2-a"
          style={{
            mixBlendMode: 'multiply',
            filter: 'url(#dropshadow-f-2)',
          }}
        />
        <use fill="#FFF" xlinkHref="#feature-2-a" />
        <path
          d="M31.625 123.62c33.137 0 18.98 85.493 18.98 52.356 0-33.137 100.43-91.442 67.293-91.442-20.35 0-77.099-9.132-117.898-8.503v47.317c10.468.547 21.558.272 31.625.272z"
          fill="#FFE5F1"
        />
        <g transform="translate(140 189)">
          <mask id="feature-2-d" fill="#fff">
            <use xlinkHref="#feature-2-b" />
          </mask>
          <use fill="#FF6DB1" xlinkHref="#feature-2-b" />
          <path
            d="M38 64C2.71 64-26 35.29-26 0S2.71-64 38-64v4C4.916-60-22-33.084-22 0S4.916 60 38 60 98 33.084 98 0h4c0 35.29-28.71 64-64 64zm0-20C13.738 44-6 24.262-6 0s19.738-44 44-44v4C15.944-40-2-22.056-2 0s17.944 40 40 40S78 22.056 78 0h4c0 24.262-19.738 44-44 44zm0-20C24.767 24 14 13.234 14 0s10.767-24 24-24v4c-11.028 0-20 8.972-20 20s8.972 20 20 20 20-8.972 20-20h4c0 13.234-10.767 24-24 24z"
            fill="url(#feature-2-c)"
            mask="url(#feature-2-d)"
          />
        </g>
        <g transform="rotate(45 209.569 65.569)">
          <use
            fill="#000"
            filter="url(#feature-2-e)"
            xlinkHref="#feature-2-f"
          />
          <use
            fill="#FFF"
            xlinkHref="#feature-2-f"
            style={{
              mixBlendMode: 'multiply',
              filter: 'url(#dropshadow-f-2)',
            }}
          />
          <use fill="#FFF" xlinkHref="#feature-2-f" />
        </g>
        <path
          fill="#6A72E4"
          d="M154.307 0l-32.023 5.12L98.602 29.28 92 61.86l7.24 32.212 24.385 22.215 31.416 9.954 33.082-7.08 21.539-25.772 11.769-32.35-6.125.919-9.676 29.102-20.67 22.63-29.919 6.482-29.196-7.732-21.477-21.331-9.361-29.25 7.244-30.474 23.175-20.831L154.419.165z"
        />
        <path
          fill="#A3A9F1"
          d="M155.041 107.506l-32.137-13.509-10.217-32.136 11.426-30.928 30.857-12.855.048 3.718-27.333 12.71-11.828 27.355 11.467 27.717 27.717 11.155 29.33-9.54 10.83-29.274 2.194.484-11.986 29.826z"
        />
        <path
          fill="#6A72E4"
          d="M155.041 85.403l-23.39-23.542 23.436-24.15-.298 3.456-20.48 20.694 20.732 20.874 19.406-21.089 3.877.432z"
        />
      </g>
    </g>
  </svg>
)
