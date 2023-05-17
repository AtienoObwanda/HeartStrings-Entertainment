import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-7xl",
  h2: "font-bold text-4xl sm:text-[20px] md:text-[30px]",
  h3: "font-bold md:text-3xl sm:text-[18px] text-[32px]",
  h4: "font-bold sm:text-5xl md:text-5xl text-[300px]",
  h5: "text-2xl md:text-[22px] sm:text-xl",
  h6: "text-xl",
  body1: "font-medium text-lg",
  body2: "font-bold text-[17.16px]",
  body3: "font-bold text-[17.13px]",
  body4: "text-base",
  body5: "font-normal text-md",
  body6: "font-normal text-[14.87px]",
  body7: "font-normal text-[14.85px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
