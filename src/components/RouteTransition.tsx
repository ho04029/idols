import React from "react";
import { Location } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const RouteTransition = ({
  location,
  children,
}: {
  location: Location;
  children: React.ReactNode;
}) => {
  const pathname = location.pathname;

  return (
    <TransitionGroup>
      <CSSTransition
        key={pathname}
        timeout={300}
        classNames={{
          enter: "animate-fadeInRight",
          exit: "animate-fadeOutLeft",
        }}
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteTransition;
