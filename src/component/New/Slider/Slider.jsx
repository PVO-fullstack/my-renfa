import React from "react";
import ReactSlider from "react-slick";
// import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Part } from "@/component/Part/Part";

export const Slider = ({
  // centralMode = true,
  className,
  // infinite = true,
  parts,
}) => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          width: "24px",
          height: "24px",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          width: "24px",
          height: "24px",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    // className: className,
    // centerMode: centralMode,
    // speed: 500,
    // infinite: infinite,
    // centerPadding: "0px",
    // slidesToScroll: 1,
    // initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 3860,
    //     settings: {
    //       centerMode: centralMode,
    //       infinite: infinite,
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       rows: 2,
    //       slidesPerRow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 1279,
    //     settings: {
    //       infinite: infinite,
    //       centerMode: false,
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       centerMode: false,
    //       infinite: infinite,
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className={className}>
      <h2> Single Item</h2>
      <ReactSlider {...settings}>
        {/* <ul style={{ display: "flex" }}> */}
        {parts.map((item) => (
          <Part key={item._id} part={item} />
        ))}
        {/* </ul> */}
      </ReactSlider>
    </div>
  );
};

// Slider.propTypes = {
//   centralMode: PropTypes.bool,
//   className: PropTypes.string,
//   infinite: PropTypes.bool,
//   children: PropTypes.node,
// };