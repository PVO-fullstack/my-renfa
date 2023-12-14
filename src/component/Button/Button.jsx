import PropTypes from "prop-types";
import css from "./Button.module.scss";

export const Button = ({
  children,
  disabled = true,
  className,
  type = "submit",
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={` ${
        disabled
          ? "cursor-auto bg-btnDisabled"
          : "bg-btn hover:bg-btnHover cursor-pointer focus:bg-btnHover"
      } ${css.btn} ${className} `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
