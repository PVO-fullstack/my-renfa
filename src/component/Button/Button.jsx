import PropTypes from "prop-types";
import css from "./Button.module.scss";

export const Button = ({ children, disabled = true, className = "" }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`rounded-lg transition duration-300 ease-in py-3 px-6 text-base font-medium ${
        disabled
          ? "cursor-auto bg-btnDisabled"
          : "bg-btn hover:bg-btnHover cursor-pointer focus:bg-btnHover"
      } ${css.btn} `}
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
