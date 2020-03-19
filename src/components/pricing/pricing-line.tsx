import React, { useCallback, useState } from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

import ProgressBar from "./progress-bar";

const trackW = "100%";
const trackBw = "5px";
const trackH = "5px";
const trackShoBaseC = colors.white;

const ThumbStyle = `
  box-sizing: border-box;
  border: solid 5px ${colors.green};
  padding: 4px;
  margin-top: 2px;
  width: 28px; 
  height: 28px;
  border-radius: 9999px;
  background: ${colors.white};
  box-shadow: 0 5px 8px ${colors.green};
  cursor: ew-resize;
`;

const TrackStyle = `
  box-sizing: border-box;
  border: solid ${trackBw} transparent;
  width: ${trackW}; 
  height: ${trackH};
  box-shadow: 0 1px ${trackShoBaseC};
  background: #CCC, $EEE;
`;

const RangeStyle = `
  input[type='range'] {
    &, 
    &::-webkit-slider-runnable-track, 
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    outline: none;
    margin-bottom: 36px;
    width: 100%;
    height: 1px;
    background: transparent;
    border-bottom: 4px dotted #CCC;
    font-size: 1em;
    cursor: pointer;

    &::-webkit-slider-runnable-track {
      position: relative;
      height: 5px;
    }
    &::-moz-range-track {
      ${TrackStyle}
    }
    &::-ms-track {
      ${TrackStyle}
      color: transparent;
    }
    
    &::-moz-range-progress {
      
    }

    &::-webkit-slider-thumb {
      position: relative;
      z-index: 2;
      top: -10px;
      ${ThumbStyle}
    }
    &::-moz-range-thumb {
      ${ThumbStyle}
    }
    &::-ms-thumb {
      ${ThumbStyle}
    }
  }
`;

const PricingLine = styled.section`
  ${tw`md:flex`}
  color: ${colors.textPrimary};
  & h4 {
    font-size: 48px;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
  & h5 {
    color: ${colors.textSecondary};
    margin-top: 0px;
    & strong {
      color: ${colors.textPrimary};
      font-size: 16px;
      font-weight: 600;
      position: relative;
      top: -16px;
    }
  }
  ${RangeStyle}
`;

const PricingLineInfo = styled.div`
  ${tw`w-full text-left`}
`;

const pricingMatrix = [
  {
    perMonth: "$0",
    additional: "$0.001",
    cummulative: "10K",
  },
  {
    perMonth: "$19",
    additional: "$0.0009",
    cummulative: "50K",
  },
  {
    perMonth: "$99",
    additional: "$0.00075",
    cummulative: "250K",
  },
  {
    perMonth: "$199",
    additional: "$0.0006",
    cummulative: "750K",
  },
  {
    perMonth: "$499",
    additional: "$0.00039",
    cummulative: "1M+",
  },
];

const PricingLineComponent: React.FC = () => {
  const [rangeIdx, setRangeIdx] = useState(3);
  const [width, setWidth] = useState(0);
  const measuredRef = useCallback(n => {
    if (n !== null) {
      setWidth(n.getBoundingClientRect().width);
    }
  }, []);

  const handleRangeChange = (e: React.FormEvent) => {
    if (e.currentTarget) {
      setRangeIdx(e.currentTarget.value);
    }
  };

  return (
    <PricingLine>
      <PricingLineInfo ref={measuredRef}>
        <h4>{pricingMatrix[rangeIdx - 1].perMonth} /mo</h4>
        <h5>
          + {pricingMatrix[rangeIdx - 1].additional} per additional notification
          *
        </h5>
        <input
          type="range"
          min="1"
          max="5"
          value={rangeIdx}
          name="priceSection"
          onChange={handleRangeChange}
        />
        <ProgressBar px={((rangeIdx - 1) / 4) * width} tick={rangeIdx - 1}/>
        <h5>
          <strong>
            {pricingMatrix[rangeIdx - 1].cummulative} notifications/mo
          </strong>
        </h5>
      </PricingLineInfo>
    </PricingLine>
  );
};

export default PricingLineComponent;
