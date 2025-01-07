import { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ slides }: { slides: string[] }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  let prevSlide = current === 0 ? length - 1 : current - 1;
  let nextSlide = current === length - 1 ? 0 : current + 1;
  const startX = useRef<number | null>(null); // 드래그 시작 X 좌표

  //다음 슬라이드와 이전 슬라이드를 구하는 핼퍼함수
  const getNextSlide = () => (current === length - 1 ? 0 : current + 1);
  const getPrevSlide = () => (current === 0 ? length - 1 : current - 1);

  const handleStart = (x: number) => {
    startX.current = x; // 시작 위치 저장
  };

  const handleEnd = (x: number) => {
    if (startX.current === null) return;

    const deltaX = startX.current - x;

    if (deltaX > 50) {
      setCurrent(getNextSlide()); // 오른쪽 → 왼쪽 드래그
    } else if (deltaX < -50) {
      setCurrent(getPrevSlide); // 왼쪽 → 오른쪽 드래그
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
    <div className="flex justify-around items-center relative w-full h-[314px] lg:h-[627px]">
      <IoIosArrowBack
        onClick={() => setCurrent(getPrevSlide())}
        className="hidden lg:visible -translate-x-[409px] text-[40px] cursor-pointer"
      />
      {slides.map((slide, index) => {
        const isActive = index === current;
        const isNext = index === nextSlide;
        const isPrev = index === prevSlide;

        return (
          <div
            key={index}
            draggable
            onDragStart={eventStartHandler}
            onDragEnd={eventEndHandler}
            onDragOver={(e) => e.preventDefault()}
            onTouchStart={eventStartHandler}
            onTouchEnd={eventEndHandler}
            className={`flex w-[209px] lg:w-[425px] h-[314px] lg:h-[627px] transition-transform duration-[2000ms] ease-in-out absolute ${
              isActive
                ? "translate-y-[-12px] lg:translate-y-[-24px] z-10"
                : isNext
                ? "translate-x-[65px] lg:translate-x-[120px]"
                : isPrev
                ? "-translate-x-[65px] lg:-translate-x-[120px]"
                : "hidden"
            }`}
          >
            <img src={slide} alt="" />
          </div>
        );
      })}
      <IoIosArrowForward
        onClick={() => setCurrent(getNextSlide())}
        className="hidden lg:visible translate-x-[409px] text-[40px] cursor-pointer"
      />
    </div>
  );
};

export default Slider;
