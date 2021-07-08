import { Icon } from "@chakra-ui/react";

const SendGridIcon = ({ whiteFill }: { whiteFill?: boolean }) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        d="M9.84497 0.524841V9.47773H0.89209V27.3835H18.7978V18.4306H27.7507V0.524841H9.84497Z"
        fill="white"
      />
      <path
        d="M0.891357 9.47765V18.4305V9.47765ZM0.891357 9.47765H9.84424H0.891357Z"
        fill={whiteFill ? "#FFF" : "#AEE1F3"}
      />
      <path
        d="M0.891357 9.47765V18.4305H9.84424V27.3834H18.7971V18.4305H9.84424V9.47765H0.891357Z"
        fill="white"
      />
      <path
        d="M0.891357 9.47765V18.4305H9.84424V27.3834H18.7971V18.4305H9.84424V9.47765H0.891357Z"
        fill={whiteFill ? "#FFF" : "#AEE1F3"}
      />
      <path
        d="M9.84424 18.4305H0.891357V27.3834H9.84424V18.4305Z"
        fill={whiteFill ? "#FFF" : "#2E7BBF"}
      />
      <path
        d="M18.7974 0.52478H9.84448H18.7974ZM27.7502 18.4305V9.47766V18.4305Z"
        fill={whiteFill ? "#FFFF" : "#00B3E3"}
      />
      <path
        d="M27.7502 18.4305H18.7974V9.47766H9.84448V0.52478H18.7974V9.47766H27.7502V18.4305Z"
        fill="white"
      />
      <path
        d="M27.7502 18.4305H18.7974V9.47766H9.84448V0.52478H18.7974V9.47766H27.7502V18.4305Z"
        fill={whiteFill ? "#FFFF" : "#00B3E3"}
      />
      <path
        d="M18.7976 9.47765H9.84473V18.4305H18.7976V9.47765Z"
        fill="white"
      />
      <path
        d="M18.7976 9.47765H9.84473V18.4305H18.7976V9.47765Z"
        fill={whiteFill ? "#FFFF" : "#00B3E3"}
      />
      <path
        d="M27.7502 0.52478H18.7974V9.47766H27.7502V0.52478Z"
        fill={whiteFill ? "#FFF" : "#2E7BBF"}
      />
    </Icon>
  );
};

export default SendGridIcon;
