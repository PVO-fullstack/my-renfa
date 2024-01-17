import React from "react";

export const Minus = ({ click, width = 31, height = 30 }) => {
  return (
    <svg
      onClick={click}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M16.5 10L5.5 10"
        stroke="#ACADAD"
        strokeWidth="1.03964"
        strokeLinecap="round"
      />
    </svg>
  );
};
