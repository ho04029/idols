import { leftToRight, rightToLeft } from "../data/directionString";

export const transitionDirectionCalculator = (
  currentPath: number | null,
  previousPath: number | null
): string => {
  if (currentPath === null || previousPath === null) {
    return rightToLeft;
  }

  return currentPath >= previousPath ? rightToLeft : leftToRight;
};
