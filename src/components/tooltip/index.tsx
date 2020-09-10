import classNames from "classnames";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Instance } from "tippy.js";

import tw from "tailwind.macro";

/* eslint-disable @typescript-eslint/no-var-requires */
import { IToolTipProps } from "./types";

import Tippy from "@tippy.js/react";

const Styled = styled(Tippy)`
  height: inherit;

  &.theme-transparent {
    ${tw`bg-transparent`}

    &[x-placement^="top"] {
      .tippy-arrow {
        border-top-color: #1f314f;
      }
    }
  }

  &.theme-dark {
    background-color: #1f314f;

    &[x-placement^="top"] {
      .tippy-arrow {
        border-top-color: #1f314f;
      }
    }
  }

  &.theme-light {
    ${tw`bg-white`}
    color: #1F314F;

    &[x-placement^="top"] {
      .tippy-arrow {
        border-top-color: white;
      }
    }
  }

  &.theme-success {
    background-color: #01c39a;

    &[x-placement^="top"] {
      .tippy-arrow {
        transition: border-color 300ms;
        border-top-color: #01c39a;
      }
    }
  }

  .tippy-content {
    text-align: initial;
  }

  &:not(.isTooltipVisible) * {
    pointer-events: none;
  }

  &.asToolbar {
    padding: 0;
  }

  .tippy-arrow {
    pointer-events: none;
  }

  /* Styling the arrow for different placements */
`;

const Tooltip: React.FunctionComponent<IToolTipProps> = ({
  asToolbar = false,
  children,
  className,
  content,
  delay = [400, 0],
  disabled = false,
  disableWhenDragging = true,
  distance = 10,
  interactive = false,
  onCreate,
  onHide,
  onShow,
  placement = "top",
  theme = "dark",
  visible,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isHoldingDownMouse, setIsHoldingDownMouse] = useState(false);

  const handleOnHide = (instance: Instance) => {
    if (onHide) {
      const shouldHide = onHide(instance);
      if (shouldHide === false) {
        return false;
      }
    }

    setIsTooltipVisible(false);
  };

  const handleOnShow = (instance: Instance) => {
    if (isHoldingDownMouse) {
      return false;
    }

    if (onShow) {
      const shouldShow = onShow(instance);
      if (shouldShow === false) {
        return false;
      }
    }

    setIsTooltipVisible(true);
  };

  if (disabled) {
    return children;
  }

  const handleOnTrigger = (_: Instance, event: MouseEvent) => {
    if (disableWhenDragging) {
      setIsHoldingDownMouse(Boolean(event.buttons));
    }
  };

  return (
    <Styled
      arrow={true}
      className={classNames(`theme-${theme}`, className, {
        asToolbar,
        isTooltipVisible,
      })}
      distance={distance}
      content={content}
      hideOnClick={false}
      interactive={interactive}
      placement={placement}
      delay={delay}
      visible={visible}
      onCreate={onCreate}
      onShow={handleOnShow}
      onHide={handleOnHide}
      onTrigger={handleOnTrigger}
    >
      {children as React.ReactElement}
    </Styled>
  );
};

export default Tooltip;
