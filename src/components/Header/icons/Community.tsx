import { Icon } from "@chakra-ui/react";

const CommunityIcon = () => (
  <Icon
    width="28px"
    height="28px"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="communityIcon"
  >
    <mask
      id="maskId"
      width="28"
      height="28"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6998 9.00005C10.6998 7.17751 12.1773 5.70005 13.9998 5.70005C15.8223 5.70005 17.2998 7.17751 17.2998 9.00005C17.2998 10.8226 15.8223 12.3 13.9998 12.3C12.1773 12.3 10.6998 10.8226 10.6998 9.00005ZM13.9998 4.30005C11.4041 4.30005 9.2998 6.40431 9.2998 9.00005C9.2998 11.5958 11.4041 13.7 13.9998 13.7C16.5955 13.7 18.6998 11.5958 18.6998 9.00005C18.6998 6.40431 16.5955 4.30005 13.9998 4.30005ZM11.9998 15.3C8.2995 15.3 5.2998 18.2997 5.2998 22C5.2998 22.9389 6.06092 23.7 6.9998 23.7H20.9998C21.9387 23.7 22.6998 22.9389 22.6998 22C22.6998 18.2997 19.7001 15.3 15.9998 15.3H11.9998ZM6.6998 22C6.6998 19.0729 9.0727 16.7 11.9998 16.7H15.9998C18.9269 16.7 21.2998 19.0729 21.2998 22C21.2998 22.1657 21.1655 22.3 20.9998 22.3H6.9998C6.83412 22.3 6.6998 22.1657 6.6998 22Z"
        fill="white"
      />
    </mask>
    <g mask="url(#maskId)">
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
      <linearGradient id="communityIconGradient" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FF5E5E"></stop>
        <stop offset="1" stopColor="#9121C2"></stop>
      </linearGradient>
    </defs>
  </Icon>
);

export default CommunityIcon;
