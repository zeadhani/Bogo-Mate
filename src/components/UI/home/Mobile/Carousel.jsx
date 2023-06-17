import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Carousel({ homeSliders }) {
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
  const navigate = useNavigate();
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {homeSliders && (
            <>
              <div className="embla__slide">
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "30%",
                    textAlign: "center",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#f5f5f5f5",
                      textTransform: "uppercase",
                    }}
                    variant="h3"
                  >
                    {homeSliders[0]?.title}
                  </Typography>

                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: "10px", backgroundColor: "#222" }}
                    onClick={() => navigate("/shop/" + homeSliders[0]?.link)}
                  >
                    Shop Now
                  </Button>
                </Box>
                <img
                  className="embla__slide__img"
                  src={process.env.REACT_APP_CLOUDINARY + homeSliders[0]?.image}
                  alt="Your alt text"
                />
              </div>
              <div className="embla__slide">
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    textAlign: "center",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#f5f5f5f5",
                      textTransform: "uppercase",
                    }}
                    variant="h2"
                  >
                    {homeSliders[1]?.title}
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      mt: "10px",
                      color: "#f5f5f5",
                      border: "1px solid #f5f5f5f5",
                    }}
                    onClick={() => navigate("/shop/" + homeSliders[1]?.link)}
                  >
                    Shop Now
                  </Button>
                </Box>
                <img
                  className="embla__slide__img"
                  src={process.env.REACT_APP_CLOUDINARY + homeSliders[1]?.image}
                  alt="Your alt text"
                />
              </div>
              <div className="embla__slide">
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    textAlign: "center",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#f5f5f5f5",
                      textTransform: "uppercase",
                    }}
                    variant="h2"
                  >
                    {homeSliders[2]?.title}
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      mt: "10px",
                      color: "#f5f5f5",
                      border: "1px solid #f5f5f5f5",
                    }}
                    onClick={() => navigate("/shop/" + homeSliders[2]?.link)}
                  >
                    Shop Now
                  </Button>
                </Box>
                <img
                  className="embla__slide__img"
                  src={process.env.REACT_APP_CLOUDINARY + homeSliders[2]?.image}
                  alt="Your alt text"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
 {/* {Array(3)
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
            ))} */}