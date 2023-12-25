import Link from "next/link";
import React from "react";

export const Logo = ({ className, fill = "#1E1E1E" }) => {
  return (
    <Link href="/" className={className}>
      <svg
        width="150"
        height="46"
        viewBox="0 0 150 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.2003 21.0773C41.5417 20.2032 39.0953 19.6012 38.0603 18.028C37.0253 16.4549 36.1781 13.048 33.5438 11.739C30.9096 10.43 25.8748 10.0625 22.9998 10.0625C20.1248 10.0625 15.0935 10.4219 12.4557 11.7363C9.8179 13.0507 8.97427 16.4549 7.93927 18.0254C6.90427 19.5958 4.45782 20.2032 3.79927 21.0773C3.14071 21.9515 2.67712 27.4778 2.95923 30.1875C3.24134 32.8972 3.76782 34.5 3.76782 34.5H11.4944C12.7594 34.5 13.1709 34.0247 15.7584 33.7812C18.5974 33.5117 21.3826 33.4219 22.9998 33.4219C24.617 33.4219 27.492 33.5117 30.3292 33.7812C32.9167 34.0265 33.3417 34.5 34.5932 34.5H42.2299C42.2299 34.5 42.7564 32.8972 43.0385 30.1875C43.3206 27.4778 42.8552 21.9515 42.2003 21.0773ZM35.9373 34.5H40.9685V35.9375H35.9373V34.5ZM5.03102 34.5H10.0623V35.9375H5.03102V34.5Z"
          stroke={fill}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.7456 27.7761C32.2146 27.1625 30.4842 26.6504 28.1932 26.3072C25.9022 25.964 25.0666 25.875 23.0182 25.875C20.9698 25.875 20.0381 26.0224 17.8423 26.3072C15.6465 26.592 13.9979 27.0987 13.2908 27.7761C12.2298 28.8039 13.7841 29.9575 15.0041 30.0977C16.1865 30.2324 18.5503 30.183 23.0281 30.183C27.5059 30.183 29.8697 30.2324 31.052 30.0977C32.2703 29.9494 33.7132 28.8758 32.7456 27.7761ZM38.7741 21.8365C38.7691 21.7652 38.7378 21.6982 38.6864 21.6485C38.635 21.5987 38.5671 21.5697 38.4956 21.567C37.4345 21.5293 36.3573 21.6047 34.4463 22.1681C33.4714 22.4527 32.5558 22.9111 31.7438 23.5211C31.539 23.681 31.6118 24.1132 31.8687 24.159C33.4438 24.3437 35.0283 24.4367 36.6143 24.4375C37.5657 24.4375 38.5477 24.168 38.7301 23.3199C38.8231 22.8309 38.8379 22.3302 38.7741 21.8365ZM7.22636 21.8365C7.23141 21.7652 7.26262 21.6982 7.31403 21.6485C7.36543 21.5987 7.4334 21.5697 7.50488 21.567C8.56593 21.5293 9.64316 21.6047 11.5541 22.1681C12.5291 22.4527 13.4446 22.9111 14.2566 23.5211C14.4615 23.681 14.3887 24.1132 14.1318 24.159C12.5566 24.3437 10.9721 24.4367 9.38621 24.4375C8.43476 24.4375 7.45277 24.168 7.27039 23.3199C7.1774 22.8309 7.16254 22.3302 7.22636 21.8365Z"
          fill={fill}
        />
        <path
          d="M38.8125 17.25H40.25M5.75 17.25H7.1875M7.00781 18.957C7.00781 18.957 11.1721 17.8789 23 17.8789C34.8279 17.8789 38.9922 18.957 38.9922 18.957"
          stroke={fill}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M61.0227 34.5V11.2273H70.2045C71.9621 11.2273 73.4621 11.5417 74.7045 12.1705C75.9545 12.7917 76.9053 13.6742 77.5568 14.8182C78.2159 15.9545 78.5455 17.2917 78.5455 18.8295C78.5455 20.375 78.2121 21.7045 77.5455 22.8182C76.8788 23.9242 75.9129 24.7727 74.6477 25.3636C73.3902 25.9545 71.8674 26.25 70.0795 26.25H63.9318V22.2955H69.2841C70.2235 22.2955 71.0038 22.1667 71.625 21.9091C72.2462 21.6515 72.7083 21.2652 73.0114 20.75C73.322 20.2348 73.4773 19.5947 73.4773 18.8295C73.4773 18.0568 73.322 17.4053 73.0114 16.875C72.7083 16.3447 72.2424 15.9432 71.6136 15.6705C70.9924 15.3902 70.2083 15.25 69.2614 15.25H65.9432V34.5H61.0227ZM73.5909 23.9091L79.375 34.5H73.9432L68.2841 23.9091H73.5909ZM89.6051 34.8409C87.8097 34.8409 86.2642 34.4773 84.9688 33.75C83.6809 33.0152 82.6884 31.9773 81.9915 30.6364C81.2945 29.2879 80.946 27.6932 80.946 25.8523C80.946 24.0568 81.2945 22.4811 81.9915 21.125C82.6884 19.7689 83.6695 18.7121 84.9347 17.9545C86.2074 17.197 87.6998 16.8182 89.4119 16.8182C90.5634 16.8182 91.6354 17.0038 92.6278 17.375C93.6278 17.7386 94.4991 18.2879 95.2415 19.0227C95.9915 19.7576 96.5748 20.6818 96.9915 21.7955C97.4081 22.9015 97.6165 24.197 97.6165 25.6818V27.0114H82.8778V24.0114H93.0597C93.0597 23.3144 92.9081 22.697 92.6051 22.1591C92.3021 21.6212 91.8816 21.2008 91.3438 20.8977C90.8134 20.5871 90.196 20.4318 89.4915 20.4318C88.7566 20.4318 88.1051 20.6023 87.5369 20.9432C86.9763 21.2765 86.5369 21.7273 86.2188 22.2955C85.9006 22.8561 85.7377 23.4811 85.7301 24.1705V27.0227C85.7301 27.8864 85.8892 28.6326 86.2074 29.2614C86.5331 29.8902 86.9915 30.375 87.5824 30.7159C88.1733 31.0568 88.8741 31.2273 89.6847 31.2273C90.2225 31.2273 90.715 31.1515 91.1619 31C91.6089 30.8485 91.9915 30.6212 92.3097 30.3182C92.6278 30.0152 92.8703 29.6439 93.0369 29.2045L97.5142 29.5C97.2869 30.5758 96.821 31.5152 96.1165 32.3182C95.4195 33.1136 94.518 33.7348 93.4119 34.1818C92.3134 34.6212 91.0445 34.8409 89.6051 34.8409ZM105.616 24.4091V34.5H100.776V17.0455H105.389V20.125H105.594C105.98 19.1098 106.628 18.3068 107.537 17.7159C108.446 17.1174 109.548 16.8182 110.844 16.8182C112.056 16.8182 113.113 17.0833 114.014 17.6136C114.916 18.1439 115.616 18.9015 116.116 19.8864C116.616 20.8636 116.866 22.0303 116.866 23.3864V34.5H112.026V24.25C112.033 23.1818 111.76 22.3485 111.207 21.75C110.654 21.1439 109.893 20.8409 108.923 20.8409C108.272 20.8409 107.696 20.9811 107.196 21.2614C106.704 21.5417 106.317 21.9508 106.037 22.4886C105.764 23.0189 105.624 23.6591 105.616 24.4091ZM130.068 17.0455V20.6818H119.295V17.0455H130.068ZM121.761 34.5V15.7841C121.761 14.5189 122.008 13.4697 122.5 12.6364C123 11.803 123.682 11.178 124.545 10.7614C125.409 10.3447 126.39 10.1364 127.489 10.1364C128.231 10.1364 128.909 10.1932 129.523 10.3068C130.144 10.4205 130.606 10.5227 130.909 10.6136L130.045 14.25C129.856 14.1894 129.621 14.1326 129.341 14.0795C129.068 14.0265 128.788 14 128.5 14C127.788 14 127.292 14.1667 127.011 14.5C126.731 14.8258 126.591 15.2841 126.591 15.875V34.5H121.761ZM137.378 34.8295C136.264 34.8295 135.272 34.6364 134.401 34.25C133.529 33.8561 132.84 33.2765 132.332 32.5114C131.832 31.7386 131.582 30.7765 131.582 29.625C131.582 28.6553 131.76 27.8409 132.116 27.1818C132.473 26.5227 132.957 25.9924 133.571 25.5909C134.185 25.1894 134.882 24.8864 135.662 24.6818C136.45 24.4773 137.276 24.3333 138.139 24.25C139.154 24.1439 139.973 24.0455 140.594 23.9545C141.215 23.8561 141.666 23.7121 141.946 23.5227C142.226 23.3333 142.366 23.053 142.366 22.6818V22.6136C142.366 21.8939 142.139 21.3371 141.685 20.9432C141.238 20.5492 140.601 20.3523 139.776 20.3523C138.904 20.3523 138.211 20.5455 137.696 20.9318C137.181 21.3106 136.84 21.7879 136.673 22.3636L132.196 22C132.423 20.9394 132.87 20.0227 133.537 19.25C134.204 18.4697 135.063 17.8712 136.116 17.4545C137.177 17.0303 138.404 16.8182 139.798 16.8182C140.768 16.8182 141.696 16.9318 142.582 17.1591C143.476 17.3864 144.268 17.7386 144.957 18.2159C145.654 18.6932 146.204 19.3068 146.605 20.0568C147.007 20.7992 147.207 21.6894 147.207 22.7273V34.5H142.616V32.0795H142.48C142.2 32.625 141.825 33.1061 141.355 33.5227C140.885 33.9318 140.321 34.2538 139.662 34.4886C139.003 34.7159 138.241 34.8295 137.378 34.8295ZM138.764 31.4886C139.476 31.4886 140.105 31.3485 140.651 31.0682C141.196 30.7803 141.624 30.3939 141.935 29.9091C142.245 29.4242 142.401 28.875 142.401 28.2614V26.4091C142.249 26.5076 142.041 26.5985 141.776 26.6818C141.518 26.7576 141.226 26.8295 140.901 26.8977C140.575 26.9583 140.249 27.0152 139.923 27.0682C139.598 27.1136 139.302 27.1553 139.037 27.1932C138.469 27.2765 137.973 27.4091 137.548 27.5909C137.124 27.7727 136.795 28.0189 136.56 28.3295C136.325 28.6326 136.207 29.0114 136.207 29.4659C136.207 30.125 136.446 30.6288 136.923 30.9773C137.408 31.3182 138.022 31.4886 138.764 31.4886Z"
          fill={fill}
        />
      </svg>
    </Link>
  );
};
