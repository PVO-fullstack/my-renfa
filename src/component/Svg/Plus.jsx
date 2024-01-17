import React from "react";

export const Plus = ({ click, width = 31, height = 30 }) => {
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
        d="M11 4V15M16.5 9.5L5.5 9.5"
        stroke="#1E1E1E"
        strokeWidth="1.03964"
        strokeLinecap="round"
      />
    </svg>
  );
};
