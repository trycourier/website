import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

const ProgressBar = styled.section`
  ${tw`md:relative`}
  top: -40px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    background: ${colors.green};
    width: 5px;
    height: 15px;
    left: -10px;
    top: -5px;
  }
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 5px;
  overflow: hidden;
  background: transparent;
`

const ProgressActive = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: -100%;
  background: ${colors.green};
  transform: translate3d(${props => props.px || 0 }px, 0,0);
`


const ProgressBarComponent: React.FC<{ px?: number }> = ({ px = 0 }) => {
  return (
    <ProgressBar>
      <ProgressTrack>
        <ProgressActive px={px}/>
      </ProgressTrack>
    </ProgressBar>
  );
};

export default ProgressBarComponent;
