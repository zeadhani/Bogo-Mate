import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

function Carousel({ homeSliders }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (homeSliders) {
      setIsLoading(false);
    }
  }, [homeSliders]);
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
          {!isLoading &&
            homeSliders.map((slide) => (
              <div className="embla__slide" key={slide.id}>
                <div
                  className="embla__slide__content"
                  style={{
                    backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(30, 30, 30, 0.8)), url(${
                      process.env.REACT_APP_CLOUDINARY + slide.image
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#fff",
                    padding: "1rem",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#f5f5f5f5",
                      textTransform: "uppercase",
                    }}
                    variant="h1"
                  >
                    {slide.title}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: "10px",
                      backgroundColor: "transparent",
                      color: "#f5f5f5",
                      border: "1px solid #f5f5f5f5",
                    }}
                    // onClick={() => navigate("/shop/" + slide.link)}
                  >
                    DISCOVER
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
