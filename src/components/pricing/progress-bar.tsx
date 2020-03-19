import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";
import Tick from "../../images/progress-marker.svg";
import UnTick from "../../images/progress-potential.svg";

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

const ProgressInActive = styled.div`
  position: absolute;
  width: 75%;
  height: 5px;
  left: 0px;
  background: #CCC;
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

const tickPos = [245, 466, 687];

const ProgressBarComponent: React.FC<{ px?: number; tick?: number, fullWidth?: number }> = ({
  px = 0,
  tick = 0,
  fullWidth = 0,
}) => {
  let ticks = [];
  let unticks = new Array(3).fill("!");
  // (dx * (idx + 1)) - ((idx * idx * 8) + 20),
  const dx = fullWidth / 4;

  console.log(">", dx, fullWidth);
  if(tick - 1 > 0) {
    ticks = new Array(tick - 1).fill("!");
  }

  return (
    <ProgressBar>
      <ProgressTrack>
        <ProgressInActive />
        <ProgressActive px={px} />
      </ProgressTrack>

      <Ticks>
        {unticks.length ? tickPos.map(pos => (
          <img
            src={UnTick}
            style={{
              width: 20,
              height: 20,
              position: "relative",
              left: pos,
              top: -12,
              zIndex: 1
            }}
          />
        )): null}
      </Ticks>

      <Ticks>
        {ticks.length ? ticks.map((t, idx) => (
          <img
            src={Tick}
            alt={t}
            style={{
              width: 20,
              height: 20,
              position: "relative",
              left: tickPos[idx],
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
