import React, { useState } from 'react'
import { Icon } from "@chakra-ui/react";

const APIReferenceIcon = () => {
    return (
      <Icon width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" id="apiReferenceIcon">
      <mask id="maskcodeId" x="0" y="0" maskUnits="userSpaceOnUse">
            <path
              d="M9 19L4.05025 14.0503L9 9.10051"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 9L23.9497 13.9497L19 18.8995"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="15.8868"
              y1="8.87659"
              x2="11.916"
              y2="18.7047"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
          <g mask="url(#maskcodeId)">
            <rect width="28" height="28" fill="currentColor"></rect>
            <rect
              className="gradientIcon"
              width="28"
              height="28"
              x="0"
              y="0"
              fill="#2C1338"
            ></rect>
          </g>
          <defs>
            <linearGradient id="apiReferenceIconGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF5E5E"></stop>
              <stop offset="1" stopColor="#9121C2"></stop>
            </linearGradient>
          </defs>
      </Icon>
  )
}

export default APIReferenceIcon;