import React, { useRef } from "react";
import { Location } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { rightToLeft } from "../data/directionString";

const RouteTransition = ({
  location,
  children,
  direction,
}: {
  location: Location;
  children: React.ReactNode;
  direction: string;
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const pathname = location.pathname;

  return (
    <SwitchTransition>
      <CSSTransition
        key={pathname}
        nodeRef={nodeRef}
        timeout={300}
        classNames={{
          enter:
            direction === rightToLeft
              ? "animate-fadeInRight"
              : "animate-fadeInLeft",
          exit:
            direction === rightToLeft
              ? "animate-fadeOutLeft"
              : "animate-fadeOutRight",
        }}
        unmountOnExit
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default RouteTransition;
