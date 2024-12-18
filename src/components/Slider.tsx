import { useState, useRef } from "react";

const Slider = ({ slides }: { slides: string[] }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const startX = useRef<number | null>(null); // 드래그 시작 X 좌표

  const canSlideNext = current < length - 1;
  const canSlidePrev = current > 0;

  const handleStart = (x: number) => {
    startX.current = x; // 시작 위치 저장
  };

  const handleEnd = (x: number) => {
    if (startX.current === null) return;

    const deltaX = startX.current - x;

    if (deltaX > 50 && canSlideNext) {
      setCurrent((prev) => prev + 1); // 오른쪽 → 왼쪽 드래그
    } else if (deltaX < -50 && canSlidePrev) {
      setCurrent((prev) => prev - 1); // 왼쪽 → 오른쪽 드래그
    }

    startX.current = null; // 초기화
  };

  const eventStartHandler = (e: React.DragEvent | React.TouchEvent) => {
    const x = "clientX" in e ? e.clientX : e.touches[0].clientX;
    handleStart(x);
  };

  const eventEndHandler = (e: React.DragEvent | React.TouchEvent) => {
    const x = "clientX" in e ? e.clientX : e.changedTouches[0].clientX;
    handleEnd(x);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="flex relative lg:w-[379px] h-[314px] lg:h-[554px]">
      {slides.map((slide, index) => {
        const isActive = index === current;
        const isLeftStack = index < current;
        const isRightStack = index > current;

        const zIndex = isActive
          ? 10
          : isLeftStack
          ? 10 - (current - index)
          : isRightStack
          ? 10 - (index - current)
          : "";

        const transform = isActive
          ? "translateX(50%)"
          : `translateX(calc(50% + ${index - current} * 10px)) rotate(${
              (index - current) * 2
            }deg)`;

        return (
          <div
            key={index}
            draggable
            onDragStart={eventStartHandler}
            onDragEnd={eventEndHandler}
            onDragOver={(e) => e.preventDefault()}
            onTouchStart={eventStartHandler}
            onTouchEnd={eventEndHandler}
            className={`w-[209px] lg:w-[379px] h-[314px] lg:h-[554px] flex absolute right-1/2 cursor-grab transition-transform duration-[2000ms] ease-in-out`}
            style={{ zIndex, transform }}
          >
            <img src={slide} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
