import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const RouteTransition = ({
  location,
  children,
}: {
  location: string;
  children: React.ReactNode;
}) => {
  return (
    <TransitionGroup className="w-full">
      <CSSTransition
        key={location}
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
