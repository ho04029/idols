import React from "react";
import { Location } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const leftToRight = "leftToRight";
export const rightToLeft = "rightToLeft";

const RouteTransition = ({
  location,
  children,
}: {
  location: Location;
  children: React.ReactNode;
}) => {
  const pathname = location.pathname;
  const direction = location.state?.direction;

  return (
    <TransitionGroup className="w-full relative">
      <CSSTransition
        key={pathname}
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
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteTransition;
