import { Icon } from "@chakra-ui/react";

const RightArrowIcon = ({ gradient }: { gradient?: boolean }) => {
  const stopColor = gradient ? "#FF5E5E" : "#9121C2";
  const stroke = gradient ? "url(#paint0_linear)" : "#9121C2";
  return (
    <Icon width="1em" height="1em" fill="none" viewBox="0 0 18 14">
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 6l5.474 7L17 1"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="17"
          x2="1"
          y1="7"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9121C2"></stop>
          <stop offset="1" stop-color={stopColor}></stop>
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default RightArrowIcon;
