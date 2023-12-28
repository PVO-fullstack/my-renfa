import React from "react";
import style from "./Arrow.module.scss";

export const Arrow = ({ open }) => {
  return (
    <div className={open ? style.open : style.close}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15 8.33331L10.5893 12.7441C10.2638 13.0695 9.73618 13.0695 9.41074 12.7441L5 8.33331"
          stroke="#1E1E1E"
          strokeWidth="1.29"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
