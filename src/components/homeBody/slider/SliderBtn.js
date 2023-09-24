import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SliderBtn = ({ direction, moveSlide }) => {
  return (
    <div
      className={
        direction === "next" ? "btnMoveSlid btnNext" : "btnMoveSlid btnprev"
      }
    >
      {direction === "next" ? (
        <IoIosArrowBack onClick={moveSlide} size={50} />
      ) : (
        <IoIosArrowForward onClick={moveSlide} size={50} />
      )}
    </div>
  );
};

export default SliderBtn;
