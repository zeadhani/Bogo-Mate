import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
function Carousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      axis: "x",
      direction: "ltr",
      skipSnaps: true,

    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array(3)
            .fill(0)
            .map((index) => (
              <div className="embla__slide" key={Math.random()}>
                <img
                  className="embla__slide__img"
                  src={
                    "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
                  }
                  alt="Your alt text"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
