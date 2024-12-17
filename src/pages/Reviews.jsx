import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import useEmblaCarousel from "embla-carousel-react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [value, setValue] = useState(5);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <StyledReviews
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h1>Reviews</h1>
      <div className="slider_container">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <p>
                Akshay consistently exceeds expectations with his technical
                skills, quick learning, and excellent communication. He adapts
                swiftly to new challenges and keeps projects well-aligned.
                Highly recommended for his expertise in system engineering and
                robotics.
              </p>
              <Rating
                name="disabled"
                value={value}
                disabled
                sx={{
                  "& .MuiRating-icon": {
                    fontSize: "3rem",
                  },
                  "& .MuiRating-iconFilled": {
                    color: "#FFD700",
                  },
                  "& .MuiRating-iconHover": {
                    color: "#FFD700",
                  },
                }}
              />
            </div>
            <div className="embla__slide">
              {" "}
              <p>
                Akshay was excellent to work with. He is very good at aligning
                expectations and making deliverables clear. And also very
                reasonable.
              </p>
              <Rating
                name="disabled"
                value={value}
                disabled
                sx={{
                  "& .MuiRating-icon": {
                    fontSize: "3rem",
                  },
                  "& .MuiRating-iconFilled": {
                    color: "#FFD700",
                  },
                  "& .MuiRating-iconHover": {
                    color: "gold",
                  },
                }}
              />
            </div>
            <div className="embla__slide">
              {" "}
              <p>
                I would absolutely recommend Akshay to anyone looking for
                high-level expertise in robotics and software development. His
                work ethic, intelligence, and professionalism are top-notch.
                Without a doubt, I’d rate him 10/10. If you have the chance to
                work with him, you’re in great hands
              </p>
              <Rating
                name="disabled"
                value={value}
                disabled
                sx={{
                  "& .MuiRating-icon": {
                    fontSize: "3rem",
                  },
                  "& .MuiRating-iconFilled": {
                    color: "#FFD700",
                  },
                  "& .MuiRating-iconHover": {
                    color: "gold",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="prev" onClick={scrollPrev}>
            <GrPrevious className="icon" />
          </div>
          <div className="next" onClick={scrollNext}>
            <GrNext className="icon" />
          </div>
        </div>
      </div>
    </StyledReviews>
  );
}

const StyledReviews = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;
  /* height: var(--section-height); */
  /* height: 90vh; */
  h1 {
    font-size: var(--xl-heading);
    margin-bottom: var(--heading-margin);
  }

  .slider_container {
    position: relative;
    width: 100%;
    margin: var(--section-margin) auto;

    .embla {
      overflow: hidden;
    }
    .embla__container {
      display: flex;
    }
    .embla__slide {
      flex: 0 0 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
      /* min-width: 0; */

      p {
        text-align: center;
        max-width: 50ch;
      }
    }

    .controls {
      display: flex;
      /* justify-content: start;
      align-items: flex-start; */
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 5rem;
      .prev,
      .next {
        background-color: var(--primary-color-light);
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;

         &:hover{
            background-color: var(--primary-color-dark);
          }
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25px;
          height: 25px;
          cursor: pointer;
          color: white;
        }
      }
    }
  }

  body.light-mode & {
    .slider_container {
      .controls {
        .prev,
        .next {
          background-color: var(--secondary-color-light);
          

          &:hover{
            background-color: var(--secondary-color-dark);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    h1 {
      text-align: center;
    }

    .slider_container {
      .embla__slide {
        align-items: center;
      }

      .controls {
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (max-width: 640px) {
    h1 {
      text-align: center;
    }
  }
`;
