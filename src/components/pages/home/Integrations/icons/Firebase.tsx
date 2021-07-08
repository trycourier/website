import { Icon } from "@chakra-ui/react";

const FirebaseIcon = ({ whiteFill }: { whiteFill?: boolean }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="21px"
    height="28px"
    fill="none"
    viewBox="0 0 21 28"
  >
    <path
      d="M13.5542 9.7521L10.8517 12.2665L8.34406 7.2082L9.64174 4.29895C9.97924 3.70832 10.5057 3.71507 10.8348 4.29895L13.5542 9.7521Z"
      fill={whiteFill ? "#FFFFFF" : "#FFA000"}
    />
    <path
      d="M8.34402 7.20822L10.8516 12.2665L0.751953 21.6617L8.34402 7.20822Z"
      fill={whiteFill ? "#FFF" : "#F57F17"}
    />
    <path
      d="M16.5098 5.9088C16.9925 5.44474 17.492 5.60337 17.6194 6.26065L20.2485 21.5367L11.5342 26.768C11.2305 26.9367 10.4205 27.0093 10.4205 27.0093C10.4205 27.0093 9.68305 26.9216 9.40208 26.7562L0.751953 21.6616L16.5098 5.9088Z"
      fill={whiteFill ? "#FFF" : "#FFCA28"}
    />
    <path
      d="M8.34403 7.20818L0.752808 21.6616L4.13371 0.538334C4.25859 -0.119791 4.63321 -0.183072 4.96734 0.397428L8.34403 7.20818Z"
      fill={whiteFill ? "#FFFFFF" : "#FFA000"}
    />
  </Icon>
);

export default FirebaseIcon;
