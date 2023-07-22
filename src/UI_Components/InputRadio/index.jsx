import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../ErrorMessage";

const variants = { FillGray800: "bg-gray_800" };
const shapes = { RoundedBorder4: "rounded", RoundedBorder8: "rounded-lg" };
const sizes = { sm: "p-2.5", md: "px-[13px] py-3.5" };

const InputRadio = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      options = [], // Array of radio options in the format: { value: 'Option1', label: 'Option 1 Label' }
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <div className="flex flex-col gap-2">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  ref={ref}
                  className={`${className} bg-transparent border-0`}
                  type="radio"
                  name={name}
                  value={option.value}
                  onChange={handleChange}
                  {...restProps}
                />
                <span className="radio-icon" />
                {option.label}
              </label>
            ))}
          </div>
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

InputRadio.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  shape: PropTypes.oneOf(["RoundedBorder4", "RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillGray800"]),
  size: PropTypes.oneOf(["sm", "md"]),
  onChange: PropTypes.func,
};

InputRadio.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  options: [],
  shape: "",
  variant: "",
  size: "",
};

export { InputRadio };
