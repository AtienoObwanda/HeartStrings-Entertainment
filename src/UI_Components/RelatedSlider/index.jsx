import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const RelatedSlider = React.forwardRef(
  (
    {
      className,
      slidesToShow,
      items,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",

      ...props
    },
    ref
  ) => {
    const isSmall = (index) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS]
                .filter(Boolean)
                .join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <div className={className}>
        <AliceCarousel
          items={slideItems}
          disableButtonsControls
          mouseTracking
          infinite
          ref={ref}
          disableDotsControls
          {...props}
          touchTracking
          responsive={{
            0: { items: 1 },
            568: { items: 2 },
            1024: { items: 3 },
          }}
        />
      </div>
    );
  }
);
export { RelatedSlider };
