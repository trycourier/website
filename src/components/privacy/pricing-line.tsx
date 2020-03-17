import React, { useState } from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import colors from "../../colors";

const PricingLine = styled.section`
  ${tw`md:flex mt-8pt-24 pb-8 md:py-24 px-4 lg:px-0`}
`;

const trackW = "35em";
const trackBw = ".5em";
const trackH = "5em";
const trackIH = ".5em";
const trackShoBaseC = colors.white;

const TrackStyle = `
  box-sizing: border-box;
  border: solid ${trackBw} transparent;
  width: ${trackW}; height: ${trackH};
  box-shadow: 0 1px ${trackShoBaseC};
  background: $track-bg-over, $track-bg-base;
  background-size: 100% ${trackH} - 3*${trackIH};
`

const RangeStyle = `
  input[type='range'] {
    &, 
    &::-webkit-slider-runnable-track, 
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    position: absolute;
    padding: 0;
    width: ${trackW};
    background: red;
    cursor: pointer;

    &::-webkit-slider-runnable-track {
      position: relative;
      width: 35em; height: 5em;
    }
    &::-moz-range-track {
      @include track();
    }
    &::-ms-track {
      @include track();
      color: transparent;
    }
    
    &::-moz-range-progress {
      height: 5em;
      @include fill();
    }
  }
`

const PricingLineInfo = styled.div`
  ${tw`md:w-1/2 md:ml-8 md:mt-24 text-left`}
  color: ${colors.textPrimary};
`;

const pricingMatrix = [
  {
    perMonth: "$19",
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
    setRangeIdx(e.currentTarget.value);
  };

  return (
    <PricingLine>
      <PricingLineInfo>
        <h2>{pricingMatrix[rangeIdx - 1].perMonth} /mo</h2>
        <h5>+ $0.000039 per additional notification *</h5>
        <input type="range" min="1" max="5" value={rangeIdx} name="priceSection" onChange={handleRangeChange} />
        <h4>2.5M+ notifications/mo</h4>
      </PricingLineInfo>
    </PricingLine>
  );
};

export default PricingLineComponent;
