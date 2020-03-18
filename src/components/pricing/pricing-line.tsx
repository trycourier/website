import React, { useState } from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

const trackW = "35em";
const trackBw = ".5em";
const trackH = "5em";
const trackIH = ".5em";
const trackShoBaseC = colors.white;

const ThumbStyle = `
  box-sizing: border-box;
  border: solid 5px ${colors.green};
  padding: 4px;
  width: 28px; height: 28px;
  border-radius: 9999px;
  background: ${colors.white};
  box-shadow: 0 .5em .25em -1px ${colors.berryglass};
  cursor: ew-resize;
`

const TrackStyle = `
  box-sizing: border-box;
  border: solid ${trackBw} transparent;
  width: ${trackW}; 
  height: ${trackH};
  box-shadow: 0 1px ${trackShoBaseC};
  background: #CCC, $EEE;
`

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
    height: 5px;
    background: ${colors.green};
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
`

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
    }
  }
  ${RangeStyle}
`;

const PricingLineInfo = styled.div`
  ${tw`w-full text-left`}
`;

/*
10,000 – FREE
250,000 – $99/mo
1,000,000 – $499/mo
+$0.0006 / notification after the first million
*/

const pricingMatrix = [
  {
    perMonth: "$0",
    additional: "$0.001",
    cummulative: "10K"
  },
  {
    perMonth: "$19",
    additional: "$0.0009",
    cummulative: "50K"
  },
  {
    perMonth: "$99",
    additional: "$0.00075",
    cummulative: "250K"
  },
  {
    perMonth: "$199",
    additional: "$0.0006",
    cummulative: "750K"
  },
  {
    perMonth: "$499",
    additional: "$0.00039",
    cummulative: "1M+"
  },
]

const PricingLineComponent: React.FC = () => {
  const [rangeIdx, setRangeIdx] = useState(3);
  const handleRangeChange = (e:React.FormEvent) => {
    if (e.currentTarget) {
      setRangeIdx(e.currentTarget.value);
    }
  };

  return (
    <PricingLine>
      <PricingLineInfo>
        <h4>{pricingMatrix[rangeIdx - 1].perMonth} /mo</h4>
        <h5>+ {pricingMatrix[rangeIdx - 1].additional} per additional notification *</h5>
        <input type="range" min="1" max="5" value={rangeIdx} name="priceSection" onChange={handleRangeChange} />
        <h5><strong>{pricingMatrix[rangeIdx - 1].cummulative} notifications/mo</strong></h5>
      </PricingLineInfo>
    </PricingLine>
  );
};

export default PricingLineComponent;
