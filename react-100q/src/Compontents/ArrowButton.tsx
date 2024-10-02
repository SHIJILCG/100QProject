import React, { RefObject, useRef } from "react";
import downImg from "../img/CaretDown.png";
type ArrowButtonProps = {
  onChangeToggle: () => void;
  btnref: RefObject<HTMLButtonElement>;
};

export const ArrowButton = ({ onChangeToggle, btnref }: ArrowButtonProps) => {
  return (
    <button className="btn" ref={btnref} onClick={onChangeToggle}>
      <img src={downImg} alt="arrow down" />
    </button>
  );
};
