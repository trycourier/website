import React from 'react'

export default () => (
  <svg
    width="44"
    height="32"
    viewBox="0 0 44 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Sienna</title>
    <defs>
      <linearGradient
        x1="97.927%"
        y1="0%"
        x2="1.669%"
        y2="0%"
        id="logo-footer-a"
      >
        <stop stopColor="#82DDFC" offset="0%" />
        <stop stopColor="#0181F6" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="96.64%"
        y1="1.497%"
        x2="0%"
        y2="44.56%"
        id="logo-footer-b"
      >
        <stop stopColor="#A3A9F1" offset="0%" />
        <stop stopColor="#6A72E4" offset="99.203%" />
        <stop stopColor="#6A6FEC" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M0 16h8a8 8 0 1 0 16 0h8c0 8.837-7.163 16-16 16S0 24.837 0 16z"
      fill="url(#logo-footer-a)"
    />
    <path
      d="M12 0h8a8 8 0 1 0 16 0h8c0 8.837-7.163 16-16 16S12 8.837 12 0z"
      fill="url(#logo-footer-b)"
      transform="rotate(180 28 8)"
    />
  </svg>
)
