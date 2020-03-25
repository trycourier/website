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
    left: 0px;
    top: -5px;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: white;
    width: 5px;
    height: 15px;
    left: 5px;
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
  background: #ccc;
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

const Marker = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  top: -12px;
  zindex: 1;
`;

// const tickPos = [245, 466, 687];
// const deltas = [3, 30, 57]
// const wrongTickPos = [248, 496, 744];
// const deltas = [-8, -16, -24]
// const rightTickPos = [237, 450, 663];

const ProgressBarComponent: React.FC<{
  px?: number;
  tick?: number;
  fullWidth?: number;
  handleRangeClick?: any;
}> = ({ px = 0, tick = 0, fullWidth = 0, handleRangeClick }) => {
  let ticks = [];
  let unticks = [];
  const dx = fullWidth / 4;

  // this needs to be actually solved
  for (let i = 1; i <= tick; i++) {
    const delta = i % 2 === 0 ? i + i : 0;
    const marks = i - delta + i * dx - 4 * (i * i) - (i - 1) * 12;
    ticks.push(marks);
  }
  for (let i = 1; i <= 3; i++) {
    const delta = i % 2 === 0 ? i + i : 0;
    const marks = i - delta + i * dx - 4 * (i * i) - (i - 1) * 12;
    unticks.push(marks);
  }

  return (
    <ProgressBar>
      <ProgressTrack>
        <ProgressInActive />
        <ProgressActive px={px} />
      </ProgressTrack>

      <Ticks>
        {unticks.length
          ? unticks.map((pos, idx) => (
              <Marker
                key={idx}
                src={UnTick}
                alt="-"
                style={{ left: pos }}
                onClick={() => handleRangeClick(idx + 2)}
              />
            ))
          : null}
      </Ticks>

      <Ticks>
        {ticks.length
          ? ticks.map((pos, idx) => (
              <Marker
                key={idx}
                src={Tick}
                alt="+"
                style={{ left: pos }}
                onClick={() => handleRangeClick(idx + 2)}
              />
            ))
          : null}
      </Ticks>
    </ProgressBar>
  );
};

export default ProgressBarComponent;
