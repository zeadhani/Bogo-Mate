import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";



const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());
export const Thumb = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
    </div>
  );
};
function ProductImage(props) {
  // const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);
  return (
    <div className="embla2">
      <div className="embla__viewport2" ref={emblaMainRef}>
        <div className="embla__container2">
          {slides.map((index) => (
            <div className="embla__slide2" key={index}>
              
              <img
                className="embla__slide__img2"
                src={props.image}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={props.image}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductImage;
// <Box
//   p={2}
//   sx={{
//     height: {
//       xs: "200px",
//       md: "250px",
//       lg: "300px",
//     },
//   }}
// >
//   <img
//     src={image}
//     alt="Product"
//     width={"100%"}
//     style={{
//       objectFit: "contain",
//       borderRadius: "5px",
//       height: "100%",
//     }}
//   />
// </Box>
