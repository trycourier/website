import { Icon } from "@chakra-ui/react";

const DocumentationIcon = () => (
    <Icon width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" id="documentationIcon">
    <mask id="maskDocId" x="0" y="0" maskUnits="userSpaceOnUse">
        <rect
        x="6"
        y="4"
        width="16"
        height="19"
        rx="2"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <line
        x1="9.7"
        y1="8.3"
        x2="14.3"
        y2="8.3"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <line
        x1="9.7"
        y1="12.3"
        x2="18.3"
        y2="12.3"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
        <line
        x1="9.7"
        y1="16.3"
        x2="18.3"
        y2="16.3"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </mask>
    <g mask="url(#maskDocId)">
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
        <linearGradient id="documentationIconGradient" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FF5E5E"></stop>
        <stop offset="1" stopColor="#9121C2"></stop>
        </linearGradient>
    </defs>
    </Icon>
)

export default DocumentationIcon;