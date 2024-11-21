import { useState, useRef } from "react";

const Slider = ({ slides }: { slides: string[] }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const startX = useRef<number | null>(null); // 드래그 시작 X 좌표

  const canSlideNext = current < length - 1;
  const canSlidePrev = current > 0;

  const dragStartHandler = (e: React.DragEvent) => {
    startX.current = e.clientX; //시작위치
  };

  const dragEndHandler = (e: React.DragEvent) => {
    if (startX.current === null) return;

    const endX = e.clientX;
    const deltaX = startX.current - endX;

    if (deltaX > 50 && canSlideNext) {
      // 오른쪽 → 왼쪽 드래그: 다음 슬라이드
      setCurrent((prev) => prev + 1);
    } else if (deltaX < -50 && canSlidePrev) {
      // 왼쪽 → 오른쪽 드래그: 이전 슬라이드
      setCurrent((prev) => prev - 1);
    }

    startX.current = null; // 초기화
  };

  const touchStartHandler = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const touchEndHandler = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = startX.current - endX;

    if (deltaX > 50 && canSlideNext) {
      setCurrent((prev) => prev + 1);
    } else if (deltaX < -50 && canSlidePrev) {
      setCurrent((prev) => prev - 1);
    }

    startX.current = null;
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="flex relative h-[314px]">
      {slides.map((slide, index) => {
        const isActive = index === current;
        const isLeftStack = index < current;
        const isRightStack = index > current;

        return (
          <div
            key={index}
            draggable
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
            className={`w-[209px] h-[314px] flex absolute right-1/2 cursor-grab transition-transform duration-[2000ms] ease-in-out ${
              isActive
                ? "z-10 translate-x-1/2"
                : isLeftStack
                ? `translate-x-[-50%]`
                : isRightStack
                ? `translate-x-full`
                : ""
            }`}
            style={{
              zIndex: isActive
                ? 10
                : isLeftStack
                ? 10 - (current - index)
                : isRightStack
                ? 10 - (index - current)
                : "",
            }}
          >
            <img src={slide} alt="" className="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
