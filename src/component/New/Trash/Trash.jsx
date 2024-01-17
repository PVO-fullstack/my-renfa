import React from "react";

export const Trash = ({ className, click }) => {
  return (
    <svg
      onClick={click}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M1.5 4.10938H2.94444H14.5"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0564 4.10764V14.2187C13.0564 14.6018 12.9042 14.9692 12.6334 15.2401C12.3625 15.511 11.9951 15.6632 11.612 15.6632H4.38976C4.00667 15.6632 3.63927 15.511 3.36838 15.2401C3.09749 14.9692 2.94531 14.6018 2.94531 14.2187V4.10764M5.11198 4.10764V2.66319C5.11198 2.2801 5.26416 1.9127 5.53505 1.64182C5.80593 1.37093 6.17333 1.21875 6.55642 1.21875H9.44531C9.8284 1.21875 10.1958 1.37093 10.4667 1.64182C10.7376 1.9127 10.8898 2.2801 10.8898 2.66319V4.10764"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.55469 7.71875V12.0521"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.44531 7.71875V12.0521"
        stroke="#1E1E1E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
