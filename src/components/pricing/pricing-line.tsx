import React, { useCallback, useEffect, useState } from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import { pricingMatrix } from "../../data/pricing";
import colors from "../../colors";

import ProgressBar from "./progress-bar";

import { Desktop, Mobile } from "../container";

const trackW = "100%";
const trackBw = "5px";
const trackH = "5px";
const trackShoBaseC = colors.white;

const ThumbStyle = `
  box-sizing: border-box;
  border: solid 5px ${colors.green};
  padding: 4px;
  width: 28px; 
  height: 28px;
  border-radius: 9999px;
  background: ${colors.white};
  box-shadow: 0 5px 8px ${colors.green};
  cursor: ew-resize;
  position: relative;
  z-index: 2;
  top: -12px;
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
    font-size: 1em;
    cursor: pointer;

    @-moz-document url-prefix() {
      position: relative;
      z-index: 5;
      height: 4px;
      background-size: 4px 4px;
    }

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
      ${TrackStyle}
    }

    &::-webkit-slider-thumb {
      ${ThumbStyle}
    }
    &::-moz-range-thumb {
      ${ThumbStyle}
      position: relative;
      top: 2px;
      z-index: 100;
    }
    &::-ms-thumb {
      ${ThumbStyle}
    }

    &::-moz-focus-outer {
      border: 0;
    }
  }
`;

const SelectStyle = `
  select {
    padding: 8px;
    margin: 16px 0px;
    font-size: 16px;
    border: 1px solid ${colors.berry};
    position: relative;
    top: -16px;
  }
`;

const PricingLine = styled.section`
  ${tw`md:flex`}
  color: ${colors.textPrimary};
  & h4 {
    font-size: 48px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    & small {
      font-size: 50%;
    }
  }
  & h5 {
    color: ${colors.textSecondary};
    margin-top: 0px;
    margin-bottom: 8px;
    & strong {
      color: ${colors.textPrimary};
      font-size: 16px;
      font-weight: 600;
      position: relative;
      top: -16px;
      & em {
        font-style: normal;
        font-weight: 800;
      }
    }
  }
  ${RangeStyle}
  ${SelectStyle}
`;

const PricingLineInfo = styled.div`
  ${tw`w-full text-left`}
`;

const useWindowSize = () => {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const PricingLineComponent: React.FC = () => {
  const [rangeIdx, setRangeIdx] = useState(2);
  const [width, setWidth] = useState(0);
  const size = useWindowSize();

  const measuredRef = useCallback(
    n => {
      if (n !== null) {
        setWidth(n.getBoundingClientRect().width);
      }
    },
    [size]
  );

  const handleRangeChange = (e: React.FormEvent) => {
    if (e.currentTarget) {
      const val = e.currentTarget.value;
      if (val > 1 && val < 5) {
        setRangeIdx(val);
      }
    }
  };

  const handleRangeClick = (e: number) => {
    setRangeIdx(e);
  };

  return (
    <PricingLine>
      <PricingLineInfo>
        <h4>
          {pricingMatrix[rangeIdx - 1].perMonth}
          <small>/mo</small>
        </h4>
        <Desktop>

          <ProgressBar
            px={((rangeIdx - 1) / 4) * width}
            tick={rangeIdx - 1}
            fullWidth={width}
            handleRangeClick={handleRangeClick}
          />
          <input
            ref={measuredRef}
            type="range"
            min="1"
            max="5"
            value={rangeIdx}
            name="priceSection"
            onChange={handleRangeChange}
          />
        </Desktop>
        <Mobile>
          <select
            name="priceSection"
            value={rangeIdx}
            onChange={handleRangeChange}
          >
            <option value="2">Small</option>
            <option value="3">Medium</option>
            <option value="4">Large</option>
          </select>
        </Mobile>
        <h5>
          <strong>
            <span>Up to <em>{pricingMatrix[rangeIdx - 1].cummulative}</em> notifications/mo</span>
            {
              pricingMatrix[rangeIdx - 1].additional ? (
                <span> + <em>{pricingMatrix[rangeIdx - 1].additional}</em> per additional notification</span>
              ) : null
            }
          </strong>
        </h5>
      </PricingLineInfo>
    </PricingLine>
  );
};

export default PricingLineComponent;
