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
  border: solid 1px rgba(#626262, .32);
  padding: .25em;
  width: 20px; height: 20px;
  border-radius: .5em;
  box-shadow: 0 .5em .25em -1px rgba(#727272, .32);
  cursor: ew-resize;
`

const TrackStyle = `
  box-sizing: border-box;
  border: solid ${trackBw} transparent;
  width: ${trackW}; height: ${trackH};
  box-shadow: 0 1px ${trackShoBaseC};
  background: #CCC, $EEE;
  background-size: 100% ${trackH} - 3*${trackIH};
`

// &, 
// &::-webkit-slider-runnable-track, 
// &::-webkit-slider-thumb {
//   -webkit-appearance: none;
// }
const RangeStyle = `
  input[type='range'] {
    padding: 0;
    width: 100%;
    height: 50px;
    opacity: .65;
    background: $track-bg-mid-cover, $track-bg-mid-sh, $track-bg-mid-base;
    background-repeat: repeat-x;
    background-position: 0 50%;
    background-size: $track-u $track-ih;
    font-size: 1em;
    cursor: pointer;

    &::-webkit-slider-runnable-track {
      position: relative;
      width: 35em; height: 5em;
    }
    &::-moz-range-track {
      ${TrackStyle}
    }
    &::-ms-track {
      ${TrackStyle}
      color: transparent;
    }
    
    &::-moz-range-progress {
      height: 5em;
      @include fill();
    }

    &::-webkit-slider-thumb {
      position: relative;
      z-index: 2;
      margin-top: 10px;
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
    cummulative: "100K+"
  },
  {
    perMonth: "$59",
    additional: "$0.0009",
    cummulative: "500K+"
  },
  {
    perMonth: "$99",
    additional: "$0.0009",
    cummulative: "1M+"
  },
  {
    perMonth: "$199",
    additional: "$0.00039",
    cummulative: "2.5M+"
  },
  {
    perMonth: "$499",
    additional: "$0.00039",
    cummulative: "5M+"
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
