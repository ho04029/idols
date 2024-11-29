import React, { useRef } from "react";
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
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const pathname = location.pathname;
  const direction = location.state?.direction;

  return (
    <TransitionGroup
      childFactory={(child) => {
        return React.cloneElement(child, {
          classNames: {
            enter:
              direction === rightToLeft
                ? "animate-fadeInRight"
                : "animate-fadeInLeft",
            exit:
              direction === rightToLeft
                ? "animate-fadeOutLeft"
                : "animate-fadeOutRight",
          },
        });
      }}
      className="w-full relative"
    >
      <CSSTransition
        key={pathname}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteTransition;
