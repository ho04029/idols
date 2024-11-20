import { useState, useEffect } from "react";

const Slider = ({ slides }: { slides: string[] }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  let prevSlide = current === 0 ? length - 1 : current - 1;
  let nextSlide = current === length - 1 ? 0 : current + 1;

  const nextSlideHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlideHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlideHandler();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="flex relative h-[314px]">
      {slides.map((slide, index) => {
        const isActive = index === current;
        const isNext = index === nextSlide;
        const isPrev = index === prevSlide;

        return (
          <div
            key={index}
            onClick={() => {
              if (isNext) {
                nextSlideHandler();
              } else if (isPrev) {
                prevSlideHandler();
              }
            }}
            className={`flex w-[209px] h-[314px] transition-transform duration-[2000ms] ease-in-out absolute ${
              isActive
                ? " right-1/2 translate-x-1/2 translate-y-[-12px] z-10"
                : isNext
                ? "translate-x-[100%]"
                : isPrev
                ? "translate-x-[0%]"
                : "hidden"
            }`}
          >
            <img src={slide} alt="" className="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
