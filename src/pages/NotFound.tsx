import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  const homeHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className=" text-[#151147] absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-[430px] max-w-full overflow-hidden">
      <img
        src="https://i.ibb.co/TLgjMDs/404error.png"
        alt="error"
        className="mb-[20px]"
      />
      <p className="text-center mb-[13px] text-[16px] font-semibold">
        죄송합니다. <br />
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <p className="text-center mb-[117px] text-[14px] font-medium break-keep">
        찾으시는 페이지의 주소가 잘못 입력되었거나, 페이지의 주소가 변경,
        삭제되어 요청하는 페이지를 찾을 수 없습니다. 아래 다른 서비스를 이용
        해주십시오.
      </p>
      <div className="flex justify-between">
        <button
          onClick={backHandler}
          className="w-[160px] bg-[#151147] text-[#FFFFFF] text-[16px] font-semibold py-[7px] rounded-[16px]"
        >
          이전 페이지로 이동
        </button>
        <button
          onClick={homeHandler}
          className="w-[160px] bg-[#151147] text-[#FFFFFF] text-[16px] font-semibold py-[7px] rounded-[16px]"
        >
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default NotFound;
