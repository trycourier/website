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
      <path id="features-3-a" d="M0 0h320v240H0z" />
      <filter
        x="-500%"
        y="-500%"
        width="1000%"
        height="1000%"
        filterUnits="objectBoundingBox"
        id="dropshadow-f-3"
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
      <g fill="#F4F7FE">
        <path d="M465.727 112.934c33.137 0-5.727-64.359-5.727-97.496s-20.974-2.617-54.111-2.617S340-17.699 340 15.438s92.59 97.496 125.727 97.496zM454.277 319.202c88.366 0-106.453-64.427-106.453-152.793S0 41.866 0 166.409s365.912 152.793 454.277 152.793z" />
      </g>
      <g transform="translate(80 40)">
        <use
          fill="#FFF"
          xlinkHref="#features-3-a"
          style={{
            mixBlendMode: 'multiply',
            filter: 'url(#dropshadow-f-2)',
          }}
        />
        <use fill="#FFF" xlinkHref="#features-3-a" />
        <path
          d="M131.594 185.875c33.137 0-88.594-28.109-88.594-61.246 0-22.23-19.932-41.805-43-52.281v75.216c33.425 22.264 106.39 38.311 131.594 38.311z"
          fill="#FFF6E7"
        />
        <path
          d="M320 62.182c-27.86.37-87.107 29.127-111.969 29.127-33.137 0 56.035 22.472 56.035 55.609 0 19.031 26.93 26.733 55.934 29.84V62.182z"
          fill="#FFC570"
        />
      </g>
      <path
        fill="#FFF"
        d="M216 24h80v80h-80z"
        style={{
          mixBlendMode: 'multiply',
          filter: 'url(#dropshadow-f-2)',
        }}
      />
      <path fill="#FFF" d="M216 24h80v80h-80z" />
      <path
        d="M267 85h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
        fill="#5FFAD0"
      />
      <path
        d="M126 197.156l23.039 15.424L173.495 225l23.756-13.614L223 198.298l-12.63-5.63 5.38 4.892-21.271 12.342-20.984 13.869-21.457-13.07-21.796-12.346 10.232-4.303L137.77 191 126 197.156zm82.883-5.15l1.486.662-1.087-.987-.399.325z"
        fill="#82DDFC"
      />
      <path
        fill="#0181F6"
        d="M206.966 215.77l8.251 3.372-21.268 11.975-20.62 13.946-20.588-14.002-20.915-12.222 6.688-4.057-1.038-1.43L124 220.1l25.242 13.641L173.329 249l23.105-16.848L221 219.166 209.293 213zM149.437 163.074L125 176.071l22.751 15.829 24.857 13.1 24.829-13.168L222 176.072l-24.713-15.532-24.68-11.54-23.17 14.074zm3.109 23.94l-21.518-10.943 21.488-11.009 20.092-12.469 20.238 12.238 23.199 11.24-21.69 13.775-21.747 11.489-20.062-14.32z"
      />
    </g>
  </svg>
)
