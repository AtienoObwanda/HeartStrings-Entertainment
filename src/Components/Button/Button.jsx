import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-lg",
  RoundedBorder4: "rounded",
  icbRoundedBorder2: "rounded-sm",
};
const variants = {
  FillRed900: "bg-red_900",
  OutlineWhiteA700:
    "bg-white_A700 border border-solid border-white_A700 text-black_900",
  OutlineWhiteA700_1: "border border-solid border-white_A700 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_900_01",
  FillBlack900: "bg-black_900 text-white_A700",
  OutlineWhiteA700_2:
    "bg-black_900 border border-solid border-white_A700 text-white_A700",
  FillRed90001: "bg-red_900_01 text-white_A700",
  FillGray900: "bg-gray_900 text-white_A700",
  FillLightblue500: "bg-light_blue_500 text-white_A700",
  FillBlack90001: "bg-black_900_01 text-white_A700",
  icbFillRed900: "bg-red_900",
  icbFillGray800: "bg-gray_800",
};
const sizes = {
  sm: "p-[5px]",
  md: "p-3",
  lg: "p-[15px]",
  smIcn: "p-[11px]",
  mdIcn: "p-4",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder4",
    "icbRoundedBorder2",
  ]),
  variant: PropTypes.oneOf([
    "FillRed900",
    "OutlineWhiteA700",
    "OutlineWhiteA700_1",
    "FillWhiteA700",
    "FillBlack900",
    "OutlineWhiteA700_2",
    "FillRed90001",
    "FillGray900",
    "FillLightblue500",
    "FillBlack90001",
    "icbFillRed900",
    "icbFillGray800",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
