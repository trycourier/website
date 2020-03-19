import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";
import Tick from "../../images/progress-marker.svg";

const ProgressBar = styled.section`
  ${tw`relative`}
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
`;

const ProgressActive = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: -100%;
  background: ${colors.green};
  transition-duration: 200ms;
  transform: translate3d(${props => props.px || 0}px, 0, 0);
`;

const Ticks = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
`;

const ProgressBarComponent: React.FC<{ px?: number; tick?: number, fullWidth?: number }> = ({
  px = 0,
  tick = 0,
  fullWidth = 0,
}) => {
  let ticks = [];
  const dx = fullWidth / 4;
  if(tick - 1 > 0) {
    ticks = new Array(tick - 1).fill("!");
  }
  return (
    <ProgressBar>
      <ProgressTrack>
        <ProgressActive px={px} />
      </ProgressTrack>
      <Ticks px={px}>
        {ticks.length ? ticks.map((t, idx) => (
          <img
            src={Tick}
            alt={t}
            style={{
              width: 20,
              height: 20,
              position: "relative",
              left: (dx * (idx + 1)) - (12 * (idx + 1)),
              top: -12,
              zIndex: 5
            }}
          />
        )): null}
      </Ticks>
    </ProgressBar>
  );
};

export default ProgressBarComponent;
