import React, { useRef } from "react";
import { Location } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const leftToRight = "leftToRight";
export const rightToLeft = "rightToLeft";

const RouteTransition = ({
  location,
  children,
}: {
  location: Location;
  children: React.ReactNode;
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const pathname = location.pathname;
  const direction = location.state?.direction;

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
